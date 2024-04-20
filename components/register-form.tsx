"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function handleRegister(e: any) {
        e.preventDefault();
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                email,
                name
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                signIn("credentials", {
                    password,
                    email,
                    callbackUrl: "/",
                })
            } else {
                toast.error(data.message);
            }
        })
        .catch((error) => toast.error(error.message));
    }
    return (
        <section>
            <form onSubmit={handleRegister} className="max-w-xs mx-auto flex flex-col gap-3">
                <input
                    type="email"
                    id="emailInput"
                    className="rounded p-1 text-center"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    id="usernameInput"
                    className="rounded p-1 text-center"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    id="passwordInput"
                    className="rounded p-1 text-center"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded p-1">
                    Sign Up
                </button>
            </form>
        </section>
    )
}