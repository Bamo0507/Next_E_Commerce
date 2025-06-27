import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Product } from "./generated/prisma";

export function ProductCard(
    { product }: { product: Product }
) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Image Next automatically optimizes images and creates different sizes of an image */}
            <div className="relative aspect-video">
                {product.image && (
                    <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                )}
            </div>

            <div className="p-4">
                <h2 className="text-black text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{formatPrice(product.price)}</p>
                <p className="text-gray-600">{product.description}</p>
            </div>
        </div>
    );
}