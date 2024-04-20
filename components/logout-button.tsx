"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => (
    <button
        type="button"
        className="bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={() => signOut()}
    >
        Log Out
    </button>
)