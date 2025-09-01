import { UserPlus, Search, Megaphone, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and build your profile to showcase your interests, skills, and social media presence to potential brand partners.",
    step: "01"
  },
  {
    icon: Search,
    title: "Discover Campaigns", 
    description: "Browse available marketing campaigns from brands that match your profile and interests using our smart recommendation system.",
    step: "02"
  },
  {
    icon: Megaphone,
    title: "Create Content",
    description: "Work with brands to create authentic content that resonates with your audience across your preferred social platforms.",
    step: "03"
  },
  {
    icon: Trophy,
    title: "Get Paid & Grow",
    description: "Receive payment for completed campaigns while building your portfolio and growing your personal brand.",
    step: "04"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block glass-minimal rounded-full px-8 py-3 animate-fade-in-up">
            <span className="text-purple-400 font-semibold text-lg">Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight animate-fade-in-up delay-100">
            How It
            <span className="text-purple-400 block mt-2">Works</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Getting started is simple. Follow these four steps to begin earning from brand partnerships 
            while building valuable marketing experience.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className={`text-center animate-scale-in delay-${200 + index * 100} hover-lift`}>
              <div className="space-y-8">
                {/* Step Container */}
                <div className="relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 z-20 animate-fade-in-up delay-500">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-purple-subtle">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Main Icon Container */}
                  <div className="w-24 h-24 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto hover:bg-purple-400 transition-colors-smooth animate-float" style={{ animationDelay: `${index * 600}ms` }}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Connection Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent animate-fade-in-up delay-600"></div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white hover:text-purple-100 transition-colors-smooth">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg hover:text-gray-200 transition-colors-smooth">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in delay-500">
          <div className="glass-minimal rounded-3xl p-12 border-purple-500/10 hover-glow transition-smooth max-w-5xl mx-auto">
            <div className="space-y-10">
              <h3 className="text-4xl font-black text-white">
                Ready to Get Started?
              </h3>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Start building your marketing career and earning from authentic brand partnerships today.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center space-y-3 animate-fade-in-up delay-600">
                  <div className="text-3xl font-black text-purple-400">Easy</div>
                  <div className="text-gray-300 font-semibold text-lg">Simple onboarding</div>
                  <div className="text-gray-400">Get started in minutes</div>
                </div>
                
                <div className="text-center space-y-3 animate-fade-in-up delay-700">
                  <div className="text-3xl font-black text-purple-400">Fast</div>
                  <div className="text-gray-300 font-semibold text-lg">Quick payments</div>
                  <div className="text-gray-400">Reliable payment processing</div>
                </div>
                
                <div className="text-center space-y-3 animate-fade-in-up delay-800">
                  <div className="text-3xl font-black text-purple-400">Proven</div>
                  <div className="text-gray-300 font-semibold text-lg">Real results</div>
                  <div className="text-gray-400">Success across the globe</div>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center space-x-3 bg-purple-500 hover:bg-purple-600 text-white px-12 py-5 rounded-full font-semibold text-xl transition-smooth hover-lift shadow-purple-subtle group">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 transition-transform-smooth group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
