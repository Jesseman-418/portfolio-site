-- Shared, owner-scoped persistence for the ten portfolio project demos.
-- The browser uses Supabase Auth + the publishable key; all data access is RLS-protected.

create extension if not exists vector with schema extensions;

create table if not exists public.lab_documents (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  collection_name text not null default 'Default collection',
  file_name text not null,
  title text not null,
  content text not null default '',
  ingestion_status text not null default 'ready' check (ingestion_status in ('queued','processing','ready','failed')),
  chunks jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_document_queries (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  document_id uuid references public.lab_documents(id) on delete set null,
  question text not null,
  answer text not null,
  citations jsonb not null default '[]'::jsonb,
  evaluation jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_document_chunks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  document_id uuid not null references public.lab_documents(id) on delete cascade,
  chunk_index integer not null check (chunk_index >= 0),
  content text not null,
  page_number integer,
  embedding extensions.vector(384) not null,
  created_at timestamptz not null default now(),
  unique (owner_id, document_id, chunk_index)
);

create table if not exists public.lab_journeys (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  status text not null default 'draft' check (status in ('draft','active','paused')),
  definition jsonb not null default '{"steps":[],"audience":{}}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lab_journey_events (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  journey_id uuid references public.lab_journeys(id) on delete cascade,
  event_type text not null,
  event_payload jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

create table if not exists public.lab_journey_jobs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  journey_id uuid not null references public.lab_journeys(id) on delete cascade,
  contact_id text not null,
  status text not null default 'queued' check (status in ('queued','running','completed','failed')),
  scheduled_for timestamptz not null default now(),
  completed_at timestamptz,
  result jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_webhook_endpoints (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  is_enabled boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_webhook_deliveries (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  endpoint_id uuid references public.lab_webhook_endpoints(id) on delete set null,
  event_type text not null,
  idempotency_key text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'queued' check (status in ('queued','delivered','retrying','dead_letter')),
  attempt_count integer not null default 0 check (attempt_count >= 0),
  simulated_response_code integer,
  next_retry_at timestamptz,
  created_at timestamptz not null default now(),
  unique (owner_id, idempotency_key)
);

create table if not exists public.lab_agent_runs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  task text not null,
  status text not null default 'proposed' check (status in ('proposed','approved','rejected','completed')),
  proposed_actions jsonb not null default '[]'::jsonb,
  audit_log jsonb not null default '[]'::jsonb,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_maintenance_predictions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  asset_id text not null,
  feature_values jsonb not null default '{}'::jsonb,
  risk_score numeric(6,5) not null check (risk_score >= 0 and risk_score <= 1),
  predicted_failure boolean not null,
  model_version text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_ticket_classifications (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  ticket_text text not null,
  predicted_queue text not null,
  confidence numeric(6,5) not null check (confidence >= 0 and confidence <= 1),
  model_version text not null,
  human_label text,
  created_at timestamptz not null default now()
);

create table if not exists public.lab_product_analytics_runs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  date_range jsonb not null default '{}'::jsonb,
  metrics jsonb not null default '{}'::jsonb,
  decision_note text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.lab_service_analytics_runs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  geography text not null default '',
  metrics jsonb not null default '{}'::jsonb,
  recommendation text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.lab_elt_runs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  source_name text not null,
  row_count_input integer not null default 0 check (row_count_input >= 0),
  row_count_output integer not null default 0 check (row_count_output >= 0),
  quality_report jsonb not null default '{}'::jsonb,
  status text not null default 'completed' check (status in ('queued','running','completed','failed')),
  created_at timestamptz not null default now()
);

create table if not exists public.lab_stream_events (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  event_key text not null,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','processed','replayed','failed')),
  occurred_at timestamptz not null default now(),
  processed_at timestamptz,
  unique (owner_id, event_key)
);

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'lab_documents', 'lab_document_queries', 'lab_document_chunks', 'lab_journeys', 'lab_journey_events', 'lab_journey_jobs',
    'lab_webhook_endpoints', 'lab_webhook_deliveries', 'lab_agent_runs',
    'lab_maintenance_predictions', 'lab_ticket_classifications',
    'lab_product_analytics_runs', 'lab_service_analytics_runs', 'lab_elt_runs',
    'lab_stream_events'
  ] loop
    execute format('alter table public.%I enable row level security', table_name);
    execute format('grant select, insert, update, delete on public.%I to authenticated', table_name);
    execute format('drop policy if exists %I on public.%I', table_name || '_select_owner', table_name);
    execute format('drop policy if exists %I on public.%I', table_name || '_insert_owner', table_name);
    execute format('drop policy if exists %I on public.%I', table_name || '_update_owner', table_name);
    execute format('drop policy if exists %I on public.%I', table_name || '_delete_owner', table_name);
    execute format(
      'create policy %I on public.%I for select to authenticated using ((select auth.uid()) = owner_id)',
      table_name || '_select_owner', table_name
    );
    execute format(
      'create policy %I on public.%I for insert to authenticated with check ((select auth.uid()) = owner_id)',
      table_name || '_insert_owner', table_name
    );
    execute format(
      'create policy %I on public.%I for update to authenticated using ((select auth.uid()) = owner_id) with check ((select auth.uid()) = owner_id)',
      table_name || '_update_owner', table_name
    );
    execute format(
      'create policy %I on public.%I for delete to authenticated using ((select auth.uid()) = owner_id)',
      table_name || '_delete_owner', table_name
    );
  end loop;
end $$;

create index if not exists lab_documents_owner_created_idx on public.lab_documents(owner_id, created_at desc);
create index if not exists lab_journeys_owner_updated_idx on public.lab_journeys(owner_id, updated_at desc);
create index if not exists lab_journey_jobs_owner_created_idx on public.lab_journey_jobs(owner_id, created_at desc);
create index if not exists lab_journey_jobs_journey_idx on public.lab_journey_jobs(journey_id);
create index if not exists lab_webhook_deliveries_owner_created_idx on public.lab_webhook_deliveries(owner_id, created_at desc);
create index if not exists lab_agent_runs_owner_created_idx on public.lab_agent_runs(owner_id, created_at desc);
create index if not exists lab_stream_events_owner_occurred_idx on public.lab_stream_events(owner_id, occurred_at desc);
create index if not exists lab_document_chunks_owner_document_idx on public.lab_document_chunks(owner_id, document_id);
create index if not exists lab_document_chunks_document_id_idx on public.lab_document_chunks(document_id);
create index if not exists lab_document_chunks_embedding_hnsw_idx on public.lab_document_chunks using hnsw (embedding vector_cosine_ops);

create or replace function public.match_lab_document_chunks(
  query_embedding extensions.vector(384),
  match_count integer default 5,
  target_document uuid default null
)
returns table (
  id uuid,
  document_id uuid,
  chunk_index integer,
  content text,
  page_number integer,
  similarity double precision
)
language sql
stable
security invoker
set search_path = ''
as $$
  select
    c.id,
    c.document_id,
    c.chunk_index,
    c.content,
    c.page_number,
    1 - (c.embedding OPERATOR(extensions.<=>) query_embedding) as similarity
  from public.lab_document_chunks c
  where c.owner_id = (select auth.uid())
    and (target_document is null or c.document_id = target_document)
  order by c.embedding OPERATOR(extensions.<=>) query_embedding
  limit least(greatest(match_count, 1), 20);
$$;

revoke all on function public.match_lab_document_chunks(extensions.vector, integer, uuid) from public, anon;
grant execute on function public.match_lab_document_chunks(extensions.vector, integer, uuid) to authenticated;

grant usage on schema public to authenticated;
