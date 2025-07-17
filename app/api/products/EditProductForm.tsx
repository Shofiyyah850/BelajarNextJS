export default function EditProductForm() {
    return (<form>
        <p className='cp'>Edit Produk</p>
        <input className='kolom' type='text' placeholder="Nama Produk" />
        <input className='kolom' type='text' placeholder="Deskripsi Produk" />
        <button className='tombol w-fit'>Perbarui Produk</button>
    </form>

    )
}