"use client";

import { useState, useEffect, useRef } from 'react';
import { Dancing_Script } from 'next/font/google';
import { ChevronDown, ChevronUp } from 'lucide-react';

const dancingScript = Dancing_Script({
  weight: ['700'],
  subsets: ['latin'],
});

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const prevY = useRef(0);
  const ignoreUntil = useRef(0);
  const THRESHOLD = 10;

  // scroll-to-collapse logic
  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      if (now < ignoreUntil.current) return;

      const y = window.scrollY;
      // if scrolled back up to top, auto-expand
      if (y <= 50 && collapsed) {
        setCollapsed(false);
        prevY.current = y;
        return;
      }
      // collapse only when expanded and user scrolls down beyond threshold
      if (!collapsed && y > prevY.current + THRESHOLD && y > 50) {
        setCollapsed(true);
      }
      prevY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [collapsed]);

  // click to expand immediately
  const expandHeader = () => {
    setCollapsed(false);
    ignoreUntil.current = Date.now() + 500;
    prevY.current = window.scrollY;
  };

  // explicit list of nav links matching your section IDs
  const navItems = [
    { label: 'Home',           id: 'home' },
    { label: 'About Me',       id: 'about' },
    { label: 'Skills',         id: 'skills' },
    { label: 'Experience',     id: 'experience' },
    { label: 'Projects',       id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Achievements',   id: 'achievements' },
    { label: 'Resume',         id: 'resume' },
    { label: 'Contact Me',     id: 'contact' },
  ];

  return (
    <header
      className="sticky top-0 w-full z-50 transition-all duration-300"
      style={{
        /* match your section background */
        background: 'var(--background-gradient)',
      }}
    >
      <div className={`flex items-center justify-between px-8 ${collapsed ? 'py-2' : 'py-4'}`}>
        {!collapsed ? (
          <>
            {/* full header */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${dancingScript.className}`}
                style={{
                  backgroundColor: 'white',
                  color: '#0D1B2A',
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                AC
              </div>
              <span
                className={`text-2xl ${dancingScript.className}`}
                style={{ color: 'white' }}
              >
                Atharva Chaudhari
              </span>
            </div>
            <nav className="hidden md:flex space-x-6 items-center">
              {navItems.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="nav-link hover:text-[#D4AF37] transition"
                  style={{ color: 'white' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </>
        ) : (
          /* collapsed header: show just the "expand" arrow */
          <button
            onClick={expandHeader}
            className="ml-auto p-2 text-[#D4AF37] text-2xl color-pulse"
          >
            &lt;
          </button>
        )}
      </div>
    </header>
  );
}
