export default async function DetailProduk({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    return (
        <div>
            <h3>Yuk kenali {productId} buatan kami!</h3>
            <p>{productId} buatan kami menggunakan bahan-bahan yang berkualitas dan nyaman disentuh oleh kulit. Jadi kalian tidak perlu takut, {productId} buatan kami tidak akan menimbulkan alergi. Selain itu, kami merajut {productId} dengan penuh kehati-hatian serta cinta, sehingga hasilnya rapi dan awet. Tertarik ga nih?</p>
        </div>
    )
}