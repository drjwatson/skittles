import { sql } from '@vercel/postgres'

export async function PATCH(request: Request) {
    const { id, count } = await request.json()
    await sql`UPDATE staff SET count = ${count} WHERE id = ${id}`
    return new Response(JSON.stringify({ success: true }))
} 