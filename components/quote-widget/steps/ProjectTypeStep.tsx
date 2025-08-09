import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Home, Building, Warehouse } from 'lucide-react';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { RadioOption } from '../ui/RadioOption';
import { ContinueButton } from '../ui/ContinueButton';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const ProjectTypeStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  onNext,
}) => {
  const step = QUOTE_STEPS[0]; // Step 1
  
  const projectOptions = [
    {
      value: 're-roof',
      id: 're-roof',
      label: 'Re-Roof / Replace',
      description: 'Remove existing roof and construct new one. Includes labor costs for stripping and disposal.',
      icon: Home,
      iconColor: 'orange',
      badge: { text: 'Most Common', color: 'orange' },
    },
    {
      value: 'new-construction',
      id: 'new-construction',
      label: 'House New Construction',
      description: 'New build ready for roof installation. No removal costs.',
      icon: Building,
      iconColor: 'blue',
    },
    {
      value: 'small-shed',
      id: 'small-shed',
      label: 'Small Shed or Garage',
      description: 'Structures under 500sqft',
      icon: Warehouse,
      iconColor: 'gray',
      badge: { text: 'Coming Soon', color: 'yellow' },
      disabled: true,
    },
  ];

  const handleOptionClick = (value: string) => {
    if (!isAutoPlaying) {
      updateFormData('projectType', value);
    }
  };

  const handleContinue = (e: React.MouseEvent) => {
    console.log('Continue button clicked for step 1');
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
        value={formData.projectType}
        onValueChange={(value) => updateFormData('projectType', value)}
        disabled={isAutoPlaying}
        className="space-y-3 sm:space-y-4"
      >
        {projectOptions.map((option) => (
          <RadioOption
            key={option.value}
            {...option}
            selected={formData.projectType === option.value}
            isAutoPlaying={isAutoPlaying}
            isEnhanced={true}
            onClick={() => handleOptionClick(option.value)}
          />
        ))}
      </RadioGroup>

      <ContinueButton
        isValid={!!formData.projectType}
        isAutoPlaying={isAutoPlaying}
        nextStepLabel="Continue to Home Stories"
        pendingLabel="Select a project type to continue"
        onClick={handleContinue}
      />
    </div>
  );
};