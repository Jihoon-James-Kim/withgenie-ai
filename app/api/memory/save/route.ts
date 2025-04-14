// app/api/memory/save/route.ts

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const data = await req.json()

  const { error } = await supabase.from('memory').insert([data])

  if (error) {
    console.error('[Memory Save Error]', error)
    return NextResponse.json({ error: 'Memory save failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
