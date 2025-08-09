import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuoteStep } from '@/types/quote';

interface ProgressStepsProps {
  steps: QuoteStep[];
  currentStep: number;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ 
  steps, 
  currentStep 
}) => {
  return (
    <div className="mt-6 sm:mt-8 relative">
      {/* Mobile: Horizontal scroll for steps on small screens */}
      <div
        className="overflow-x-auto pb-2 sm:overflow-visible sm:pb-0 scroll-smooth"
        id="steps-container"
      >
        <div className="flex items-center justify-between min-w-max sm:min-w-0 gap-1 sm:gap-0 px-2 sm:px-0">
          {steps.map((step) => (
            <div
              key={step.id}
              data-step={step.id}
              className="flex flex-col items-center relative z-10 min-w-[80px] sm:min-w-0 p-1"
            >
              <div
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg border-2',
                  currentStep === step.id
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-white border-primary scale-110 ring-2 sm:ring-4 ring-primary/20'
                    : currentStep > step.id
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white border-green-500'
                    : 'bg-muted text-muted-foreground border-border hover:border-primary/50'
                )}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5" />
                ) : currentStep === step.id ? (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                ) : (
                  step.id
                )}
              </div>
              
              <div
                className={cn(
                  'text-xs mt-1 sm:mt-2 text-center font-medium transition-colors duration-200 max-w-[75px] sm:max-w-[70px] leading-tight',
                  currentStep === step.id ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <span className="hidden sm:inline">{step.title}</span>
                <span
                  className="sm:hidden text-[9px] break-words hyphens-auto"
                  style={{ hyphens: 'auto', wordBreak: 'break-word' }}
                >
                  {step.title.length > 8
                    ? step.title.substring(0, 8) + '...'
                    : step.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar background - hidden on mobile due to scrolling */}
      <div className="absolute top-4 sm:top-5 left-6 right-6 sm:left-5 sm:right-5 h-0.5 bg-muted -z-0 hidden sm:block" />
      
      {/* Active progress bar */}
      <div
        className="absolute top-4 sm:top-5 left-6 sm:left-5 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 -z-0 hidden sm:block"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />
    </div>
  );
};