import prisma from '@/lib/prismadb'

export async function PATCH(request: Request) {
    const { id, count } = await request.json()
    await prisma.user.update({
        where: {
            id
        },
        data: {
            count
        }
    });
    return new Response(JSON.stringify({ success: true }))
} 