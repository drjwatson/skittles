import client from '@/lib/prismadb'
import StaffListContainer from './staff-list-container'

export default async function StaffList() {

    const staff = await client.user.findMany({
        orderBy: {
            count: 'desc',
        },
    });

    return (
        <StaffListContainer staffMembers={staff} />
    )
}
