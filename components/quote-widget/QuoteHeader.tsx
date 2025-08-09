import React from 'react';
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  TrendingUp, 
  Play, 
  RotateCcw, 
  Shield 
} from 'lucide-react';

interface QuoteHeaderProps {
  isAutoPlaying: boolean;
  onStartDemo: () => void;
  onReset: () => void;
}

export const QuoteHeader: React.FC<QuoteHeaderProps> = ({
  isAutoPlaying,
  onStartDemo,
  onReset,
}) => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 sm:justify-between">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent truncate">
              Smart Roofing Quote
            </CardTitle>
            <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
              <div className="flex items-center text-xs text-green-600 font-medium">
                <TrendingUp className="w-3 h-3 mr-1" />
                Live Demo
              </div>
              <div className="text-xs text-muted-foreground hidden sm:inline">•</div>
              <div className="text-xs text-muted-foreground">from $174/mo</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-1 w-full sm:w-auto">
          <Button
            size="sm"
            variant="default"
            onClick={onStartDemo}
            disabled={isAutoPlaying}
            className="text-xs px-2 sm:px-3 py-1.5 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md flex-1 sm:flex-none"
          >
            {isAutoPlaying ? (
              <>
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1 sm:mr-1.5" />
                <span className="hidden sm:inline">Demo Running...</span>
                <span className="sm:hidden">Running...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 mr-1 sm:mr-1.5 fill-current" />
                <span className="hidden sm:inline">Watch Demo</span>
                <span className="sm:hidden">Demo</span>
              </>
            )}
          </Button>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={onReset}
            disabled={isAutoPlaying}
            className="text-xs px-2 sm:px-3 py-1.5 h-auto hover:bg-muted/50 flex-1 sm:flex-none"
          >
            <RotateCcw className="w-3 h-3 mr-1 sm:mr-1.5" />
            <span className="sm:hidden">Reset</span>
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>
      </div>

      {/* Info Banner */}
      <div className=" p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/50 dark:border-blue-800/30">
        <p className="text-sm text-blue-800 dark:text-blue-200 font-medium flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Experience how customers get instant, accurate roofing quotes
        </p>
        <div className="mt-2 text-xs text-blue-600 dark:text-blue-300">
          👆 Click options below or use the "Watch Demo" button above
        </div>
      </div>
    </>
  );
};