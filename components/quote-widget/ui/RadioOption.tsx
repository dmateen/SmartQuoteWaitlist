import React from 'react';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface RadioOptionProps {
  value: string;
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  iconColor?: string;
  badge?: {
    text: string;
    color: string;
  };
  disabled?: boolean;
  selected: boolean;
  isAutoPlaying: boolean;
  isEnhanced?: boolean;
  onClick?: () => void;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  value,
  id,
  label,
  description,
  icon: Icon,
  iconColor = 'blue',
  badge,
  disabled = false,
  selected,
  isAutoPlaying,
  isEnhanced = false,
  onClick,
}) => {
  const containerClasses = isEnhanced
    ? cn(
        "group flex items-start space-x-3 sm:space-x-4 space-y-0 rounded-xl border-2 p-3 sm:p-4 transition-all duration-200",
        !disabled && "cursor-pointer hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:scale-[1.01] sm:hover:scale-[1.02]",
        selected && "border-primary bg-primary/10 shadow-md scale-[1.01] sm:scale-[1.02]",
        disabled && "opacity-60 cursor-not-allowed",
        isAutoPlaying && "animate-pulse"
      )
    : cn(
        "flex items-center space-x-3 space-y-0 rounded-lg border p-3",
        !disabled && "hover:bg-muted/50",
        disabled && "opacity-50",
        isAutoPlaying && "animate-pulse"
      );

  const iconColorClasses = {
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-200',
    gray: 'bg-gray-100 text-gray-500',
  };

  const badgeColorClasses = {
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    blue: 'bg-blue-100 text-blue-700',
  };

  return (
    <div
      className={containerClasses}
      onClick={!disabled && !isAutoPlaying ? onClick : undefined}
    >
      <RadioGroupItem 
        value={value} 
        id={id} 
        disabled={disabled}
        className={cn(
          isEnhanced ? "mt-1 flex-shrink-0 pointer-events-none" : ""
        )}
      />
      
      <div className={cn(
        "flex-1 min-w-0",
        isEnhanced && "space-y-1 sm:space-y-2"
      )}>
        <Label 
          htmlFor={id} 
          className={cn(
            "font-medium cursor-pointer",
            isEnhanced && "font-semibold text-sm sm:text-base",
            isEnhanced && badge && "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
          )}
        >
          {isEnhanced && Icon ? (
            <div className="flex items-center gap-2">
              <div className={cn(
                "p-1.5 sm:p-2 rounded-lg transition-colors",
                iconColorClasses[iconColor as keyof typeof iconColorClasses]
              )}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span>{label}</span>
            </div>
          ) : (
            label
          )}
          
          {badge && (
            <div className="sm:ml-auto">
              <div className={cn(
                "px-2 py-1 rounded-full text-xs font-medium inline-block",
                badgeColorClasses[badge.color as keyof typeof badgeColorClasses]
              )}>
                {badge.text}
              </div>
            </div>
          )}
        </Label>
        
        <p className={cn(
          "text-xs text-muted-foreground font-normal",
          isEnhanced && "sm:text-sm leading-relaxed"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};