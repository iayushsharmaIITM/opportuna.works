import { useEffect, useState } from "react";
import { useAuth } from "@/react-app/contexts/AuthContext";
import { X, Globe, Sparkles, ArrowRight, Mail, Lock, Star, Zap } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signUp, signIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    // Reset form when modal opens/closes or when switching between sign in/up
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  }, [isOpen, isSignUp]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setError("Passwords don't match");
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          return;
        }
        await signUp(email, password);
        onClose();
      } else {
        await signIn(email, password);
        onClose();
      }
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen p-6 animate-fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-strong"
        onClick={onClose}
      >
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-indigo-900/30"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl mx-auto animate-scale-in">
        {/* Background glow */}
        <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-3xl blur-2xl animate-subtle-glow"></div>
        
        <div className="relative glass-minimal rounded-3xl p-12 shadow-purple-glow">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-20 group"
          >
            <div className="relative w-12 h-12 glass-minimal rounded-full flex items-center justify-center hover:bg-purple-600/30 transition-smooth hover-lift">
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform-smooth" />
            </div>
          </button>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up space-y-8">
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative glass-minimal rounded-full px-8 py-4 shadow-purple-subtle">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-purple-400 animate-float" />
                    <span className="text-purple-300 font-bold text-xl">Join the Revolution</span>
                    <Star className="w-7 h-7 text-violet-400 animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl font-black text-white leading-tight">
              {isSignUp ? (
                <>
                  Create Your
                  <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mt-2">
                    Account
                  </span>
                </>
              ) : (
                <>
                  Welcome Back,
                  <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mt-2">
                    Explorer
                  </span>
                </>
              )}
            </h2>
            
            <p className="text-gray-200 leading-relaxed font-semibold text-xl max-w-lg mx-auto">
              {isSignUp 
                ? "Start your journey with global brands and transform your digital presence."
                : "Sign in to access your career opportunities and explore new possibilities."
              }
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-slide-in delay-200">
            {/* Email Field */}
            <div className="space-y-3">
              <label className="block text-white font-bold text-lg">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors-smooth" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-16 pr-6 py-5 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label className="block text-white font-bold text-lg">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors-smooth" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-16 pr-6 py-5 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                  placeholder={isSignUp ? "Create a password (min 6 characters)" : "Enter your password"}
                />
              </div>
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-3">
                <label className="block text-white font-bold text-lg">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors-smooth" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pl-16 pr-6 py-5 glass-subtle rounded-xl text-white placeholder-gray-400 focus-ring transition-smooth text-lg"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="animate-slide-down">
                <div className="p-6 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-medium">
                  <p className="text-red-300 text-center font-semibold text-lg">{error}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white px-12 py-6 rounded-xl font-black text-xl transition-smooth hover-lift flex items-center justify-center space-x-4 shadow-purple-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              
              {loading ? (
                <>
                  <div className="animate-spin-smooth rounded-full h-7 w-7 border-b-2 border-white relative z-10"></div>
                  <span className="relative z-10 font-black">Processing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-7 h-7 relative z-10 animate-float" />
                  <span className="relative z-10 font-black">
                    {isSignUp ? "Create Account" : "Sign In"}
                  </span>
                  <ArrowRight className="w-7 h-7 relative z-10 group-hover:translate-x-1 transition-transform-smooth" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Sign In/Up */}
          <div className="text-center mt-10 animate-fade-in-up delay-300">
            <p className="text-gray-200 font-semibold text-lg">
              {isSignUp ? "Already have an account?" : "New to Opportuna?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-3 text-purple-300 hover:text-purple-200 font-black transition-colors-smooth underline underline-offset-2 text-lg"
              >
                {isSignUp ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>

          {/* Benefits (Sign Up Only) */}
          {isSignUp && (
            <div className="space-y-6 mt-12 pt-10 border-t border-purple-500/20 animate-slide-in delay-500">
              {[
                {
                  icon: Sparkles,
                  text: "Access to Fortune 500 brand campaigns",
                  color: "text-purple-400"
                },
                {
                  icon: Star,
                  text: "Earn competitive rates worldwide",
                  color: "text-violet-400"
                },
                {
                  icon: Zap,
                  text: "Build your professional network",
                  color: "text-indigo-400"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-5 text-white group">
                  <benefit.icon className={`w-6 h-6 ${benefit.color} animate-float group-hover:scale-110 transition-transform-smooth`} style={{ animationDelay: `${index * 300}ms` }} />
                  <span className="font-semibold text-lg group-hover:text-purple-200 transition-colors-smooth">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <p className="text-center text-gray-300 font-semibold mt-10 animate-fade-in-up delay-700">
            🔐 Secure authentication • No spam • Join thousands of students worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
