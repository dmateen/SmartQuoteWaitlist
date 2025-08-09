"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { EmailCaptureForm } from './EmailCaptureForm';
import { Gift } from 'lucide-react';

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !hasShown) {
        // Small delay to avoid false positives
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 100);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Gift className="h-5 w-5 text-primary" />
            Wait! Don&apos;t Miss Out
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Get exclusive early access to SmartQuote.ai and be the first in your market to offer instant roofing quotes.
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-3">
            <h4 className="font-semibold text-sm mb-2">Founder Beta Includes:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Unlimited instant quotes</li>
              <li>• White-glove setup call</li>
              <li>• 30-day money-back guarantee</li>
            </ul>
          </div>

          <EmailCaptureForm 
            eventId="exit_intent_modal" 
            ctaLabel="Save My Spot" 
            seatsLeft={44}
          />
          
          <p className="text-xs text-center text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};