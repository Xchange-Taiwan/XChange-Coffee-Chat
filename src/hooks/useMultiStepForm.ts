import { ReactElement, useEffect, useState } from 'react';

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (steps.length === 0) {
      setCurrentStep(0);
    } else {
      setCurrentStep(1);
    }
  }, [steps.length]);

  const goToNext = () => {
    setCurrentStep((prev) => (prev >= steps.length ? prev : prev + 1));
  };

  const goToBack = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return {
    currentStep,
    stepElement: steps[currentStep > 0 ? currentStep - 1 : 0],
    progress: steps.length > 0 ? currentStep / steps.length : 0,
    goToNext,
    goToBack,
    isFirstStep: steps.length > 0 ? currentStep === 1 : true,
    isLastStep: steps.length > 0 ? currentStep === steps.length : true,
  };
};
