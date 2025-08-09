"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Zap } from 'lucide-react';

export const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling past hero section
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-medium">
            🔥 Founder pricing ends soon - Limited spots available
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary" 
            size="sm"
            asChild
          >
            <a href="#pricing">
              Get Early Access
            </a>
          </Button>
          <button
            onClick={handleDismiss}
            className="rounded p-1 hover:bg-primary-foreground/20"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};