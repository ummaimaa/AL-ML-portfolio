import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Ummaima Nadeem</p>
            <p className="text-slate-400 text-sm">
              © {currentYear} Ummaima Nadeem. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500" /> All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
