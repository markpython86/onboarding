import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import type { Product } from "@/lib/data";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
      <div>
        <Image
          alt={product.name}
          className="aspect-square w-full rounded-lg border object-cover"
          height="600"
          src={product.image}
          width="600"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="text-4xl font-bold">
              ${product.price.toFixed(2)}
            </div>
            <div>
              <Badge variant={product.stock > 0 ? "outline" : "destructive"}>
                {product.stock > 0
                  ? `${product.stock} in Stock`
                  : "Out of Stock"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
