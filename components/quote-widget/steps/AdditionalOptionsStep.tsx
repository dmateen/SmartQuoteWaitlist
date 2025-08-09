import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { NavigationButtons } from '../ui/NavigationButtons';
import { QUOTE_STEPS } from '@/lib/constants/quote';
import { cn } from '@/lib/utils';

export const AdditionalOptionsStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  isTyping,
  onNext,
  onPrevious,
}) => {
  const step = QUOTE_STEPS[6]; // Step 7

  return (
    <div className="space-y-4">
      <StepHeader 
        title={step.title} 
        description={step.description} 
      />

      <div className="space-y-4">
        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">
            How many skylights need replacing?
          </Label>
          <Input
            type="number"
            value={formData.skylights}
            onChange={(e) => updateFormData('skylights', e.target.value)}
            placeholder="0"
            disabled={isAutoPlaying}
            className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Skylights typically last 15-25 years
          </p>
        </div>

        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">
            How many chimneys?
          </Label>
          <Input
            type="number"
            value={formData.chimneys}
            onChange={(e) => updateFormData('chimneys', e.target.value)}
            placeholder="1"
            disabled={isAutoPlaying}
            className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Most common source of leaks
          </p>
        </div>
      </div>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        nextLabel="Get My Quote"
        canProceed={true} // Optional step
        isAutoPlaying={isAutoPlaying}
      />
    </div>
  );
};