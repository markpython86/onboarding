import { getProductById, getProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import type { Metadata } from "next";

// This tells Next.js to re-render this page every 60 seconds
// if new requests come in. This is ISR.
export const revalidate = 10;

// This function tells Next.js which `id`s to pre-render at build time.
export async function generateStaticParams() {
  const products = await getProducts();

  // We will pre-render a page for each product.
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata dynamically based on the product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return {
      title: "Product not found",
    };
  }
  return {
    title: `${product.name} | RenderStream`,
    description: product.description,
  };
}

// This is the page component for a single product.
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  // If the product doesn't exist (e.g., wrong URL), show a 404 page.
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
