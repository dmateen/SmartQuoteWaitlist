import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calculator, Shield } from 'lucide-react';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { QUOTE_STEPS } from '@/lib/constants/quote';
import { cn } from '@/lib/utils';

export const ContactInfoStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  isTyping,
  onNext,
  onPrevious,
}) => {
  const step = QUOTE_STEPS[7]; // Step 8
  const isValid = !!(formData.name && formData.email && formData.phone);

  return (
    <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-5 duration-300">
      <StepHeader 
        title={step.title} 
        description={step.description} 
        isEnhanced={true} 
      />

      <div className="space-y-4">
        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">
            Full Name *
          </Label>
          <Input
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="John Smith"
            disabled={isAutoPlaying}
            className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
          />
        </div>

        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">
            Email Address *
          </Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="john@example.com"
            disabled={isAutoPlaying}
            className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
          />
        </div>

        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">
            Phone Number *
          </Label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="(555) 123-4567"
            disabled={isAutoPlaying}
            className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
          />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/30">
        <p className="text-sm text-green-800 dark:text-green-200 font-medium flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Your information is secure and will only be used to send your quote
        </p>
      </div>

      <div className="flex gap-2">
        {onPrevious && (
          <Button
            onClick={onPrevious}
            variant="outline"
            className="flex-1 h-10 sm:h-12 font-semibold"
            disabled={isAutoPlaying}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        )}
        
        <Button
          onClick={onNext}
          className="flex-1 h-10 sm:h-12 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl"
          disabled={!isValid && !isAutoPlaying}
        >
          {isAutoPlaying ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              <span className="hidden sm:inline">Generating quote...</span>
              <span className="sm:hidden">Generating...</span>
            </>
          ) : !isValid ? (
            <>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Fill required fields</span>
              <span className="sm:hidden">Complete form</span>
            </>
          ) : (
            <>
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Get My Quote</span>
              <span className="sm:hidden">Get Quote</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};