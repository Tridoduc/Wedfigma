import { useNavigate } from "react-router";
import { Trash2, Plus, Minus, ChevronLeft, ShoppingBag } from "lucide-react";
import { Header } from "../components/Header";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner";
import { motion } from "motion/react";

export function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed successfully! (Demo)");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some shoes to get started!</p>
            <Button onClick={() => navigate("/")}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    );
  }

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
          Continue Shopping
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl mb-6">Shopping Cart</h1>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 flex gap-4"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Size: {item.selectedSize} • Color: {item.selectedColor}
                    </p>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.selectedColor)
                      }
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-20">
              <h2 className="text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-xl">
                  ${(getTotalPrice() * 1.08).toFixed(2)}
                </span>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>

              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>Free shipping on orders over $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
