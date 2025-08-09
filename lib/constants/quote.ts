import { QuoteStep, QuoteFormData } from '@/types/quote';

export const QUOTE_STEPS: QuoteStep[] = [
  { id: 1, title: 'Project Type', description: 'What type of roofing project?' },
  { id: 2, title: 'Home Stories', description: 'How many stories?' },
  { id: 3, title: 'Roof Pitch', description: 'Slope/pitch of your roof' },
  { id: 4, title: 'Roof Size', description: 'Size of your roof' },
  { id: 5, title: 'Material Type', description: 'What roof material?' },
  { id: 6, title: 'Complexity Type', description: 'How complex is your roof?' },
  { id: 7, title: 'Additional Options', description: 'Extra features' },
  { id: 8, title: 'Contact Info', description: 'Get your instant quote' },
  { id: 9, title: 'Your Quote', description: 'Instant pricing estimate' },
];

export const INITIAL_FORM_DATA: QuoteFormData = {
  projectType: '',
  stories: '',
  pitchType: '',
  pitch: '',
  sizeType: '',
  roofSize: '',
  homeFootprint: '',
  houseSize: '',
  hasGarage: '',
  roofMaterial: '',
  complexity: '',
  skylights: '',
  chimneys: '',
  name: '',
  email: '',
  phone: '',
};

export const HOUSE_SIZE_OPTIONS = [
  '750', '1000', '1250', '1500', '1750', '2000', '2500', '3000', '3500'
];

export const QUOTE_PACKAGES = [
  {
    name: 'Good',
    price: '$14,200',
    description: 'Standard materials & warranty',
    color: 'green',
  },
  {
    name: 'Better',
    price: '$16,300',
    description: 'Premium materials & extended warranty',
    color: 'orange',
  },
  {
    name: 'Best',
    price: '$18,400',
    description: 'Premium materials + lifetime warranty',
    color: 'primary',
  },
];

export const DEMO_CONFIG = {
  steps: [
    { field: 'projectType' as keyof QuoteFormData, value: 're-roof', delay: 1000 },
    { field: 'stories' as keyof QuoteFormData, value: '2', delay: 600 },
    { field: 'pitchType' as keyof QuoteFormData, value: 'estimate', delay: 600 },
    { field: 'pitch' as keyof QuoteFormData, value: 'average', delay: 500 },
    { field: 'sizeType' as keyof QuoteFormData, value: 'house-sqft', delay: 600 },
    { field: 'houseSize' as keyof QuoteFormData, value: '2000', delay: 500 },
    { field: 'hasGarage' as keyof QuoteFormData, value: 'yes', delay: 400 },
    { field: 'roofMaterial' as keyof QuoteFormData, value: 'asphalt-shingle', delay: 600 },
    { field: 'complexity' as keyof QuoteFormData, value: 'standard', delay: 600 },
    { field: 'skylights' as keyof QuoteFormData, value: '2', delay: 600, isTyping: true },
    { field: 'chimneys' as keyof QuoteFormData, value: '1', delay: 400, isTyping: true },
    { field: 'name' as keyof QuoteFormData, value: 'John Smith', delay: 600, isTyping: true },
    { field: 'email' as keyof QuoteFormData, value: 'john@example.com', delay: 600, isTyping: true },
    { field: 'phone' as keyof QuoteFormData, value: '(555) 123-4567', delay: 600, isTyping: true },
  ],
  stepDelays: [800, 800, 800, 800, 800, 800, 800, 1000, 800],
};