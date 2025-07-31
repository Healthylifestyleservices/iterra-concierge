import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_KEY
)

export async function updateProtocol(id, newSteps) {
  await supabase
    .from('protocols')
    .update({ steps: newSteps, updated_at: new Date() })
    .eq('id', id)
}

export async function getCurrentIntake() {
  const { data } = await supabase
    .from('intake_forms')
    .select('*')
    .order('version', { ascending: false })
    .limit(1)
  return data[0]
}