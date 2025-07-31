# iTERRA Wellness Application

## Testing Setup

This application now includes a comprehensive testing framework using Vitest and React Testing Library.

### Running Tests

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- `src/tests/setup.ts` - Test configuration and mocks
- `src/tests/components/` - Component tests
- `src/tests/lib/` - Library/utility tests
- `src/tests/contexts/` - Context tests
- `src/tests/integration/` - Integration tests
- `src/tests/utils/` - Test utilities and helpers

### Features Tested

1. **Wellness Assistant** - Chat functionality and API integration
2. **Intake System** - Form validation and submission
3. **Product Catalog** - Product display and filtering
4. **API Integrations** - FamousAI and dōTERRA integrations
5. **Authentication** - Auth context and user management
6. **App Integration** - Full application rendering

### Mock Data

The test setup includes comprehensive mocks for:
- Supabase database operations
- API integrations (FamousAI, dōTERRA)
- Authentication context
- Environment variables

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Architecture

The application uses:
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui for components
- Supabase for backend
- React Router for navigation
- Vitest for testing