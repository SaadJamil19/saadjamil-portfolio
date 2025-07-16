import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Saad Jamil</h3>
            <p className="text-white/70">Software Developer & Tech Innovator</p>
          </div>
          
          <div className="flex items-center gap-2 text-white/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>in Karachi, Pakistan</span>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-white/60">
          <p>&copy; 2025 Saad Jamil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;