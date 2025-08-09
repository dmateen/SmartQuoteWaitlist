import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { StepProps } from '@/types/quote';
import { StepHeader } from '../ui/StepHeader';
import { NavigationButtons } from '../ui/NavigationButtons';
import { QUOTE_STEPS, HOUSE_SIZE_OPTIONS } from '@/lib/constants/quote';
import { cn } from '@/lib/utils';

export const RoofSizeStep: React.FC<StepProps> = ({
  formData,
  updateFormData,
  isAutoPlaying,
  isTyping,
  onNext,
  onPrevious,
}) => {
  const step = QUOTE_STEPS[3]; // Step 4

  return (
    <div className="space-y-4">
      <StepHeader 
        title={step.title} 
        description={step.description} 
      />

      <div className="space-y-3">
        <Select
          value={formData.sizeType}
          onValueChange={(value) => updateFormData('sizeType', value)}
          disabled={isAutoPlaying}
        >
          <SelectTrigger className={cn(isAutoPlaying && 'animate-pulse')}>
            <SelectValue placeholder="Select measurement method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="exact">Exact Roof Size (most accurate)</SelectItem>
            <SelectItem value="footprint">Home Footprint (mostly accurate)</SelectItem>
            <SelectItem value="house-sqft">Estimate House Square Footage</SelectItem>
          </SelectContent>
        </Select>

        {formData.sizeType === 'exact' && (
          <div>
            <Label className="mb-1 block text-sm text-muted-foreground">
              Roof Square Footage
            </Label>
            <Input
              value={formData.roofSize}
              onChange={(e) => updateFormData('roofSize', e.target.value)}
              placeholder="2200"
              disabled={isAutoPlaying}
              className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
            />
          </div>
        )}

        {formData.sizeType === 'footprint' && (
          <div>
            <Label className="mb-1 block text-sm text-muted-foreground">
              Home Footprint (sq ft)
            </Label>
            <Input
              value={formData.homeFootprint}
              onChange={(e) => updateFormData('homeFootprint', e.target.value)}
              placeholder="1800"
              disabled={isAutoPlaying}
              className={cn(isAutoPlaying && isTyping && 'animate-pulse')}
            />
          </div>
        )}

        {formData.sizeType === 'house-sqft' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {HOUSE_SIZE_OPTIONS.map((size) => (
                <Button
                  key={size}
                  variant={formData.houseSize === size ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateFormData('houseSize', size)}
                  disabled={isAutoPlaying}
                  className={cn(
                    'text-xs h-8 sm:h-auto',
                    isAutoPlaying && 'animate-pulse'
                  )}
                >
                  {size} ft²
                </Button>
              ))}
            </div>

            <div>
              <Label className="mb-2 block text-sm text-muted-foreground">
                Do you have a garage?
              </Label>
              <RadioGroup
                value={formData.hasGarage}
                onValueChange={(value) => updateFormData('hasGarage', value)}
                disabled={isAutoPlaying}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-garage" />
                  <Label htmlFor="no-garage">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-garage" />
                  <Label htmlFor="yes-garage">Yes</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
      </div>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        nextLabel="Next: Material"
        canProceed={!!(formData.roofSize || formData.homeFootprint || formData.houseSize)}
        isAutoPlaying={isAutoPlaying}
      />
    </div>
  );
};