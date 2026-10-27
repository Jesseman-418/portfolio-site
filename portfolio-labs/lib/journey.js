const demoContacts = [
  { id: "cont_amber", name: "Amber", plan: "trial", last_seen_days: 1, activity_count: 4 },
  { id: "cont_basil", name: "Basil", plan: "paid", last_seen_days: 8, activity_count: 17 },
  { id: "cont_cedar", name: "Cedar", plan: "trial", last_seen_days: 4, activity_count: 1 },
  { id: "cont_dove", name: "Dove", plan: "paid", last_seen_days: 2, activity_count: 6 },
];

export function simulateJourney(definition, contacts = demoContacts) {
  const rules = definition?.audience || {};
  const eligible = contacts.filter((contact) => {
    if (rules.plan && rules.plan !== "any" && contact.plan !== rules.plan) return false;
    if (Number.isFinite(Number(rules.inactive_days)) && rules.inactive_days > 0 && contact.last_seen_days < rules.inactive_days) return false;
    if (Number.isFinite(Number(rules.min_activity)) && contact.activity_count < rules.min_activity) return false;
    return true;
  });
  const steps = (definition?.steps || []).slice(0, 12);
  const outcomes = eligible.map((contact) => {
    const deliveries = steps.map((step, index) => {
      const delivered = step.type === "wait" || (contact.id.charCodeAt(contact.id.length - 1) + index) % 5 !== 0;
      return { step_id: step.id, type: step.type, label: step.label, status: step.type === "wait" ? "scheduled" : delivered ? "delivered" : "bounced", time_offset_minutes: index === 0 ? 0 : Number(step.delay_minutes) || index * 30 };
    });
    return { contact_id: contact.id, contact_name: contact.name, plan: contact.plan, status: deliveries.some((item) => item.status === "bounced") ? "partial" : "completed", deliveries };
  });
  const deliveryCount = outcomes.flatMap((item) => item.deliveries).filter((item) => item.status === "delivered").length;
  const bouncedCount = outcomes.flatMap((item) => item.deliveries).filter((item) => item.status === "bounced").length;
  return {
    contacts_considered: contacts.length,
    contacts_eligible: eligible.length,
    contacts_excluded: contacts.length - eligible.length,
    delivery_count: deliveryCount,
    bounced_count: bouncedCount,
    engagement_rate: deliveryCount ? Math.round((deliveryCount - bouncedCount) / deliveryCount * 100) : 0,
    outcomes,
    simulator_version: "journey-sim-v1",
  };
}

export { demoContacts };
