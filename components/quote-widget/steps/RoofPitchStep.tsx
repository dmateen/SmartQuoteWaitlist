import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { RadioOption } from '../ui/RadioOption';
import { NavigationButtons } from '../ui/NavigationButtons';
import { QUOTE_STEPS } from '@/lib/constants/quote';
import { cn } from '@/lib/utils';

export const RoofPitchStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  onNext,
  onPrevious,
}) => {
  const step = QUOTE_STEPS[2]; // Step 3

  const pitchOptions = [
    {
      value: 'slight',
      id: 'slight',
      label: 'Slight - Can easily be walked (4/12 pitch)',
      description: '',
    },
    {
      value: 'average',
      id: 'average',
      label: 'Average - A little steep but walkable (6/12 pitch)',
      description: '',
    },
    {
      value: 'steep',
      id: 'steep',
      label: 'Steep - Challenging to walk (8/12 pitch)',
      description: '',
    },
    {
      value: 'very-steep',
      id: 'very-steep',
      label: 'Very Steep - Nearly impossible to walk (10+/12)',
      description: '',
    },
  ];

  return (
    <div className="space-y-4">
      <StepHeader 
        title={step.title} 
        description={step.description} 
      />

      <div className="space-y-3">
        <Select
          value={formData.pitchType}
          onValueChange={(value) => updateFormData('pitchType', value)}
          disabled={isAutoPlaying}
        >
          <SelectTrigger className={cn(isAutoPlaying && 'animate-pulse')}>
            <SelectValue placeholder="Select measurement type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="estimate">Estimate Roof Pitch</SelectItem>
            <SelectItem value="exact">Exact Roof Pitch</SelectItem>
          </SelectContent>
        </Select>

        {formData.pitchType === 'estimate' && (
          <RadioGroup
            value={formData.pitch}
            onValueChange={(value) => updateFormData('pitch', value)}
            disabled={isAutoPlaying}
            className="space-y-2"
          >
            {pitchOptions.map((option) => (
              <RadioOption
                key={option.value}
                {...option}
                selected={formData.pitch === option.value}
                isAutoPlaying={isAutoPlaying}
              />
            ))}
          </RadioGroup>
        )}

        {formData.pitchType === 'exact' && (
          <Select
            value={formData.pitch}
            onValueChange={(value) => updateFormData('pitch', value)}
            disabled={isAutoPlaying}
          >
            <SelectTrigger className={cn(isAutoPlaying && 'animate-pulse')}>
              <SelectValue placeholder="Select exact pitch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4/12">4/12 - 18.43°</SelectItem>
              <SelectItem value="6/12">6/12 - 26.57°</SelectItem>
              <SelectItem value="8/12">8/12 - 33.69°</SelectItem>
              <SelectItem value="10/12">10/12 - 39.81°</SelectItem>
              <SelectItem value="12/12">12/12 - 45°</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        nextLabel="Next: Roof Size"
        canProceed={!!formData.pitch}
        isAutoPlaying={isAutoPlaying}
      />
    </div>
  );
};