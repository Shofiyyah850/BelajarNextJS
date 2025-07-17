import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
export default function CustomOrder () {
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
                <Link href= "/"><RemoveBtn /></Link>
            </div>
        </div>
        </>
    )
}