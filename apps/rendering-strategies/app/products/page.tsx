import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { getProducts } from "@/lib/data";
import { ProductList } from "@/components/product-list";

export const metadata = {
  title: "Products | RenderStream",
};

export default async function ProductsPage() {
  // This async function fetches data on the server.
  // Because it's static (no dynamic functions like `headers()` or `cookies()`),
  // Next.js will run this at build time and pre-render the page.
  const products = await getProducts();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          A list of all available products in our catalog.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductList products={products} />
      </CardContent>
    </Card>
  );
}
