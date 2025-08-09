import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { RadioOption } from '../ui/RadioOption';
import { NavigationButtons } from '../ui/NavigationButtons';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const HomeStoriesStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  onNext,
  onPrevious,
}) => {
  const step = QUOTE_STEPS[1]; // Step 2

  const storyOptions = [
    {
      value: '1',
      id: '1-story',
      label: '1 Story',
      description: 'Not including basement, loft or attic',
    },
    {
      value: '2',
      id: '2-story',
      label: '2 Stories',
      description: 'Not including basement, loft or attic',
    },
    {
      value: '3',
      id: '3-story',
      label: '3+ Stories',
      description: 'Not including basement, loft or attic',
    },
  ];

  return (
    <div className="space-y-4">
      <StepHeader 
        title={step.title} 
        description={step.description} 
      />

      <RadioGroup
        value={formData.stories}
        onValueChange={(value) => updateFormData('stories', value)}
        disabled={isAutoPlaying}
        className="space-y-3"
      >
        {storyOptions.map((option) => (
          <RadioOption
            key={option.value}
            {...option}
            selected={formData.stories === option.value}
            isAutoPlaying={isAutoPlaying}
          />
        ))}
      </RadioGroup>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        nextLabel="Next: Roof Pitch"
        canProceed={!!formData.stories}
        isAutoPlaying={isAutoPlaying}
      />
    </div>
  );
};