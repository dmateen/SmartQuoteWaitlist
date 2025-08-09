"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, CheckCircle, Play, RotateCcw, Home, Building, Warehouse, TrendingUp, Shield, Clock, Star, Award, Calculator, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Project Type', description: 'What type of roofing project?' },
  { id: 2, title: 'Home Stories', description: 'How many stories?' },
  { id: 3, title: 'Roof Pitch', description: 'Slope/pitch of your roof' },
  { id: 4, title: 'Roof Size', description: 'Size of your roof' },
  { id: 5, title: 'Material', description: 'What roof material?' },
  { id: 6, title: 'Complexity', description: 'How complex is your roof?' },
  { id: 7, title: 'Additional Options', description: 'Extra features' },
  { id: 8, title: 'Contact Info', description: 'Get your instant quote' },
  { id: 9, title: 'Your Quote', description: 'Instant pricing estimate' },
];

export const QuotePreview = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
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
  });


  const updateFormData = (field: string, value: string) => {
    console.log('Form data updated:', field, value); // Debug logging
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const typeText = (text: string, field: string) => {
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
      }, 80); // Typing speed
    });
  };

  const selectOption = (field: string, value: string) => {
    return new Promise<void>((resolve) => {
      updateFormData(field, value);
      setTimeout(resolve, 300);
    });
  };

  const startAutoDemo = async () => {
    setIsAutoPlaying(true);
    setIsTyping(true);
    
    // Reset form
    setCurrentStep(1);
    setFormData({
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
    });

    try {
      // Step 1: Project Type
      await new Promise(resolve => setTimeout(resolve, 1000));
      await selectOption('projectType', 're-roof');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(2);

      // Step 2: Stories
      await new Promise(resolve => setTimeout(resolve, 600));
      await selectOption('stories', '2');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(3);

      // Step 3: Roof Pitch
      await new Promise(resolve => setTimeout(resolve, 600));
      await selectOption('pitchType', 'estimate');
      await new Promise(resolve => setTimeout(resolve, 500));
      await selectOption('pitch', 'average');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(4);

      // Step 4: Roof Size
      await new Promise(resolve => setTimeout(resolve, 600));
      await selectOption('sizeType', 'house-sqft');
      await new Promise(resolve => setTimeout(resolve, 500));
      await selectOption('houseSize', '2000');
      await new Promise(resolve => setTimeout(resolve, 400));
      await selectOption('hasGarage', 'yes');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(5);

      // Step 5: Material
      await new Promise(resolve => setTimeout(resolve, 600));
      await selectOption('roofMaterial', 'asphalt-shingle');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(6);

      // Step 6: Complexity
      await new Promise(resolve => setTimeout(resolve, 600));
      await selectOption('complexity', 'standard');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(7);

      // Step 7: Additional Options
      await new Promise(resolve => setTimeout(resolve, 600));
      await typeText('2', 'skylights');
      await new Promise(resolve => setTimeout(resolve, 400));
      await typeText('1', 'chimneys');
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(8);

      // Step 8: Contact Info
      await new Promise(resolve => setTimeout(resolve, 600));
      await typeText('John Smith', 'name');
      await new Promise(resolve => setTimeout(resolve, 600));
      await typeText('john@example.com', 'email');
      await new Promise(resolve => setTimeout(resolve, 600));
      await typeText('(555) 123-4567', 'phone');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep(9);

      // Final quote step
      await new Promise(resolve => setTimeout(resolve, 800));
      
    } catch (error) {
      console.error('Animation error:', error);
    } finally {
      setIsTyping(false);
      setIsAutoPlaying(false);
    }
  };

  const nextStep = () => {
    console.log('Next step clicked, current:', currentStep); // Debug logging
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    console.log('Previous step clicked, current:', currentStep); // Debug logging
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetPreview = () => {
    setCurrentStep(1);
    setIsAutoPlaying(false);
    setIsTyping(false);
    setFormData({
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
    });
  };

  return (
    <Card className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-lg border-2 bg-gradient-to-br from-background via-background to-muted/20 transition-all hover:shadow-xl hover:scale-[1.01] duration-300 overflow-hidden">
      <CardHeader className="pb-4 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent truncate">
                Smart Roofing Quote
              </CardTitle>
              <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live Demo
                </div>
                <div className="text-xs text-muted-foreground hidden sm:inline">•</div>
                <div className="text-xs text-muted-foreground">from $174/mo</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-1 w-full sm:w-auto">
            <Button 
              size="sm" 
              variant="default" 
              onClick={startAutoDemo}
              disabled={isAutoPlaying}
              className="text-xs px-2 sm:px-3 py-1.5 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md flex-1 sm:flex-none"
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1 sm:mr-1.5" />
                  <span className="hidden sm:inline">Demo Running...</span>
                  <span className="sm:hidden">Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 mr-1 sm:mr-1.5 fill-current" />
                  <span className="hidden sm:inline">Watch Demo</span>
                  <span className="sm:hidden">Demo</span>
                </>
              )}
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={resetPreview}
              disabled={isAutoPlaying}
              className="text-xs px-2 sm:px-3 py-1.5 h-auto hover:bg-muted/50 flex-1 sm:flex-none"
            >
              <RotateCcw className="w-3 h-3 mr-1 sm:mr-1.5" />
              <span className="sm:hidden">Reset</span>
              <span className="hidden sm:inline">Reset</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/50 dark:border-blue-800/30">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-medium flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Experience how customers get instant, accurate roofing quotes
          </p>
          <div className="mt-2 text-xs text-blue-600 dark:text-blue-300">
            👆 Click options below or use the &quot;Watch Demo&quot; button above
          </div>
        </div>
        
        {/* Enhanced Progress Steps - Mobile Optimized */}
        <div className="mt-4 sm:mt-6 relative">
          {/* Mobile: Horizontal scroll for steps on small screens */}
          <div className="overflow-x-auto pb-2 sm:overflow-visible sm:pb-0">
            <div className="flex items-center justify-between min-w-max sm:min-w-0 gap-2 sm:gap-0 px-2 sm:px-0">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center relative z-10 min-w-[70px] sm:min-w-0">
                  <div className={cn(
                    'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg border-2',
                    currentStep === step.id 
                      ? 'bg-gradient-to-br from-primary to-primary/80 text-white border-primary scale-110 ring-2 sm:ring-4 ring-primary/20' 
                      : currentStep > step.id
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white border-green-500'
                      : 'bg-muted text-muted-foreground border-border hover:border-primary/50'
                  )}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5" />
                    ) : currentStep === step.id ? (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className={cn(
                    'text-xs mt-1 sm:mt-2 text-center font-medium transition-colors duration-200 max-w-[60px] sm:max-w-[70px] leading-tight',
                    currentStep === step.id ? 'text-primary' : 'text-muted-foreground'
                  )}>
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden text-[10px]">
                      {step.title.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress bar background - hidden on mobile due to scrolling */}
          <div className="absolute top-4 sm:top-5 left-6 right-6 sm:left-5 sm:right-5 h-0.5 bg-muted -z-0 hidden sm:block" />
          {/* Active progress bar */}
          <div 
            className="absolute top-4 sm:top-5 left-6 sm:left-5 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 -z-0 hidden sm:block"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        {/* Step 1: Project Type */}
        {currentStep === 1 && (
          <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-5 duration-300">
            <div className="text-center space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">{steps[0].title}</h3>
              <p className="text-sm text-muted-foreground px-2">{steps[0].description}</p>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
            </div>
            
            <RadioGroup 
              value={formData.projectType} 
              onValueChange={(value) => updateFormData('projectType', value)}
              disabled={isAutoPlaying}
              className="space-y-3 sm:space-y-4"
            >
              <div 
                className={cn(
                  "group flex items-start space-x-3 sm:space-x-4 space-y-0 rounded-xl border-2 p-3 sm:p-4 transition-all duration-200 cursor-pointer",
                  "hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:scale-[1.01] sm:hover:scale-[1.02]",
                  formData.projectType === "re-roof" && "border-primary bg-primary/10 shadow-md scale-[1.01] sm:scale-[1.02]",
                  isAutoPlaying && "animate-pulse"
                )}
                onClick={(e) => {
                  if (!isAutoPlaying) {
                    e.preventDefault();
                    updateFormData('projectType', 're-roof');
                  }
                }}
              >
                <RadioGroupItem value="re-roof" id="re-roof" className="mt-1 flex-shrink-0 pointer-events-none" />
                <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                  <Label htmlFor="re-roof" className="font-semibold flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-200 transition-colors">
                        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span>Re-Roof / Replace</span>
                    </div>
                    <div className="sm:ml-auto">
                      <div className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium inline-block">
                        Most Common
                      </div>
                    </div>
                  </Label>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Remove existing roof and construct new one. Includes labor costs for stripping and disposal.
                  </p>
                </div>
              </div>
              
              <div 
                className={cn(
                  "group flex items-start space-x-3 sm:space-x-4 space-y-0 rounded-xl border-2 p-3 sm:p-4 transition-all duration-200 cursor-pointer",
                  "hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:scale-[1.01] sm:hover:scale-[1.02]",
                  formData.projectType === "new-construction" && "border-primary bg-primary/10 shadow-md scale-[1.01] sm:scale-[1.02]",
                  isAutoPlaying && "animate-pulse"
                )}
                onClick={(e) => {
                  if (!isAutoPlaying) {
                    e.preventDefault();
                    updateFormData('projectType', 'new-construction');
                  }
                }}
              >
                <RadioGroupItem value="new-construction" id="new-construction" className="mt-1 flex-shrink-0 pointer-events-none" />
                <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                  <Label htmlFor="new-construction" className="font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    House New Construction
                  </Label>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    New build ready for roof installation. No removal costs.
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "group flex items-start space-x-3 sm:space-x-4 space-y-0 rounded-xl border-2 p-3 sm:p-4 opacity-60 cursor-not-allowed",
                isAutoPlaying && "animate-pulse"
              )}>
                <RadioGroupItem value="small-shed" id="small-shed" disabled className="mt-1 flex-shrink-0" />
                <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                  <Label htmlFor="small-shed" className="font-semibold flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100 text-gray-500">
                        <Warehouse className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span>Small Shed or Garage</span>
                    </div>
                    <div className="sm:ml-auto">
                      <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium inline-block">
                        Coming Soon
                      </div>
                    </div>
                  </Label>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Structures under 500sqft
                  </p>
                </div>
              </div>
            </RadioGroup>

            <Button 
              onClick={(e) => {
                console.log('Continue button clicked for step 1'); // Debug logging
                e.preventDefault();
                nextStep();
              }}
              className={cn(
                "w-full h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-200",
                "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80",
                "shadow-lg hover:shadow-xl disabled:opacity-50",
                !formData.projectType && !isAutoPlaying && "animate-pulse"
              )}
              size="lg"
              disabled={!formData.projectType || isAutoPlaying}
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Auto-selecting option...</span>
                  <span className="sm:hidden">Selecting...</span>
                </>
              ) : !formData.projectType ? (
                <>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Select a project type to continue</span>
                  <span className="sm:hidden">Select project type</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Continue to Home Stories</span>
                  <span className="sm:hidden">Continue</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Step 2: Home Stories */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[1].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[1].description}</p>
            </div>

            <RadioGroup 
              value={formData.stories} 
              onValueChange={(value) => updateFormData('stories', value)}
              disabled={isAutoPlaying}
              className="space-y-3"
            >
              <div className={cn("flex items-center space-x-3 space-y-0 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="1" id="1-story" />
                <Label htmlFor="1-story" className="flex-1 font-medium">
                  1 Story
                  <span className="block text-xs text-muted-foreground font-normal">Not including basement, loft or attic</span>
                </Label>
              </div>
              
              <div className={cn("flex items-center space-x-3 space-y-0 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="2" id="2-story" />
                <Label htmlFor="2-story" className="flex-1 font-medium">
                  2 Stories
                  <span className="block text-xs text-muted-foreground font-normal">Not including basement, loft or attic</span>
                </Label>
              </div>
              
              <div className={cn("flex items-center space-x-3 space-y-0 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="3" id="3-story" />
                <Label htmlFor="3-story" className="flex-1 font-medium">
                  3+ Stories
                  <span className="block text-xs text-muted-foreground font-normal">Not including basement, loft or attic</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={!formData.stories || isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Selecting...
                  </>
                ) : (
                  <>
                    Next: Roof Pitch <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Roof Pitch */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[2].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[2].description}</p>
            </div>

            <div className="space-y-3">
              <Select 
                value={formData.pitchType} 
                onValueChange={(value) => updateFormData('pitchType', value)}
                disabled={isAutoPlaying}
              >
                <SelectTrigger className={cn(isAutoPlaying && "animate-pulse")}>
                  <SelectValue placeholder="Select measurement type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="estimate">Estimate Roof Pitch</SelectItem>
                  <SelectItem value="exact">Exact Roof Pitch</SelectItem>
                </SelectContent>
              </Select>

              {formData.pitchType === 'estimate' && (
                <RadioGroup 
                  value={formData.pitch} 
                  onValueChange={(value) => updateFormData('pitch', value)}
                  disabled={isAutoPlaying}
                  className="space-y-2"
                >
                  <div className={cn("flex items-center space-x-3 rounded-lg border p-2 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                    <RadioGroupItem value="slight" id="slight" />
                    <Label htmlFor="slight" className="flex-1 text-sm">
                      Slight - Can easily be walked (4/12 pitch)
                    </Label>
                  </div>
                  <div className={cn("flex items-center space-x-3 rounded-lg border p-2 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                    <RadioGroupItem value="average" id="average" />
                    <Label htmlFor="average" className="flex-1 text-sm">
                      Average - A little steep but walkable (6/12 pitch)
                    </Label>
                  </div>
                  <div className={cn("flex items-center space-x-3 rounded-lg border p-2 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                    <RadioGroupItem value="steep" id="steep" />
                    <Label htmlFor="steep" className="flex-1 text-sm">
                      Steep - Challenging to walk (8/12 pitch)
                    </Label>
                  </div>
                  <div className={cn("flex items-center space-x-3 rounded-lg border p-2 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                    <RadioGroupItem value="very-steep" id="very-steep" />
                    <Label htmlFor="very-steep" className="flex-1 text-sm">
                      Very Steep - Nearly impossible to walk (10+/12)
                    </Label>
                  </div>
                </RadioGroup>
              )}

              {formData.pitchType === 'exact' && (
                <Select 
                  value={formData.pitch} 
                  onValueChange={(value) => updateFormData('pitch', value)}
                  disabled={isAutoPlaying}
                >
                  <SelectTrigger className={cn(isAutoPlaying && "animate-pulse")}>
                    <SelectValue placeholder="Select exact pitch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4/12">4/12 - 18.43°</SelectItem>
                    <SelectItem value="6/12">6/12 - 26.57°</SelectItem>
                    <SelectItem value="8/12">8/12 - 33.69°</SelectItem>
                    <SelectItem value="10/12">10/12 - 39.81°</SelectItem>
                    <SelectItem value="12/12">12/12 - 45°</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={!formData.pitch || isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Selecting...
                  </>
                ) : (
                  <>
                    Next: Roof Size <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Roof Size */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[3].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[3].description}</p>
            </div>

            <div className="space-y-3">
              <Select 
                value={formData.sizeType} 
                onValueChange={(value) => updateFormData('sizeType', value)}
                disabled={isAutoPlaying}
              >
                <SelectTrigger className={cn(isAutoPlaying && "animate-pulse")}>
                  <SelectValue placeholder="Select measurement method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exact">Exact Roof Size (most accurate)</SelectItem>
                  <SelectItem value="footprint">Home Footprint (mostly accurate)</SelectItem>
                  <SelectItem value="house-sqft">Estimate House Square Footage</SelectItem>
                </SelectContent>
              </Select>

              {formData.sizeType === 'exact' && (
                <div>
                  <Label className="mb-1 block text-sm text-muted-foreground">
                    Roof Square Footage
                  </Label>
                  <Input 
                    value={formData.roofSize}
                    onChange={(e) => updateFormData('roofSize', e.target.value)}
                    placeholder="2200"
                    disabled={isAutoPlaying}
                    className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                  />
                </div>
              )}

              {formData.sizeType === 'footprint' && (
                <div>
                  <Label className="mb-1 block text-sm text-muted-foreground">
                    Home Footprint (sq ft)
                  </Label>
                  <Input 
                    value={formData.homeFootprint}
                    onChange={(e) => updateFormData('homeFootprint', e.target.value)}
                    placeholder="1800"
                    disabled={isAutoPlaying}
                    className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                  />
                </div>
              )}

              {formData.sizeType === 'house-sqft' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['750', '1000', '1250', '1500', '1750', '2000', '2500', '3000', '3500'].map((size) => (
                      <Button
                        key={size}
                        variant={formData.houseSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => updateFormData('houseSize', size)}
                        disabled={isAutoPlaying}
                        className={cn("text-xs h-8 sm:h-auto", isAutoPlaying && "animate-pulse")}
                      >
                        {size} ft²
                      </Button>
                    ))}
                  </div>
                  
                  <div>
                    <Label className="mb-2 block text-sm text-muted-foreground">
                      Do you have a garage?
                    </Label>
                    <RadioGroup 
                      value={formData.hasGarage} 
                      onValueChange={(value) => updateFormData('hasGarage', value)}
                      disabled={isAutoPlaying}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no-garage" />
                        <Label htmlFor="no-garage">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes-garage" />
                        <Label htmlFor="yes-garage">Yes</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={(!formData.roofSize && !formData.homeFootprint && !formData.houseSize) || isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Selecting...
                  </>
                ) : (
                  <>
                    Next: Material <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Material */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[4].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[4].description}</p>
            </div>

            <RadioGroup 
              value={formData.roofMaterial} 
              onValueChange={(value) => updateFormData('roofMaterial', value)}
              disabled={isAutoPlaying}
              className="space-y-3"
            >
              <div className={cn("flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="asphalt-shingle" id="asphalt" />
                <Label htmlFor="asphalt" className="flex-1 font-medium">
                  Asphalt Shingle Roof
                  <span className="block text-xs text-muted-foreground font-normal">Most Popular</span>
                </Label>
              </div>
              
              <div className={cn("flex items-center space-x-3 rounded-lg border p-3 opacity-50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="metal" id="metal" disabled />
                <Label htmlFor="metal" className="flex-1 font-medium">
                  Metal Roof
                  <span className="block text-xs text-muted-foreground font-normal">Coming soon...</span>
                </Label>
              </div>
              
              <div className={cn("flex items-center space-x-3 rounded-lg border p-3 opacity-50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="tile" id="tile" disabled />
                <Label htmlFor="tile" className="flex-1 font-medium">
                  Tile Roof
                  <span className="block text-xs text-muted-foreground font-normal">Coming soon...</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={!formData.roofMaterial || isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Selecting...
                  </>
                ) : (
                  <>
                    Next: Complexity <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Complexity */}
        {currentStep === 6 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[5].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[5].description}</p>
            </div>

            <RadioGroup 
              value={formData.complexity} 
              onValueChange={(value) => updateFormData('complexity', value)}
              disabled={isAutoPlaying}
              className="space-y-3"
            >
              <div className={cn("flex items-start space-x-3 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="basic" id="basic" />
                <Label htmlFor="basic" className="flex-1 font-medium">
                  Basic Roof
                  <span className="block text-xs text-muted-foreground font-normal">Simple design, 2-3 sides, no features</span>
                </Label>
              </div>
              
              <div className={cn("flex items-start space-x-3 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="flex-1 font-medium">
                  Standard Roof
                  <span className="block text-xs text-muted-foreground font-normal">May have dormers, simple features, up to 6 sides</span>
                </Label>
              </div>
              
              <div className={cn("flex items-start space-x-3 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced" className="flex-1 font-medium">
                  Advanced Roof
                  <span className="block text-xs text-muted-foreground font-normal">Complex design, multiple levels, different slopes</span>
                </Label>
              </div>
              
              <div className={cn("flex items-start space-x-3 rounded-lg border p-3 hover:bg-muted/50", isAutoPlaying && "animate-pulse")}>
                <RadioGroupItem value="complex" id="complex" />
                <Label htmlFor="complex" className="flex-1 font-medium">
                  Complex Roof
                  <span className="block text-xs text-muted-foreground font-normal">Challenging design, cut-up sections, turrets, multiple roof types</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={!formData.complexity || isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Selecting...
                  </>
                ) : (
                  <>
                    Next: Options <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 7: Additional Options */}
        {currentStep === 7 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <h3 className="font-semibold">{steps[6].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[6].description}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="mb-1 block text-sm text-muted-foreground">
                  How many skylights need replacing?
                </Label>
                <Input 
                  type="number"
                  value={formData.skylights}
                  onChange={(e) => updateFormData('skylights', e.target.value)}
                  placeholder="0"
                  disabled={isAutoPlaying}
                  className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                />
                <p className="text-xs text-muted-foreground mt-1">Skylights typically last 15-25 years</p>
              </div>
              
              <div>
                <Label className="mb-1 block text-sm text-muted-foreground">
                  How many chimneys?
                </Label>
                <Input 
                  type="number"
                  value={formData.chimneys}
                  onChange={(e) => updateFormData('chimneys', e.target.value)}
                  placeholder="1"
                  disabled={isAutoPlaying}
                  className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                />
                <p className="text-xs text-muted-foreground mt-1">Most common source of leaks</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1" 
                size="lg"
                disabled={isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 border border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Generating quote...
                  </>
                ) : (
                  <>
                    Get My Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 8: Contact Info */}
        {currentStep === 8 && (
          <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-5 duration-300">
            <div className="text-center space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">{steps[7].title}</h3>
              <p className="text-sm text-muted-foreground px-2">{steps[7].description}</p>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="mb-1 block text-sm text-muted-foreground">
                  Full Name *
                </Label>
                <Input 
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="John Smith"
                  disabled={isAutoPlaying}
                  className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                />
              </div>
              
              <div>
                <Label className="mb-1 block text-sm text-muted-foreground">
                  Email Address *
                </Label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="john@example.com"
                  disabled={isAutoPlaying}
                  className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                />
              </div>
              
              <div>
                <Label className="mb-1 block text-sm text-muted-foreground">
                  Phone Number *
                </Label>
                <Input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  disabled={isAutoPlaying}
                  className={cn(isAutoPlaying && isTyping && "animate-pulse")}
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/30">
              <p className="text-sm text-green-800 dark:text-green-200 font-medium flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Your information is secure and will only be used to send your quote
              </p>
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="flex-1 h-10 sm:h-12 font-semibold"
                disabled={isAutoPlaying}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="flex-1 h-10 sm:h-12 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl"
                disabled={(!formData.name || !formData.email || !formData.phone) && !isAutoPlaying}
              >
                {isAutoPlaying ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    <span className="hidden sm:inline">Generating quote...</span>
                    <span className="sm:hidden">Generating...</span>
                  </>
                ) : (!formData.name || !formData.email || !formData.phone) ? (
                  <>
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Fill required fields</span>
                    <span className="sm:hidden">Complete form</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Get My Quote</span>
                    <span className="sm:hidden">Get Quote</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 9: Final Quote */}
        {currentStep === 9 && (
          <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-5 duration-500">
            {/* Success Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  {formData.name ? `${formData.name.split(' ')[0]}'s` : 'Your'} Instant Quote is Ready!
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 px-2">
                  Professional estimate {formData.email && `sent to ${formData.email}`}
                </p>
              </div>
            </div>

            {/* Quote Summary Card */}
            <div className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 sm:p-6 shadow-lg">
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Project:</span>
                      <span className="capitalize text-right">{formData.projectType?.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Stories:</span>
                      <span>{formData.stories} story</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Size:</span>
                      <span>{formData.houseSize || formData.homeFootprint || formData.roofSize} sq ft</span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:border-l sm:border-green-200 sm:pl-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Material:</span>
                      <span className="capitalize text-right">{formData.roofMaterial?.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Complexity:</span>
                      <span className="capitalize">{formData.complexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Extras:</span>
                      <span className="text-right">{formData.skylights || 0} skylights, {formData.chimneys || 0} chimneys</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-green-200 pt-3 sm:pt-4">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-green-700 font-medium">Total Project Cost</div>
                    <div className="text-2xl sm:text-4xl font-bold text-green-600">$14,200 – $18,400</div>
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                      <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
                      Or as low as <strong>$174/month</strong> with financing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <h4 className="font-semibold text-sm sm:text-base">Available Packages:</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 sm:p-3 bg-muted/30 rounded-lg border">
                  <div className="min-w-0 flex-1">
                    <span className="font-medium text-green-700 text-sm sm:text-base">Good</span>
                    <p className="text-xs text-muted-foreground">Standard materials & warranty</p>
                  </div>
                  <span className="font-bold text-base sm:text-lg ml-2">$14,200</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200">
                  <div className="min-w-0 flex-1">
                    <span className="font-medium text-orange-700 flex items-center gap-1 text-sm sm:text-base">
                      Better <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                    <p className="text-xs text-muted-foreground">Premium materials & extended warranty</p>
                  </div>
                  <span className="font-bold text-base sm:text-lg ml-2">$16,300</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/30 shadow-md">
                  <div className="min-w-0 flex-1">
                    <span className="font-medium text-primary flex items-center gap-1 text-sm sm:text-base">
                      Best <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    </span>
                    <p className="text-xs text-muted-foreground">Premium materials + lifetime warranty</p>
                  </div>
                  <span className="font-bold text-lg sm:text-xl text-primary ml-2">$18,400</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={resetPreview} 
                variant="outline" 
                className="h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-muted/50"
                disabled={isAutoPlaying}
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">New Quote</span>
                <span className="sm:hidden">New</span>
              </Button>
              <Button 
                className="h-10 sm:h-12 text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl" 
                disabled={isAutoPlaying}
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Schedule Estimate</span>
                <span className="sm:hidden">Schedule</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};