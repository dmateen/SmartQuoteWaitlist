export interface QuoteStep {
  id: number;
  title: string;
  description: string;
}

export interface QuoteFormData {
  projectType: string;
  stories: string;
  pitchType: string;
  pitch: string;
  sizeType: string;
  roofSize: string;
  homeFootprint: string;
  houseSize: string;
  hasGarage: string;
  roofMaterial: string;
  complexity: string;
  skylights: string;
  chimneys: string;
  name: string;
  email: string;
  phone: string;
}

export interface QuoteState {
  currentStep: number;
  formData: QuoteFormData;
  isAutoPlaying: boolean;
  isTyping: boolean;
}

export interface StepProps {
  formData: QuoteFormData;
  updateFormData: (field: keyof QuoteFormData, value: string) => void;
  isAutoPlaying: boolean;
  isTyping: boolean;
  onNext: () => void;
  onPrevious?: () => void;
  onReset?: () => void;
}

export interface RadioOptionConfig {
  value: string;
  id: string;
  label: string;
  description: string;
  icon?: React.ComponentType<any>;
  iconColor?: string;
  badge?: {
    text: string;
    color: string;
  };
  disabled?: boolean;
}

export interface SelectOptionConfig {
  value: string;
  label: string;
}

export interface QuotePackage {
  name: string;
  price: string;
  description: string;
  color: string;
  icon?: React.ComponentType<any>;
}

export type ProjectType = 're-roof' | 'new-construction' | 'small-shed';
export type Stories = '1' | '2' | '3';
export type PitchType = 'estimate' | 'exact';
export type Pitch = 'slight' | 'average' | 'steep' | 'very-steep' | '4/12' | '6/12' | '8/12' | '10/12' | '12/12';
export type SizeType = 'exact' | 'footprint' | 'house-sqft';
export type RoofMaterial = 'asphalt-shingle' | 'metal' | 'tile';
export type Complexity = 'basic' | 'standard' | 'advanced' | 'complex';

// Event handlers
export interface QuoteActions {
  nextStep: () => void;
  prevStep: () => void;
  resetPreview: () => void;
  updateFormData: (field: keyof QuoteFormData, value: string) => void;
  startAutoDemo: () => Promise<void>;
}

// Demo configuration
export interface DemoStep {
  field: keyof QuoteFormData;
  value: string;
  delay?: number;
  isTyping?: boolean;
}

export interface AutoDemoConfig {
  steps: DemoStep[];
  stepDelays: number[];
}