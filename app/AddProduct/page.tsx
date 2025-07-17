export default function AddProduct() {
    return (<form>
        <p className='cp'>Custom Produk</p>
        <input className='kolom' type='text' placeholder="Nama Produk" />
        <input className='kolom' type='text' placeholder="Deskripsi Produk" />
        <button className='tombol w-fit'>Tambahkan Produk</button>
    </form>
    )
}