import { useState, useCallback } from 'react';
import { QuoteFormData } from '@/types/quote';
import { DEMO_CONFIG } from '@/lib/constants/quote';

interface UseAutoDemoProps {
  updateFormData: (field: keyof QuoteFormData, value: string) => void;
  resetFormData: () => void;
  setCurrentStep: (step: number) => void;
}

export const useAutoDemo = ({ updateFormData, resetFormData, setCurrentStep }: UseAutoDemoProps) => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const typeText = useCallback((text: string, field: keyof QuoteFormData): Promise<void> => {
    return new Promise<void>((resolve) => {
      let currentText = '';
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          currentText += text[index];
          updateFormData(field, currentText);
          index++;
        } else {
          clearInterval(typeInterval);
          resolve();
        }
      }, 80);
    });
  }, [updateFormData]);

  const selectOption = useCallback((field: keyof QuoteFormData, value: string): Promise<void> => {
    return new Promise<void>((resolve) => {
      updateFormData(field, value);
      setTimeout(resolve, 300);
    });
  }, [updateFormData]);

  const startAutoDemo = useCallback(async () => {
    setIsAutoPlaying(true);
    setIsTyping(true);

    // Reset form and step
    setCurrentStep(1);
    resetFormData();

    try {
      let stepIndex = 0;
      
      for (const demoStep of DEMO_CONFIG.steps) {
        // Wait for step delay
        await new Promise(resolve => setTimeout(resolve, demoStep.delay));
        
        // Update form data
        if (demoStep.isTyping) {
          await typeText(demoStep.value, demoStep.field);
        } else {
          await selectOption(demoStep.field, demoStep.value);
        }

        // Move to next step if needed
        if (stepIndex < DEMO_CONFIG.stepDelays.length) {
          await new Promise(resolve => setTimeout(resolve, DEMO_CONFIG.stepDelays[stepIndex]));
          setCurrentStep(stepIndex + 2); // +2 because we start at step 1
          stepIndex++;
        }
      }

      // Final quote step
      await new Promise(resolve => setTimeout(resolve, 800));
      
    } catch (error) {
      console.error('Animation error:', error);
    } finally {
      setIsTyping(false);
      setIsAutoPlaying(false);
    }
  }, [updateFormData, resetFormData, setCurrentStep, typeText, selectOption]);

  const stopAutoDemo = useCallback(() => {
    setIsAutoPlaying(false);
    setIsTyping(false);
  }, []);

  return {
    isAutoPlaying,
    isTyping,
    startAutoDemo,
    stopAutoDemo,
  };
};