import Image from 'next/image'
import StaffList from '@/components/staff-list'
import Logo from '@/public/logo.svg'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LoginOrRegisterForm from '@/components/login-or-register-form'
import { LogoutButton } from '@/components/logout-button'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function Home() {
	const session = await getServerSession(authOptions)
	if (session) {
		return (
			<main className="flex min-h-screen flex-col items-center p-8 bg-rose-300">
				<Image src={Logo} alt="Vercel Logo" width={320} className="mb-8" />
				<StaffList/>
				<LogoutButton/>
			</main>
		)
	} else {
		return (
			<main className="flex min-h-screen flex-col items-center p-8 bg-rose-300">
				<Image src={Logo} alt="Vercel Logo" width={320} className="mb-8" />
				<LoginOrRegisterForm/>
			</main>
		)
	}
}