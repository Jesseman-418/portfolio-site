"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabase } from "../lib/supabase";

const initial = {
  name: "Trial onboarding · activation",
  audience: { plan: "trial", inactive_days: 0, min_activity: 0 },
  steps: [
    { id: "welcome", type: "email", label: "Welcome and first steps", delay_minutes: 0 },
    { id: "wait-1", type: "wait", label: "Wait 1 day", delay_minutes: 1440 },
    { id: "nudge", type: "in_app", label: "Prompt to invite a teammate", delay_minutes: 1440 },
  ],
};

const templates = {
  email: "Send an email",
  in_app: "Show an in-app message",
  wait: "Wait step",
};

export default function JourneyStudio() {
  const supabase = useMemo(() => getSupabase(), []);
  const [user, setUser] = useState(null);
  const [journey, setJourney] = useState(initial);
  const [savedId, setSavedId] = useState(null);
  const [run, setRun] = useState(null);
  const [history, setHistory] = useState([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");
  const [authMessage, setAuthMessage] = useState("");

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user || null));
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!user || !supabase) return;
    let active = true;
    Promise.all([
      supabase.from("lab_journeys").select("*").order("updated_at", { ascending: false }).limit(1).maybeSingle(),
      supabase.from("lab_journey_events").select("*").order("occurred_at", { ascending: false }).limit(12),
    ]).then(([journeyResult, eventsResult]) => {
      if (!active) return;
      if (journeyResult.data) {
        setSavedId(journeyResult.data.id);
        setJourney({ name: journeyResult.data.name, ...journeyResult.data.definition });
      }
      if (eventsResult.data) setHistory(eventsResult.data);
    });
    return () => { active = false; };
  }, [user, supabase]);

  function updateAudience(key, value) {
    setJourney((current) => ({ ...current, audience: { ...current.audience, [key]: value } }));
  }

  function updateStep(id, key, value) {
    setJourney((current) => ({ ...current, steps: current.steps.map((step) => step.id === id ? { ...step, [key]: value } : step) }));
  }

  function addStep(type) {
    if (journey.steps.length >= 12) return setNotice("A journey can contain up to 12 steps in this demo.");
    setJourney((current) => ({ ...current, steps: [...current.steps, { id: crypto.randomUUID(), type, label: templates[type], delay_minutes: 0 }] }));
  }

  async function saveJourney() {
    if (!supabase || !user) return setNotice("Sign in to save this journey to your private workspace.");
    setBusy(true); setNotice("");
    const payload = { name: journey.name.trim() || "Untitled journey", status: "draft", definition: { audience: journey.audience, steps: journey.steps }, updated_at: new Date().toISOString() };
    const result = savedId
      ? await supabase.from("lab_journeys").update(payload).eq("id", savedId).select().single()
      : await supabase.from("lab_journeys").insert(payload).select().single();
    setBusy(false);
    if (result.error) setNotice(`Save failed: ${result.error.message}`);
    else { setSavedId(result.data.id); setNotice("Journey saved to Supabase."); }
  }

  async function simulate() {
    setBusy(true); setNotice("");
    try {
      const response = await fetch("/api/journey/simulate", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ definition: { audience: journey.audience, steps: journey.steps } }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Simulation failed.");
      setRun(result);
      if (user && supabase) {
        const jobs = result.outcomes.map((outcome) => ({ journey_id: savedId, contact_id: outcome.contact_id, status: "completed", completed_at: new Date().toISOString(), result: outcome }));
        if (!savedId) throw new Error("Save this journey first so simulation events have a journey record.");
        const [jobResult, eventResult] = await Promise.all([
          supabase.from("lab_journey_jobs").insert(jobs),
          supabase.from("lab_journey_events").insert({ journey_id: savedId, event_type: "simulation.completed", event_payload: { run_id: result.run_id, ...result } }).select().single(),
        ]);
        if (jobResult.error || eventResult.error) throw new Error(`Simulation ran, but history did not persist: ${(jobResult.error || eventResult.error).message}`);
        if (eventResult.data) setHistory((current) => [eventResult.data, ...current]);
      }
    } catch (error) { setNotice(error.message || "Simulation failed. Try again."); }
    finally { setBusy(false); }
  }

  async function signIn(event) {
    event.preventDefault();
    if (!supabase) return setAuthMessage("Cloud sign-in is not configured; demo simulation is available.");
    const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: true } });
    setAuthMessage(error ? error.message : "Sign-in link sent. Check your inbox to save journeys.");
  }

  return <main className="journey-shell">
    <aside className="journey-sidebar">
      <a href="/" className="brand"><span className="brand-icon">J</span><span>Jesseman Labs</span></a>
      <p className="sidebar-heading">Portfolio projects</p>
      <a className="lab-nav" href="/">01 <span>DocQA Workspace</span></a>
      <a className="lab-nav active" href="/journey">02 <span>Journey Studio</span></a>
      <div className="journey-side-note"><b>WORKFLOW LAB</b><p>Build an audience, arrange message steps, and inspect a simulated delivery run.</p></div>
      <div className="journey-user">{user ? <><small>WORKSPACE ACCOUNT</small><strong>{user.email}</strong><button onClick={() => supabase.auth.signOut()}>Sign out</button></> : <form onSubmit={signIn}><small>SAVE YOUR JOURNEYS</small><input aria-label="Email address" type="email" autoComplete="email" required placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} /><button type="submit">Email sign-in link</button>{authMessage && <p role="status">{authMessage}</p>}</form>}</div>
    </aside>
    <section className="journey-main">
      <header className="journey-topbar"><span>PRODUCT ANALYTICS <b>/</b> LIFECYCLE FLOWS</span><span>{user ? "PRIVATE WORKSPACE" : "DEMO MODE"}</span></header>
      <div className="journey-content">
        <div className="journey-title-row"><div><p className="eyebrow">FULL-STACK PRODUCT ENGINEERING</p><h1>Customer journey<br/><em>workflow studio.</em></h1><p>Define who enters, shape each touchpoint, and simulate delivery outcomes before a campaign goes live.</p></div><div className="journey-actions"><button className="quiet-button" onClick={saveJourney} disabled={busy}>Save draft</button><button className="primary-button" onClick={simulate} disabled={busy || journey.steps.length === 0}>{busy ? "Running…" : "Run simulation"}</button></div></div>
        {notice && <div className="notice" role="status"><span>{notice}</span><button onClick={() => setNotice("")} aria-label="Dismiss">×</button></div>}
        <div className="journey-work-grid">
          <section className="journey-panel"><div className="journey-panel-heading"><div><span>01</span><h2>Journey definition</h2></div><small>DRAFT</small></div>
            <label className="field-label" htmlFor="journey-name">Journey name</label><input className="journey-input" id="journey-name" value={journey.name} onChange={(e) => setJourney((current) => ({ ...current, name: e.target.value }))}/>
            <h3 className="subhead">Audience rules</h3><div className="audience-fields"><label><small>Plan type</small><select value={journey.audience.plan || "any"} onChange={(e) => updateAudience("plan", e.target.value)}><option value="any">Any plan</option><option value="trial">Trial</option><option value="paid">Paid</option></select></label><label><small>Inactive for at least (days)</small><input type="number" min="0" value={journey.audience.inactive_days ?? 0} onChange={(e) => updateAudience("inactive_days", Number(e.target.value))}/></label><label><small>Minimum activity count</small><input type="number" min="0" value={journey.audience.min_activity ?? 0} onChange={(e) => updateAudience("min_activity", Number(e.target.value))}/></label></div>
            <h3 className="subhead steps-title">Message sequence <span>{journey.steps.length} steps</span></h3><div className="journey-steps">{journey.steps.map((step,index) => <article className="journey-step" key={step.id}><div className="journey-step-top"><span className="step-index">{String(index+1).padStart(2,"0")}</span><span className={`step-type type-${step.type}`}>{step.type.replace("_"," ")}</span><button className="remove-step" aria-label={`Remove ${step.label}`} onClick={() => setJourney((current) => ({ ...current, steps: current.steps.filter((item) => item.id !== step.id) }))}>×</button></div><input value={step.label} aria-label={`${step.type} step label`} onChange={(e) => updateStep(step.id,"label",e.target.value)}/>{index > 0 && <label className="step-delay"><span>Delay before step</span><input type="number" min="0" value={step.delay_minutes ?? 0} onChange={(e) => updateStep(step.id,"delay_minutes",Number(e.target.value))}/><span>minutes</span></label>}</article>)}</div>
            <div className="add-step-row"><button onClick={() => addStep("email")}>＋ Email</button><button onClick={() => addStep("in_app")}>＋ In-app</button><button onClick={() => addStep("wait")}>＋ Wait</button></div>
          </section>
          <section className="journey-panel outcomes-panel"><div className="journey-panel-heading"><div><span>02</span><h2>Simulation outcomes</h2></div><small>{run ? "LATEST RUN" : "READY"}</small></div>
            {run ? <><div className="outcome-stats"><div><strong>{run.contacts_eligible}</strong><span>Eligible contacts</span></div><div><strong>{run.delivery_count}</strong><span>Deliveries</span></div><div><strong>{run.bounced_count}</strong><span>Bounced</span></div><div><strong>{run.engagement_rate}%</strong><span>Delivery health</span></div></div><p className="simulation-note">Simulated {run.contacts_considered} sample contacts · {run.contacts_excluded} excluded by audience rules · run {run.run_id.slice(0,8)}</p><div className="outcome-list">{run.outcomes.map((outcome) => <article key={outcome.contact_id}><div className="outcome-contact"><span className="avatar">{outcome.contact_name[0]}</span><div><strong>{outcome.contact_name}</strong><small>{outcome.plan} plan · {outcome.status}</small></div></div><div className="outcome-deliveries">{outcome.deliveries.map((delivery,index) => <span className={`delivery delivery-${delivery.status}`} title={`${delivery.label}: ${delivery.status}`} key={`${delivery.step_id}-${index}`}>{delivery.status === "delivered" ? "✓" : delivery.status === "bounced" ? "!" : "◷"}</span>)}</div></article>)}</div></> : <div className="journey-empty"><span>↗</span><strong>Your first run will show the flow here</strong><p>Simulations use four sample contacts, predictable delivery outcomes, and visible audience exclusions. No messages are sent.</p></div>}
            <div className="audit-panel"><div><h3>Event & audit history</h3><span>{history.length} EVENTS</span></div>{history.length ? history.slice(0,5).map((item) => <p key={item.id}><b>{item.event_type}</b><time>{new Date(item.occurred_at).toLocaleString()}</time></p>) : <p className="history-empty">Save and simulate while signed in to keep an audit trail.</p>}</div>
          </section>
        </div>
        <footer className="journey-footer"><span>Journey Studio · Portfolio project 02</span><span>Simulated delivery only. A persisted job record demonstrates queue state; no customer messages are sent.</span></footer>
      </div>
    </section>
  </main>;
}
