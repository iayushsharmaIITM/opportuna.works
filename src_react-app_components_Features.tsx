import { Smartphone, Target, BarChart3, Shield, Coins, BookOpen, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Social Media Campaigns",
    description: "Create authentic content across Instagram, TikTok, and other platforms with campaigns that match your style and audience."
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Get matched with relevant campaigns using AI-powered algorithms that consider your profile, interests, and audience demographics."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your campaign performance with detailed analytics, engagement rates, and earnings insights to optimize your strategy."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Reliable and secure payment processing ensures you get paid on time for every completed campaign with full transparency."
  },
  {
    icon: Coins,
    title: "Multiple Revenue Streams",
    description: "Monetize through sponsored posts, stories, product reviews, and long-term brand partnerships across different platforms."
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Learn marketing best practices, content creation techniques, and personal branding through our educational resources."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block glass-minimal rounded-full px-8 py-3 animate-fade-in-up">
            <span className="text-purple-400 font-semibold text-lg">Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight animate-fade-in-up delay-100">
            Everything You Need to 
            <span className="text-purple-400 block mt-2">Succeed</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Our platform provides all the tools and resources you need to build a successful marketing career 
            while earning from authentic brand partnerships.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group animate-scale-in hover-lift"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="glass-minimal rounded-2xl p-8 h-full hover-glow transition-smooth border-gray-800 hover:border-purple-500/30">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center group-hover:bg-purple-400 transition-colors-smooth animate-float" style={{ animationDelay: `${index * 500}ms` }}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors-smooth">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors-smooth">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in delay-500">
          <div className="glass-minimal rounded-3xl p-12 border-purple-500/10 hover-glow transition-smooth max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-white">
                Ready to Start Earning?
              </h3>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Start building your marketing career and earning from authentic brand partnerships.
              </p>
              
              <a href="#contact" className="inline-flex items-center space-x-3 bg-purple-500 hover:bg-purple-600 text-white px-12 py-5 rounded-full font-semibold text-xl transition-smooth hover-lift shadow-purple-subtle group">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform-smooth group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
