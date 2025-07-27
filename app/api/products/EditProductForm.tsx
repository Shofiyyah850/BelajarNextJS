'use client';
import { useState } from "react";

type EditProductFormProps = {
  id: string;
  initialTitle?: string;
  initialContent?: string;
  initialAuthor?: string;
};

export default function EditProductForm({ id, initialTitle = "", initialContent = "", initialAuthor = "" }: EditProductFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [author, setAuthor] = useState(initialAuthor);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/products_data/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });
    if (res.ok) {
      setMessage("Produk berhasil diperbarui!");
    } else {
      setMessage("Gagal memperbarui produk.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className='cp'>Edit Produk</p>
      <input className='kolom' type='text' placeholder="Nama Produk" value={title} onChange={e => setTitle(e.target.value)} />
      <input className='kolom' type='text' placeholder="Deskripsi Produk" value={content} onChange={e => setContent(e.target.value)} />
      <input className='kolom' type='text' placeholder="Nama Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <button className='tombol w-fit'>Perbarui Produk</button>
      {message && <div>{message}</div>}
    </form>
  );
}