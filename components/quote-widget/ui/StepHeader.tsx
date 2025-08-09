import React from 'react';

interface StepHeaderProps {
  title: string;
  description: string;
  isEnhanced?: boolean;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ 
  title, 
  description, 
  isEnhanced = false 
}) => {
  if (isEnhanced) {
    return (
      <div className="text-center space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground px-2">
          {description}
        </p>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
      </div>
    );
  }

  return (
    <div className="text-center py-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};