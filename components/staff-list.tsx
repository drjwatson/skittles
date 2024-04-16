import { sql } from '@vercel/postgres'
import { seed } from '@/lib/seed'
import StaffListContainer from './staff-list-container'

export default async function StaffList() {
    let data

    try {
        data = await sql`SELECT * FROM staff ORDER BY count DESC`
    } catch (e: any) {
        if (e.message.includes('relation "staff" does not exist')) {
            console.log(
                'Table does not exist, creating and seeding it with dummy data now...'
            )
            // Table is not created yet
            await seed()
            data = await sql`SELECT * FROM staff ORDER BY count DESC`
        } else {
            throw e
        }
    }

    const { rows: staff } = data

    return (
        <StaffListContainer staffMembers={staff} />
    )
}
