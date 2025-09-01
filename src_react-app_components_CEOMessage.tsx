import { Quote, Target, Users, Heart } from "lucide-react";

export default function CEOMessage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block glass-minimal rounded-full px-8 py-3 animate-fade-in-up">
            <span className="text-purple-400 font-semibold text-lg">Leadership</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight animate-fade-in-up delay-100">
            A Message from Our
            <span className="text-purple-400 block mt-2">Founder</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* CEO Photo & Info */}
          <div className="lg:col-span-1 animate-scale-in delay-200">
            <div className="glass-minimal rounded-3xl p-10 text-center hover-glow transition-smooth">
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur animate-pulse-slow"></div>
                  <img
                    src="https://mocha-cdn.com/0198dba2-0ff7-7cf4-b6e9-2a3d833f7dd7/IMG-20250609-WA0015.jpg"
                    alt="CEO Ayush Sharma"
                    className="relative w-40 h-40 rounded-full object-cover border-2 border-purple-500/50"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-white">Ayush Sharma</h3>
                  <p className="text-purple-400 font-bold text-lg">Founder & CEO</p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/iayushsharma1009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-smooth hover-lift"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:opportunaworks@gmail.com"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-smooth hover-lift"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="lg:col-span-2 animate-slide-in delay-300">
            <div className="glass-minimal rounded-3xl p-10 hover-glow transition-smooth">
              <div className="space-y-8">
                <Quote className="w-16 h-16 text-purple-400/40 animate-float" />
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <blockquote>
                    "When I started Opportuna, I had a simple vision: to <span className="text-purple-400 font-bold">democratize opportunity</span>. 
                    Too many talented students are limited by geography, finances, or lack of connections. 
                    We're changing that narrative."
                  </blockquote>

                  <blockquote>
                    "Every student on our platform isn't just earning money – they're building the foundation for their 
                    <span className="text-purple-400 font-bold"> future career</span>. They're learning skills that Fortune 500 companies value. They're creating networks. 
                    Most importantly, they're proving to themselves that they can compete globally."
                  </blockquote>

                  <blockquote>
                    "This isn't just about marketing or social media. This is about <span className="text-purple-400 font-bold">empowerment</span>. 
                    This is about showing the world that talent knows no boundaries, and opportunity should be limitless."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "Connecting talented students worldwide with brands that value authentic partnerships and diverse perspectives."
            },
            {
              icon: Users,
              title: "Our Innovation",
              description: "Using technology to create seamless experiences that empower the next generation of marketing professionals."
            },
            {
              icon: Heart,
              title: "Our Values",
              description: "Every decision we make is centered around student success, growth, and building a brighter future for all."
            }
          ].map((card, index) => (
            <div key={index} className={`animate-scale-in delay-${400 + index * 100} hover-lift`}>
              <div className="glass-minimal rounded-2xl p-8 text-center hover-glow transition-smooth h-full">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto animate-float" style={{ animationDelay: `${index * 800}ms` }}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white">
                    {card.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
