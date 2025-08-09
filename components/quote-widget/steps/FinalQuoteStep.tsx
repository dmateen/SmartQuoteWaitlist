import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Award, Calculator, RotateCcw, Calendar } from 'lucide-react';
import { StepProps } from '@/types/quote';
import { QUOTE_PACKAGES } from '@/lib/constants/quote';

export const FinalQuoteStep: React.FC<StepProps> = ({
  formData,
  isAutoPlaying,
  onReset,
}) => {
  return (
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
                <span className="capitalize text-right">
                  {formData.projectType?.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Stories:</span>
                <span>{formData.stories} story</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Size:</span>
                <span>
                  {formData.houseSize || formData.homeFootprint || formData.roofSize} sq ft
                </span>
              </div>
            </div>
            <div className="space-y-2 sm:border-l sm:border-green-200 sm:pl-4">
              <div className="flex justify-between">
                <span className="font-medium">Material:</span>
                <span className="capitalize text-right">
                  {formData.roofMaterial?.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Complexity:</span>
                <span className="capitalize">{formData.complexity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Extras:</span>
                <span className="text-right">
                  {formData.skylights || 0} skylights, {formData.chimneys || 0} chimneys
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-green-200 pt-3 sm:pt-4">
            <div className="text-center space-y-2">
              <div className="text-sm text-green-700 font-medium">Total Project Cost</div>
              <div className="text-2xl sm:text-4xl font-bold text-green-600">
                $14,200 – $18,400
              </div>
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
          {QUOTE_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex justify-between items-center p-2 sm:p-3 rounded-lg border ${
                index === 0
                  ? 'bg-muted/30'
                  : index === 1
                  ? 'bg-orange-50 dark:bg-orange-950/20 border-orange-200'
                  : 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 shadow-md'
              }`}
            >
              <div className="min-w-0 flex-1">
                <span
                  className={`font-medium flex items-center gap-1 text-sm sm:text-base ${
                    index === 0
                      ? 'text-green-700'
                      : index === 1
                      ? 'text-orange-700'
                      : 'text-primary'
                  }`}
                >
                  {pkg.name}{' '}
                  {index === 1 && <Award className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {index === 2 && <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />}
                </span>
                <p className="text-xs text-muted-foreground">{pkg.description}</p>
              </div>
              <span
                className={`font-bold ml-2 ${
                  index === 2 ? 'text-lg sm:text-xl text-primary' : 'text-base sm:text-lg'
                }`}
              >
                {pkg.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={onReset}
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
  );
};