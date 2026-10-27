import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const configured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
  return NextResponse.json({ service: "jesseman-portfolio-labs", status: "ok", cloud_workspace_configured: configured, version: "1.0.0" }, { headers: { "Cache-Control": "no-store" } });
}
