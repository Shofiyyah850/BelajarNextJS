import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Waduh, halaman yang kamu minta tidak ada nih</p>
            <p>Mau kembali ke Home?</p>
            <Link href='/'>Kembali</Link>
        </div>
    )
}