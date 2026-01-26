import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiLinkedin, SiX, SiGithub, SiYoutube } from 'react-icons/si';
import { useCompanyInfo } from '@/hooks/useQueries';

export default function Footer() {
  const { data: companyInfo } = useCompanyInfo();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-accent tracking-tight">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-accent tracking-tight">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  IAM Readiness
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-accent tracking-tight">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-base mb-6 text-accent tracking-tight">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground/70 group">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent transition-transform duration-200 group-hover:scale-110" />
                <a href={`mailto:${companyInfo?.email || 'info@aegentra.com'}`} className="hover:text-accent transition-colors duration-200">
                  {companyInfo?.email || 'info@aegentra.com'}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>{companyInfo?.phone || '+91 (709) 301-4620'}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Green City<br />
                  Vadlapudi, Visakhapatnam<br />
                  India
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={companyInfo?.socialLinks?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href={companyInfo?.socialLinks?.twitter || 'https://twitter.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <p className="text-center text-sm text-foreground/70">
            © 2025 {companyInfo?.name || 'Aegentra'}. Built with <Heart className="inline h-4 w-4 text-accent mx-1" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

