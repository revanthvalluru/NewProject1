import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { NavDropdown } from '../navigation/NavDropdown';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 border-b',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-xs py-3'
            : 'bg-white border-slate-100 py-4'
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Single text element wordmark in display face */}
            <a
              href="#"
              className="text-lg sm:text-xl font-bold font-serif tracking-tight text-[#0f2744] hover:text-[#8c1d2f] transition-colors whitespace-nowrap shrink-0"
            >
              Tula&apos;s International School
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item, idx) => (
                <NavDropdown key={idx} item={item} />
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Button
                variant="outline"
                size="sm"
                href="#contact"
                className="hidden sm:inline-flex"
              >
                Campus Tour
              </Button>
              <Button
                variant="secondary"
                size="sm"
                href="#admissions"
              >
                Apply Now
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-700 hover:text-[#0f2744] hover:bg-slate-100 rounded-md lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1d2f]"
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navigationItems}
      />
    </>
  );
};
