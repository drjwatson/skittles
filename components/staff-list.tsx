"use client";

import { useEffect, useState } from 'react';
import SupabaseClient from '@/lib/supabaseclient'
import StaffListContainer from './staff-list-container'

export default function StaffList() {

    const [staff, setStaff] = useState<any[] | null>(null)

    const supabase = SupabaseClient()

    const getData = async () => {
        const { data } = await supabase.from('user').select()
        console.log('data', data)
        setStaff(data)
    }

    supabase.channel('custom-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'user' },
      (payload) => {
        getData();
      }
    )
    .subscribe()

    useEffect(() => {
      getData()
    }, [])

    return (
        <StaffListContainer staffMembers={staff} />
    )
}