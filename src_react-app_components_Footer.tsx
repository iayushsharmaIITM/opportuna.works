import { TrendingUp, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-8 animate-fade-in-up">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center animate-float">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">
                Opportuna
              </span>
            </div>
            
            <p className="text-gray-300 max-w-md leading-relaxed text-lg font-medium">
              Connecting students worldwide with brand opportunities. 
              Build your marketing career while earning from authentic partnerships.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Mail,
                  href: "mailto:opportunaworks@gmail.com",
                  label: "Email"
                },
                {
                  icon: Phone,
                  href: "tel:+917007177301",
                  label: "Phone"
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/iayushsharma1009/",
                  label: "LinkedIn"
                }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 glass-minimal hover:bg-purple-500 rounded-xl flex items-center justify-center transition-colors-smooth hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-slide-in delay-100">
            <h3 className="font-black text-white text-xl">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors-smooth font-semibold text-lg group flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <div className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6 animate-slide-in delay-200">
            <h3 className="font-black text-white text-xl">Support</h3>
            <ul className="space-y-4">
              {[
                { name: "Help Center", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors-smooth font-semibold text-lg group flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <div className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-10 animate-fade-in-up delay-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-300 font-semibold text-lg">
              © 2024 Opportuna. All rights reserved.
            </p>
            <p className="text-gray-300 font-semibold text-lg">
              Made for students worldwide 🌍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
