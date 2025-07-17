import Link from "next/link";
export default function ListProduk() {
    return (
        <div>
            <h3>Berikut adalah produk-produk andalan kami:</h3>
            <p>Cardigan</p>
            <p>Sweater</p>
            <p>Tas</p>
            <p>Amigurumi</p>
            <p>.</p>
            <p>Mau custom produk? Klik <Link href="./custom">di sini</Link></p>
        </div>
    )
}