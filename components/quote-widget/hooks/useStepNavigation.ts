import { useState, useCallback, useEffect } from 'react';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const useStepNavigation = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const scrollToCurrentStep = useCallback(() => {
    const container = document.getElementById('steps-container');
    if (container) {
      const stepElement = container.querySelector(`[data-step="${currentStep}"]`);
      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentStep]);

  useEffect(() => {
    const timer = setTimeout(scrollToCurrentStep, 100);
    return () => clearTimeout(timer);
  }, [scrollToCurrentStep]);

  const nextStep = useCallback(() => {
    console.log('Next step clicked, current:', currentStep);
    if (currentStep < QUOTE_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const prevStep = useCallback(() => {
    console.log('Previous step clicked, current:', currentStep);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const resetStep = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === QUOTE_STEPS.length;

  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
    setCurrentStep,
    isFirstStep,
    isLastStep,
  };
};