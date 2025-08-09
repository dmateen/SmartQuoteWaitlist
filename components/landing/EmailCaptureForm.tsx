"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface EmailCaptureFormProps {
  eventId?: string;
  ctaLabel?: string;
  seatsLeft?: number;
  compact?: boolean;
}

export const EmailCaptureForm = ({ 
  eventId, 
  ctaLabel = "Get Early Access", 
  seatsLeft,
  compact = false 
}: EmailCaptureFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Email captured:', { email, eventId });
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
      
      setEmail('');
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 rounded-lg border bg-green-50 p-3 text-green-800 dark:bg-green-900/20 dark:text-green-300">
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm font-medium">You&apos;re on the list!</span>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          variant="default"
          disabled={isSubmitting}
          size="sm"
        >
          {isSubmitting ? "..." : ctaLabel}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <Button 
          type="submit" 
          variant="default"
          size="lg"
          disabled={isSubmitting}
          className="sm:min-w-[140px]"
        >
          {isSubmitting ? "Adding you..." : ctaLabel}
        </Button>
      </div>
      {seatsLeft && (
        <p className="text-sm text-muted-foreground">
          Only {seatsLeft} founder spots left
        </p>
      )}
    </form>
  );
};