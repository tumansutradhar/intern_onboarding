import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import { validateStep1, validateStep2, validateStep3 } from '../utils/validation';

export interface FormData {
  name: string;
  email: string;

  companyName: string;
  industry: string;
  companySize: string;

  theme: string;
  defaultLayout: string;
}

const OnboardingWizard: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('onboardingData');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      companyName: '',
      industry: '',
      companySize: '',
      theme: 'light',
      defaultLayout: 'grid'
    };
  });

  useEffect(() => {
    localStorage.setItem('onboardingData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    let stepErrors: Record<string, string> = {};
    
    switch (currentStep) {
      case 1:
        stepErrors = validateStep1(formData);
        break;
      case 2:
        stepErrors = validateStep2(formData);
        break;
      case 3:
        stepErrors = validateStep3(formData);
        break;
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    const stepErrors = validateStep3(formData);
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/dashboard');
  };

  const renderStep = () => {
    const stepProps = {
      formData,
      updateFormData,
      errors,
      onNext: handleNext,
      onBack: handleBack,
      onSubmit: handleSubmit
    };

    switch (currentStep) {
      case 1:
        return <Step1 {...stepProps} />;
      case 2:
        return <Step2 {...stepProps} />;
      case 3:
        return <Step3 {...stepProps} />;
      default:
        return <Step1 {...stepProps} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ProgressBar currentStep={currentStep} totalSteps={3} />
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
