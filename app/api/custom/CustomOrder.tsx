'use client';
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
export default function CustomOrder () {
    const { data: session, status } = useSession();
    if (status === "loading") return <div>Loading...</div>;
    if (!session) {
      return (
        <div>
          <p>You must be signed in to view this page.</p>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      );
    }
    return (
        <>
        <div className="add">
            <Link href='../AddProduct'>+</Link>
        </div>
        <div className="border flex justify-between">
            <div>
                <h3>Product</h3>
                <div>Keterangan</div>
            </div>
            <div>
                <Link href= "/EditProduct/123">Edit</Link>
                <Link href= "/"><RemoveBtn productId="123" /></Link>
            </div>
        </div>
        </>
    )
}