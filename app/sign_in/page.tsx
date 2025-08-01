'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
    callbackUrl: "/",
  });

  if (res?.error) {
    console.error("Sign-in error:", res.error);
  } else if (res?.url) {
    window.location.href = res.url;
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign In</button>
      <p> Tidak Punya akun? <Link href="/sign_up">Daftar</Link></p>
    </form>
  );
}