import { FormData } from '../components/OnboardingWizard';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateStep1 = (formData: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'Full name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
};

export const validateStep2 = (formData: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.companyName.trim()) {
    errors.companyName = 'Company name is required';
  } else if (formData.companyName.trim().length < 2) {
    errors.companyName = 'Company name must be at least 2 characters long';
  }

  if (!formData.industry) {
    errors.industry = 'Please select an industry';
  }

  if (!formData.companySize) {
    errors.companySize = 'Please select your company size';
  }

  return errors;
};

export const validateStep3 = (formData: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.theme) {
    errors.theme = 'Please select a theme preference';
  }

  if (!formData.defaultLayout) {
    errors.defaultLayout = 'Please select a default layout';
  }

  return errors;
};