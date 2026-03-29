import { Star } from "lucide-react";
import { Link } from "react-router";
import { Product } from "../data/products";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
