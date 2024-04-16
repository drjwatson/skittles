"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import RedSkittle from '@/public/red-skittle.svg'
import GreenSkittle from '@/public/green-skittle.svg'

export default function StaffMember({ incrementCount, decrementCount, member}: any) {

    const [count, setCount] = useState(member.count)

    useEffect(() => {
        setCount(member.count)
    }, [member.count])

    return (
        <div className="flex flex-row gap-8 items-center rounded p-3 justify-center bg-rose-400 pt-2">
            <div className={"pb-2 w-40 flex item-center justify-center text-white rounded text-5xl font-bold " + (count > 0 ? 'bg-green-500' : 'bg-red-600')}>
                <h2>{count}</h2>
            </div>
            <div>
                <h4 className="text-lg font-bold w-40 mb-2 text-white">{member.name}</h4>
                <div className="flex flex-row gap-3">
                    <button 
                        onClick={() => {
                            decrementCount(member.id, count)
                            setCount(count - 1)
                        }}
                        className="flex flex-row justify-between items-center p-0.5 bg-rose-700 rounded pr-3">
                        <Image className="h-4 w-8 flex-grow-0" src={RedSkittle} alt={member.name} /><span className="inline-block font-bold text-white">-1</span>
                    </button>
                    <button
                        onClick={() => {
                            incrementCount(member.id, count)
                            setCount(count + 1)
                        }} 
                        className="flex flex-row justify-between items-center p-0.5 bg-rose-700 rounded pr-3">
                        <Image className="h-4 w-8 flex-grow-0" src={GreenSkittle} alt={member.name} /><span className="inline-block font-bold text-white">+1</span>
                    </button>
                </div>
            </div>
        </div>
    )
}