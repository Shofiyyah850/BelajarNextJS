type RemoveBtnProps = {
  productId: string;
  onRemove?: () => void;
};

export default function RemoveBtn({ productId, onRemove }: RemoveBtnProps) {
  const handleRemove = async () => {
    const confirmed = confirm("Are you sure you want to remove this product?");
    if (!confirmed) return;
    const res = await fetch(`/api/products_data/${productId}`, {
      method: "DELETE",
    });
    if (res.ok && onRemove) {
      onRemove();
    } else if (!res.ok) {
      alert("Failed to remove product.");
    }
  };
  return <button onClick={handleRemove} className="ml-2 text-red-500">Remove</button>;
}