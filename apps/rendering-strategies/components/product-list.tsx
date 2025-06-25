import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import type { Product } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Price</TableHead>
          <TableHead className="hidden md:table-cell">Stock</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt={product.name}
                className="aspect-square rounded-md object-cover"
                height="64"
                src={product.image}
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium">
              <Link
                href={`/products/${product.id}`}
                className="hover:underline"
              >
                {product.name}
              </Link>
              <div className="text-sm text-muted-foreground md:hidden">
                ${product.price.toFixed(2)}
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={product.stock > 0 ? "outline" : "destructive"}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              ${product.price.toFixed(2)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {product.stock}
            </TableCell>
            <TableCell>
              <Link
                href={`/products/${product.id}`}
                className="text-sm hover:underline"
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}