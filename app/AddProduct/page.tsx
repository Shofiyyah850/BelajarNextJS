'use client'
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") return <div>Loading...</div>
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const res = await fetch("/api/products_data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ title, content }),
  });
    if (res.ok) {
      setMessage("Produk berhasil ditambahkan!");
      setTitle("");
      setContent("");
    } else {
      setMessage("Gagal menambahkan produk.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className='cp'>Custom Produk</p>
      <input className='kolom' type='text' placeholder="Nama Produk" value={title} onChange={e => setTitle(e.target.value)} />
      <input className='kolom' type='text' placeholder="Deskripsi Produk" value={content} onChange={e => setContent(e.target.value)} />
      <button className='tombol w-fit'>Tambahkan Produk</button>
      <Link href="/api/custom">Lihat Produk</Link>
      {message && <div>{message}</div>}
    </form>
  );
}