"use client";

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useQuoteForm } from './hooks/useQuoteForm';
import { useStepNavigation } from './hooks/useStepNavigation';
import { useAutoDemo } from './hooks/useAutoDemo';
import { QuoteHeader } from './QuoteHeader';
import { ProgressSteps } from './ProgressSteps';
import { ProjectTypeStep } from './steps/ProjectTypeStep';
import { HomeStoriesStep } from './steps/HomeStoriesStep';
import { RoofPitchStep } from './steps/RoofPitchStep';
import { RoofSizeStep } from './steps/RoofSizeStep';
import { MaterialStep } from './steps/MaterialStep';
import { ComplexityStep } from './steps/ComplexityStep';
import { AdditionalOptionsStep } from './steps/AdditionalOptionsStep';
import { ContactInfoStep } from './steps/ContactInfoStep';
import { FinalQuoteStep } from './steps/FinalQuoteStep';
import { QUOTE_STEPS } from '@/lib/constants/quote';

export const QuoteWidget: React.FC = () => {
  // State management hooks
  const { formData, updateFormData, resetFormData, isStepValid } = useQuoteForm();
  const { 
    currentStep, 
    nextStep, 
    prevStep, 
    resetStep, 
    setCurrentStep 
  } = useStepNavigation();
  
  const { isAutoPlaying, isTyping, startAutoDemo } = useAutoDemo({
    updateFormData,
    resetFormData,
    setCurrentStep,
  });

  // Combined reset function
  const handleReset = () => {
    resetStep();
    resetFormData();
  };

  // Step navigation handlers
  const handleNext = () => {
    if (isStepValid(currentStep)) {
      nextStep();
    }
  };

  const handlePrevious = () => {
    prevStep();
  };

  // Common step props
  const stepProps = {
    formData,
    updateFormData,
    isAutoPlaying,
    isTyping,
    onNext: handleNext,
    onPrevious: handlePrevious,
    onReset: handleReset,
  };

  // Render current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectTypeStep {...stepProps} />;
      case 2:
        return <HomeStoriesStep {...stepProps} />;
      case 3:
        return <RoofPitchStep {...stepProps} />;
      case 4:
        return <RoofSizeStep {...stepProps} />;
      case 5:
        return <MaterialStep {...stepProps} />;
      case 6:
        return <ComplexityStep {...stepProps} />;
      case 7:
        return <AdditionalOptionsStep {...stepProps} />;
      case 8:
        return <ContactInfoStep {...stepProps} />;
      case 9:
        return <FinalQuoteStep {...stepProps} />;
      default:
        return <ProjectTypeStep {...stepProps} />;
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-lg border-2 bg-gradient-to-br from-background via-background to-muted/20 transition-all hover:shadow-xl hover:scale-[1.01] duration-300 overflow-hidden">
      <CardHeader className="pb-4 px-4 sm:px-6">
        <QuoteHeader
          isAutoPlaying={isAutoPlaying}
          onStartDemo={startAutoDemo}
          onReset={handleReset}
        />
        
        <ProgressSteps 
          steps={QUOTE_STEPS}
          currentStep={currentStep}
        />
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        {renderCurrentStep()}
      </CardContent>
    </Card>
  );
};