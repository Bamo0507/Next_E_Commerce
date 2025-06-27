import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Product } from "./generated/prisma";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";

export function ProductCard(
    { product }: { product: Product }
) {
    return (
        <Card className="pt-0 overflow-hidden">
            <div className="relative aspect-video">
            {/* Image Next automatically optimizes images and creates different sizes of an image */}
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

            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>

            <CardFooter>
             <p className="text-gray-600">{formatPrice(product.price)}</p>
            </CardFooter>

        </Card>
            
    );
}