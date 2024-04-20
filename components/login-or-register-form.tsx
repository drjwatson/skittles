"use client";

import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function LoginOrRegisterForm() {
	const [showLoginForm, setShowLoginForm] = useState(true);

	const toggleForm = () => {
		setShowLoginForm(!showLoginForm);
	};

	return (
		<div className="flex flex-col gap-3 w-80 mt-4">
			{showLoginForm ? (
				<LoginForm />
			) : (
				<RegisterForm />
			)}
			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-rose-800"></div>
				<span className="flex-shrink mx-4 text-rose-800 font-bold">OR</span>
				<div className="flex-grow border-t border-rose-800"></div>
			</div>
			<button onClick={toggleForm} className="text-center text-lg font-bold text-rose-800 border border-rose-800 rounded py-2 px-4">
				{showLoginForm ? "Sign Up" : "Sign In"}
			</button>
		</div>
	);
}
