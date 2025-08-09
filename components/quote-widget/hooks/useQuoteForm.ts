import { useState, useCallback } from 'react';
import { QuoteFormData, QuoteState } from '@/types/quote';
import { INITIAL_FORM_DATA } from '@/lib/constants/quote';

export const useQuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);

  const updateFormData = useCallback((field: keyof QuoteFormData, value: string) => {
    console.log('Form data updated:', field, value);
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  const isStepValid = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.projectType;
      case 2:
        return !!formData.stories;
      case 3:
        return !!formData.pitch;
      case 4:
        return !!(formData.roofSize || formData.homeFootprint || formData.houseSize);
      case 5:
        return !!formData.roofMaterial;
      case 6:
        return !!formData.complexity;
      case 7:
        return true; // Optional step
      case 8:
        return !!(formData.name && formData.email && formData.phone);
      case 9:
        return true; // Final step
      default:
        return false;
    }
  }, [formData]);

  return {
    formData,
    updateFormData,
    resetFormData,
    isStepValid,
  };
};