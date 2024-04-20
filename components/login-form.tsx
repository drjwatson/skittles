"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginInProgress, setLoginInProgress] = useState(false);

	async function handleFormSubmit(ev: any) {
		ev.preventDefault();
		setLoginInProgress(true);

		const res = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false })

		if (res?.error) {
			toast.error(res.error);
		}
		
		setLoginInProgress(false);

		if (res?.ok) {
			window.location.href = "/";
		}
	}
	return (
		<section>
			<form className="max-w-xs mx-auto flex flex-col gap-3" onSubmit={handleFormSubmit}>
				<input type="email" name="email" placeholder="Email" value={email}
					disabled={loginInProgress}
					onChange={ev => setEmail(ev.target.value)}
					className="rounded p-1 text-center"/>
				<input type="password" name="password" placeholder="Password" value={password}
					disabled={loginInProgress}
					onChange={ev => setPassword(ev.target.value)}
					className="rounded p-1 text-center"/>
				<button 
					disabled={loginInProgress}
					type="submit"
					className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded p-1"
				>
					Sign In
				</button>
			</form>
		</section>
	);
}