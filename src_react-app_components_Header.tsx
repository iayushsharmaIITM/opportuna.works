import { useState } from "react";
import { useAuth } from "@/react-app/contexts/AuthContext";
import { Menu, X, User, LogOut, TrendingUp } from "lucide-react";
import AuthModal from "@/react-app/components/AuthModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 glass-minimal border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 animate-fade-in-up">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center animate-float">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">
              Opportuna
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 animate-fade-in-up delay-100">
            {[
              { name: "Features", href: "#features" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors-smooth font-semibold text-lg relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-6 animate-fade-in-up delay-200">
            {user ? (
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3 glass-minimal rounded-full px-6 py-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse-slow">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 font-semibold">
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-2 px-6 py-3 text-gray-300 hover:text-white transition-colors-smooth font-semibold group"
                >
                  <LogOut className="w-5 h-5 transition-transform-smooth group-hover:translate-x-1" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-smooth hover-lift shadow-purple-subtle"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl glass-minimal hover:border-purple-500/50 transition-smooth animate-fade-in-up delay-200"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-white transition-transform-smooth" /> : 
              <Menu className="w-6 h-6 text-white transition-transform-smooth" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-minimal border-t border-gray-800 animate-slide-down">
          <div className="px-6 py-8 space-y-6">
            {[
              { name: "Features", href: "#features" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block text-gray-300 hover:text-white transition-colors-smooth font-semibold text-xl py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {user ? (
              <div className="pt-6 border-t border-gray-800 space-y-6">
                <div className="flex items-center space-x-4 glass-minimal rounded-xl px-6 py-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 font-semibold">
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:text-white transition-colors-smooth font-semibold group"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-xl transition-smooth"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}
