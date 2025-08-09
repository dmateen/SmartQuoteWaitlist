import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext: () => void;
  nextLabel: string;
  canProceed: boolean;
  isAutoPlaying: boolean;
  showPrevious?: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  nextLabel,
  canProceed,
  isAutoPlaying,
  showPrevious = true,
}) => {
  return (
    <div className="flex gap-2">
      {showPrevious && onPrevious && (
        <Button
          onClick={onPrevious}
          variant="outline"
          className="flex-1"
          disabled={isAutoPlaying}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      )}
      
      <Button
        onClick={onNext}
        className="flex-1"
        size="lg"
        disabled={!canProceed || isAutoPlaying}
      >
        {isAutoPlaying ? (
          <>
            <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
            Selecting...
          </>
        ) : (
          <>
            {nextLabel} <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  );
};