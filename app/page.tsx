import Image from 'next/image'
import StaffList from '@/components/staff-list'
import Logo from '@/public/logo.svg'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-rose-300">
      <Image src={Logo} alt="Vercel Logo" width={320} className="mb-8" />
      <StaffList/>
    </main>
  )
}
