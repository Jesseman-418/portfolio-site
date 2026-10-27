import { NextResponse } from "next/server";
import { simulateJourney } from "../../../../lib/journey.js";

type Step = { id: string; type: "email" | "in_app" | "wait"; label: string; delay_minutes?: number };
type JourneyDefinition = { audience: { plan?: string; inactive_days?: number; min_activity?: number }; steps: Step[] };

export async function POST(request: Request) {
  let input: { definition?: JourneyDefinition };
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }
  const definition = input?.definition;
  if (!definition || !Array.isArray(definition.steps) || definition.steps.length > 12 || !definition.audience || typeof definition.audience !== "object") {
    return NextResponse.json({ error: "Provide an audience object and at most 12 journey steps." }, { status: 400 });
  }
  if (definition.steps.some((step) => !step || !["email", "in_app", "wait"].includes(step.type) || typeof step.label !== "string" || step.label.length > 160)) {
    return NextResponse.json({ error: "Each step needs a supported type and a label under 160 characters." }, { status: 422 });
  }
  return NextResponse.json({ run_id: crypto.randomUUID(), ...simulateJourney(definition) });
}
