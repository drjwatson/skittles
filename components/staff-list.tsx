"use client";

import { useEffect, useState } from 'react';
import SupabaseClient from '@/lib/supabaseclient'
import StaffListContainer from './staff-list-container'

export default function StaffList() {

    const [staff, setStaff] = useState<any[]>([])

    const supabase = SupabaseClient()



    supabase.channel('custom-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'user' },
      (payload) => {
        const getData = async () => {
            const { data } = await supabase.from('user').select()
            console.log('data', data)
            setStaff(data ?? [])
        }
        getData();
      }
    )
    .subscribe()

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from('user').select()
            console.log('data', data)
            setStaff(data ?? [])
        }
      getData()
    }, [])

    return (
        <StaffListContainer staffMembers={staff} />
    )
}