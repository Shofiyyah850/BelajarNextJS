'use client';

import { useSession,  signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleClick = () => {
    if (session) {
      signOut();
    } else {
      router.push('/sign_in');
    }
  }
  return (
    <button onClick={handleClick}>
      {session ? "Sign Out" : "Sign In"}
    </button>
  );
}