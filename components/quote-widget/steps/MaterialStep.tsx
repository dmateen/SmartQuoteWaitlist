import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Home, Building, Warehouse } from 'lucide-react';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { RadioOption } from '../ui/RadioOption';
import { ContinueButton } from '../ui/ContinueButton';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const MaterialStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  onNext,
}) => {
  const step = QUOTE_STEPS[4]; // Step 5

  const materialOptions = [
    {
      value: 'asphalt-shingle',
      id: 'asphalt',
      label: 'Asphalt Shingle Roof',
      description: 'Cost-effective and durable. Available in many colors and styles.',
      icon: Home,
      iconColor: 'blue',
      badge: { text: 'Most Popular', color: 'green' },
    },
    {
      value: 'metal',
      id: 'metal',
      label: 'Metal Roof',
      description: 'Long-lasting and energy efficient. Premium option.',
      icon: Building,
      iconColor: 'gray',
      badge: { text: 'Coming Soon', color: 'yellow' },
      disabled: true,
    },
    {
      value: 'tile',
      id: 'tile',
      label: 'Tile Roof',
      description: 'Mediterranean style with excellent durability.',
      icon: Warehouse,
      iconColor: 'gray',
      badge: { text: 'Coming Soon', color: 'yellow' },
      disabled: true,
    },
  ];

  const handleOptionClick = (value: string) => {
    if (!isAutoPlaying) {
      updateFormData('roofMaterial', value);
    }
  };

  const handleContinue = (e: React.MouseEvent) => {
    console.log('Continue button clicked for step 5');
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
        value={formData.roofMaterial}
        onValueChange={(value) => updateFormData('roofMaterial', value)}
        disabled={isAutoPlaying}
        className="space-y-3 sm:space-y-4"
      >
        {materialOptions.map((option) => (
          <RadioOption
            key={option.value}
            {...option}
            selected={formData.roofMaterial === option.value}
            isAutoPlaying={isAutoPlaying}
            isEnhanced={true}
            onClick={() => handleOptionClick(option.value)}
          />
        ))}
      </RadioGroup>

      <ContinueButton
        isValid={!!formData.roofMaterial}
        isAutoPlaying={isAutoPlaying}
        nextStepLabel="Continue to Complexity"
        pendingLabel="Select a material to continue"
        onClick={handleContinue}
      />
    </div>
  );
};