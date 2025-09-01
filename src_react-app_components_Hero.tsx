import { useState } from "react";
import { useAuth } from "@/react-app/contexts/AuthContext";
import { ArrowRight, Users, TrendingUp, Sparkles, Globe, Star } from "lucide-react";
import AuthModal from "@/react-app/components/AuthModal";

export default function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12">
          {/* Badge */}
          <div className="flex justify-center items-center animate-fade-in-up">
            <div className="glass-minimal rounded-full px-8 py-4 hover-glow">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-purple-400 animate-float" />
                <span className="text-purple-300 font-medium text-lg">Global Marketing Platform</span>
                <Star className="w-4 h-4 text-purple-400 animate-pulse-slow" />
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight animate-fade-in-up delay-200">
              Earn While You
              <span className="block text-purple-400 mt-4 animate-fade-in-up delay-300">
                Market & Learn
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-400">
              Connect with brands worldwide, create authentic content, and build your marketing career 
              while earning from campaigns that match your interests.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
            {user ? (
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 glass-minimal rounded-full px-8 py-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">
                    Welcome back!
                  </span>
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-smooth flex items-center space-x-3 hover-lift shadow-purple-subtle">
                  <span>Dashboard</span>
                  <ArrowRight className="w-5 h-5 transition-transform-smooth group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="group bg-purple-500 hover:bg-purple-600 text-white px-12 py-5 rounded-full font-semibold text-xl transition-smooth flex items-center space-x-3 hover-lift shadow-purple-subtle"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform-smooth group-hover:translate-x-1" />
                </button>
                <button className="glass-minimal hover:border-purple-500/50 text-white px-12 py-5 rounded-full font-semibold text-xl transition-smooth hover-lift">
                  Learn More
                </button>
              </>
            )}
          </div>

          {/* Value Proposition Grid */}
          <div className="animate-fade-in-up delay-600">
            <div className="glass-minimal rounded-3xl p-12 max-w-5xl mx-auto hover-glow">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                  <Sparkles className="w-6 h-6 text-purple-400 animate-float" />
                  <span>Why Students Choose Opportuna</span>
                  <Globe className="w-6 h-6 text-purple-400 animate-float" style={{ animationDelay: '1s' }} />
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Join thousands of students building successful marketing careers
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center space-y-4 animate-scale-in delay-700">
                  <div className="text-4xl font-black text-purple-400 mb-3">Flexible</div>
                  <div className="text-gray-300 font-semibold text-lg">Work on your schedule</div>
                  <div className="text-gray-400">Choose campaigns that fit your lifestyle and interests</div>
                </div>
                
                <div className="text-center space-y-4 animate-scale-in delay-800">
                  <div className="text-4xl font-black text-purple-400 mb-3">Global</div>
                  <div className="text-gray-300 font-semibold text-lg">Connect worldwide</div>
                  <div className="text-gray-400">Work with international brands from anywhere</div>
                </div>
                
                <div className="text-center space-y-4 animate-scale-in delay-800">
                  <div className="text-4xl font-black text-purple-400 mb-3">Rewarding</div>
                  <div className="text-gray-300 font-semibold text-lg">Build career & earn</div>
                  <div className="text-gray-400">Develop skills while earning competitive rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </section>
  );
}
