import { ProductCard } from "./ProductCard";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany();
  console.log(products);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>
        Home
      </h1>

      <p className="mb-3">Showing {products.length} products</p>

      {/* Grids of Products */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          // REMEMBER: key is important and should be unique, that is how we render a list in react
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
