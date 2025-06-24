import { Product } from "@/lib/mocks";

export function ProductCard(
    { product }: { product: Product }
) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Image Next automatically optimizes images and creates different sizes of an image */}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />

            <div className="p-4">
                <h2 className="text-black text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-gray-600">{product.description}</p>
            </div>
        </div>
    );

}