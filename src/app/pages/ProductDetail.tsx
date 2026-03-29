import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Star, ChevronLeft, Check } from "lucide-react";
import { Header } from "../components/Header";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { motion } from "motion/react";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Button onClick={() => navigate("/")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    addToCart(product, selectedSize, selectedColor);
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Button>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            <h1 className="text-3xl mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <p className="text-3xl mb-6">${product.price.toFixed(2)}</p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <label className="block font-medium mb-2">Select Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg flex items-center gap-2 transition-all ${
                      selectedColor === color
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {selectedColor === color && <Check className="h-4 w-4" />}
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-auto">
              <Button
                size="lg"
                className="w-full mb-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                <div>
                  <div className="font-medium text-black">Free Shipping</div>
                  <div>On orders over $100</div>
                </div>
                <div>
                  <div className="font-medium text-black">Easy Returns</div>
                  <div>30-day return policy</div>
                </div>
                <div>
                  <div className="font-medium text-black">Secure Payment</div>
                  <div>SSL encrypted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
