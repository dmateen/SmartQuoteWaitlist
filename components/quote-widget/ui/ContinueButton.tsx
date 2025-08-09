import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContinueButtonProps {
  isValid: boolean;
  isAutoPlaying: boolean;
  nextStepLabel: string;
  pendingLabel: string;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  loadingIcon?: React.ReactNode;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  isValid,
  isAutoPlaying,
  nextStepLabel,
  pendingLabel,
  onClick,
  disabled = false,
  loadingIcon,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-full h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-200",
        "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80",
        "shadow-lg hover:shadow-xl disabled:opacity-50",
        !isValid && !isAutoPlaying && "animate-pulse"
      )}
      size="lg"
      disabled={!isValid || isAutoPlaying || disabled}
    >
      {isAutoPlaying ? (
        <>
          {loadingIcon || (
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 sm:mr-3" />
          )}
          <span className="hidden sm:inline">Auto-selecting option...</span>
          <span className="sm:hidden">Selecting...</span>
        </>
      ) : !isValid ? (
        <>
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
          <span className="hidden sm:inline">{pendingLabel}</span>
          <span className="sm:hidden">{pendingLabel.split(' ')[0]} {pendingLabel.split(' ')[1] || ''}</span>
        </>
      ) : (
        <>
          <span className="hidden sm:inline">{nextStepLabel}</span>
          <span className="sm:hidden">Continue</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );
};