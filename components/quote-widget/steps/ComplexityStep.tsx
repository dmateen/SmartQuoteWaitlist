import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Home, Building, TrendingUp, Warehouse } from 'lucide-react';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { RadioOption } from '../ui/RadioOption';
import { ContinueButton } from '../ui/ContinueButton';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const ComplexityStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  onNext,
}) => {
  const step = QUOTE_STEPS[5]; // Step 6

  const complexityOptions = [
    {
      value: 'basic',
      id: 'basic',
      label: 'Basic Roof',
      description: 'Simple design, 2-3 sides, no special features',
      icon: Home,
      iconColor: 'green',
    },
    {
      value: 'standard',
      id: 'standard',
      label: 'Standard Roof',
      description: 'May have dormers, simple features, up to 6 sides',
      icon: Building,
      iconColor: 'blue',
      badge: { text: 'Most Common', color: 'blue' },
    },
    {
      value: 'advanced',
      id: 'advanced',
      label: 'Advanced Roof',
      description: 'Complex design, multiple levels, different slopes',
      icon: TrendingUp,
      iconColor: 'orange',
    },
    {
      value: 'complex',
      id: 'complex',
      label: 'Complex Roof',
      description: 'Challenging design, cut-up sections, turrets, multiple roof types',
      icon: Warehouse,
      iconColor: 'red',
    },
  ];

  const handleOptionClick = (value: string) => {
    if (!isAutoPlaying) {
      updateFormData('complexity', value);
    }
  };

  const handleContinue = (e: React.MouseEvent) => {
    console.log('Continue button clicked for step 6');
    e.preventDefault();
    onNext();
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-5 duration-300">
      <StepHeader 
        title={step.title} 
        description={step.description} 
        isEnhanced={true} 
      />

      <RadioGroup
        value={formData.complexity}
        onValueChange={(value) => updateFormData('complexity', value)}
        disabled={isAutoPlaying}
        className="space-y-3 sm:space-y-4"
      >
        {complexityOptions.map((option) => (
          <RadioOption
            key={option.value}
            {...option}
            selected={formData.complexity === option.value}
            isAutoPlaying={isAutoPlaying}
            isEnhanced={true}
            onClick={() => handleOptionClick(option.value)}
          />
        ))}
      </RadioGroup>

      <ContinueButton
        isValid={!!formData.complexity}
        isAutoPlaying={isAutoPlaying}
        nextStepLabel="Continue to Additional Options"
        pendingLabel="Select complexity to continue"
        onClick={handleContinue}
      />
    </div>
  );
};