# Quote Widget Architecture

This document describes the modular architecture of the Quote Widget system, refactored from a monolithic 1680+ line component into a clean, maintainable structure following Next.js best practices.

## Architecture Overview

```
components/quote-widget/
├── QuoteWidget.tsx              # Main container component
├── QuoteHeader.tsx              # Header with demo controls
├── ProgressSteps.tsx            # Progress indicator
├── steps/                       # Individual step components
│   ├── ProjectTypeStep.tsx      # Step 1: Project type selection
│   ├── HomeStoriesStep.tsx      # Step 2: Number of stories
│   ├── RoofPitchStep.tsx        # Step 3: Roof pitch selection
│   ├── RoofSizeStep.tsx         # Step 4: Size measurement
│   ├── MaterialStep.tsx         # Step 5: Material selection
│   ├── ComplexityStep.tsx       # Step 6: Complexity level
│   ├── AdditionalOptionsStep.tsx # Step 7: Extra features
│   ├── ContactInfoStep.tsx      # Step 8: Contact information
│   └── FinalQuoteStep.tsx       # Step 9: Quote results
├── ui/                          # Reusable UI components
│   ├── StepHeader.tsx           # Step title and description
│   ├── RadioOption.tsx          # Enhanced radio button options
│   ├── ContinueButton.tsx       # Primary action button
│   └── NavigationButtons.tsx    # Back/Next navigation
├── hooks/                       # Custom hooks for state management
│   ├── useQuoteForm.ts          # Form state management
│   ├── useStepNavigation.ts     # Step navigation logic
│   └── useAutoDemo.ts           # Auto-demo functionality
└── index.ts                     # Public API exports
```

## Core Principles

### 1. **Separation of Concerns**
- **UI Components**: Pure presentation components
- **Business Logic**: Extracted into custom hooks
- **State Management**: Centralized form and navigation state
- **Type Safety**: Comprehensive TypeScript interfaces

### 2. **Component Composition**
- Each step is a self-contained component
- Shared UI patterns are extracted into reusable components
- Props are passed down through a consistent interface

### 3. **Custom Hooks**
- `useQuoteForm`: Manages form data and validation
- `useStepNavigation`: Handles step progression and mobile scrolling
- `useAutoDemo`: Controls automated demonstration flow

### 4. **Type Safety**
All components use strict TypeScript interfaces:

```typescript
interface StepProps {
  formData: QuoteFormData;
  updateFormData: (field: keyof QuoteFormData, value: string) => void;
  isAutoPlaying: boolean;
  isTyping: boolean;
  onNext: () => void;
  onPrevious?: () => void;
  onReset?: () => void;
}
```

## Component Responsibilities

### QuoteWidget (Main Container)
- Orchestrates all hooks and state
- Renders current step based on navigation state
- Provides consistent props to all steps

### Step Components
Each step component is responsible for:
- Rendering its specific form inputs
- Handling local interactions
- Calling parent handlers for state updates
- Managing its own validation logic

### UI Components
Reusable components that provide:
- Consistent styling and behavior
- Enhanced accessibility
- Mobile-responsive design
- Animation and interaction states

## Benefits of This Architecture

### 🎯 **Maintainability**
- Single responsibility principle
- Easy to locate and modify specific features
- Clear separation between UI and business logic

### 🔧 **Extensibility**
- Add new steps by creating new step components
- Extend functionality through custom hooks
- Reuse UI components across the application

### 🧪 **Testability**
- Each component can be tested in isolation
- Hooks can be unit tested separately
- Mock dependencies easily for testing

### 📱 **Performance**
- Smaller component bundles
- Better tree shaking
- Lazy loading opportunities

### 🤝 **Developer Experience**
- Clear file structure and naming
- TypeScript intellisense and error checking
- Consistent patterns across components

## Usage

```tsx
import { QuoteWidget } from '@/components/quote-widget';

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <QuoteWidget />
    </div>
  );
}
```

## Migration Notes

The original `QuotePreview` component is maintained for backward compatibility:

```tsx
// Still works - backward compatible
import { QuotePreview } from '@/components/QuotePreview';

// New recommended usage
import { QuoteWidget } from '@/components/quote-widget';
```

## Future Improvements

### Potential Enhancements
1. **Form Validation**: Add comprehensive form validation with error states
2. **Data Persistence**: Save progress to localStorage or server
3. **Analytics**: Track user interactions and drop-off points
4. **A/B Testing**: Support multiple form variations
5. **Internationalization**: Multi-language support
6. **Animation**: Enhanced step transitions and micro-interactions

### Performance Optimizations
- Implement code splitting for step components
- Add React.memo for performance-critical components
- Optimize re-renders with useMemo and useCallback

## Contributing

When adding new features or steps:

1. Create the step component in `steps/`
2. Add any reusable UI components to `ui/`
3. Update types in `types/quote.ts`
4. Add to the main QuoteWidget switch statement
5. Export from `index.ts`
6. Update this documentation

This architecture provides a solid foundation for the quote system that's both maintainable and scalable.