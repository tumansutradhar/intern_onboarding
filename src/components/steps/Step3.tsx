import React from 'react';
import { Settings, Sun, Moon, Grid, List, ArrowLeft, Check } from 'lucide-react';
import { FormData } from '../OnboardingWizard';

interface Step3Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  errors: Record<string, string>;
  onBack: () => void;
  onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, updateFormData, errors, onBack, onSubmit }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Settings className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Customize your experience</h2>
        <p className="text-gray-600">Set your preferences to make the dashboard work best for you</p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Theme Preference *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => updateFormData('theme', 'light')}
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${formData.theme === 'light'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-center justify-center mb-2">
                <Sun className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-sm font-medium text-gray-900">Light</div>
              <div className="text-xs text-gray-500">Clean and bright</div>
            </button>
            <button
              type="button"
              onClick={() => updateFormData('theme', 'dark')}
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${formData.theme === 'dark'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-center justify-center mb-2">
                <Moon className="w-6 h-6 text-indigo-500" />
              </div>
              <div className="text-sm font-medium text-gray-900">Dark</div>
              <div className="text-xs text-gray-500">Easy on the eyes</div>
            </button>
          </div>
          {errors.theme && <p className="text-red-500 text-sm mt-1">{errors.theme}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Default Layout *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => updateFormData('defaultLayout', 'grid')}
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${formData.defaultLayout === 'grid'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-center justify-center mb-2">
                <Grid className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-sm font-medium text-gray-900">Grid</div>
              <div className="text-xs text-gray-500">Card-based layout</div>
            </button>
            <button
              type="button"
              onClick={() => updateFormData('defaultLayout', 'list')}
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${formData.defaultLayout === 'list'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-center justify-center mb-2">
                <List className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-sm font-medium text-gray-900">List</div>
              <div className="text-xs text-gray-500">Table-based layout</div>
            </button>
          </div>
          {errors.defaultLayout && <p className="text-red-500 text-sm mt-1">{errors.defaultLayout}</p>}
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </button>
        <button onClick={onSubmit} className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
          Complete Setup
          <Check className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step3;
