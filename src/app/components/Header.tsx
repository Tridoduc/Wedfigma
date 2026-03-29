import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl">👟</div>
          <span className="font-semibold text-xl">DTshop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Men
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Women
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Sale
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}