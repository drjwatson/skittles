"use client"

import { useState } from 'react'
import StaffMember from '@/components/staff-member'
import { motion } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'

export default function StaffListContainer(staffMembers: any) {

    const [members, setMembers] = useState(staffMembers.staffMembers)

    const updateMemberCount = (id: number, newCount: number) => {
        const updatedMembers = members.map((member: any) =>
            member.id === id ? { ...member, count: newCount } : member
        );
        setMembers(updatedMembers);
    };

    const decrementCount = (id: number, localCount: number) => {
        const newCount = localCount - 1;
        fetch('/api/staff', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                count: newCount
            })
        })
        .then(() => updateMemberCount(id, newCount))
        .catch((error) => console.log(error))
    }

    const incrementCount = (id: number, localCount: number) => {
        const newCount = localCount + 1
        fetch('/api/staff', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                count: newCount
            })
        })
        .then(() => updateMemberCount(id, newCount))
        .catch((error) => console.log(error))
    }

    const sortedMembers = [...members].sort((a: any, b: any) => b.count - a.count);
        
    return (
        <div className="flex flex-col h-full">
            <motion.div className="flex flex-col gap-3 w-80 align-center place-self-center" layout layoutRoot>
                {
                    sortedMembers && sortedMembers.map((member: any) => (
                        <motion.div layout key={member.id}>
                            <SessionProvider>
                                <StaffMember incrementCount={incrementCount} decrementCount={decrementCount} member={member}/>
                            </SessionProvider>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}