# Intern Onboarding

A modern, responsive React application for managing internship onboarding with a 3-step wizard and comprehensive dashboard.

![intern_onboarding_dashboard]()

## Features

### Onboarding Wizard
- **Step 1**: Personal Information (Name, Email)
- **Step 2**: Business Information (Company Name, Industry, Company Size)
- **Step 3**: Preferences (Theme Selection, Layout Preference)

### Dashboard
- **User Profile Display**: Shows all collected onboarding information
- **Metrics Cards**: Team Members, Active Projects, Notifications
- **Interactive Chart**: Weekly project activity visualization
- **Theme Support**: Light and dark mode based on user preference
- **Responsive Design**: Mobile-first approach with breakpoints

### Technical Features
- Form validation with real-time error feedback
- Progress indicator with step completion status
- Local storage persistence for user data
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- TypeScript for type safety
- Modern React patterns with hooks

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Data Persistence**: localStorage

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: System fonts (Tailwind default)
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Line Heights**: 120% for headings, 150% for body text

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern_onboarding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── OnboardingWizard.tsx    # Main wizard container
│   ├── ProgressBar.tsx         # Step progress indicator
│   ├── Dashboard.tsx           # Dashboard with metrics & chart
│   └── steps/
│       ├── Step1.tsx          # Personal info form
│       ├── Step2.tsx          # Business info form
│       └── Step3.tsx          # Preferences form
├── utils/
│   └── validation.ts          # Form validation functions
├── App.tsx                    # Main app with routing
├── main.tsx                   # React app entry point
└── index.css                  # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### OnboardingWizard
- Manages the 3-step flow
- Handles form state and validation
- Persists data to localStorage
- Navigation between steps

### ProgressBar
- Visual step indicator
- Shows completion status
- Animated progress bar

### Dashboard
- Displays user information
- Shows metrics in card layout
- Interactive charts with Recharts
- Theme-aware styling

### Form Steps
- **Step1**: Personal information collection
- **Step2**: Business details with dropdowns
- **Step3**: Preference selection with visual options

## User Flow

1. **Landing**: User arrives at `/` and redirects to `/onboarding`
2. **Step 1**: Enter personal information (name, email)
3. **Step 2**: Provide business details (company, industry, size)
4. **Step 3**: Set preferences (theme, layout)
5. **Submission**: Data saved to localStorage, redirect to `/dashboard`
6. **Dashboard**: View personalized dashboard with user data

## Data Persistence

- User data is stored in localStorage as JSON
- Keys used:
  - `onboardingData`: Complete form data
  - `onboardingCompleted`: Completion flag
- Data persists across browser sessions
- Dashboard checks completion status on load

## Styling Approach

- **Utility-first**: Tailwind CSS for rapid development
- **Component-based**: Reusable style patterns
- **Responsive**: Mobile-first breakpoints
- **Animations**: Smooth transitions for better UX
- **Theme Support**: Light/dark mode compatibility

## Form Validation

- **Real-time validation**: Errors shown as user types
- **Required fields**: All form fields are validated
- **Email format**: Proper email validation
- **Visual feedback**: Error states with red borders
- **User-friendly messages**: Clear error descriptions

## Charts & Data Visualization

- **Library**: Recharts for React-friendly charts
- **Chart Type**: Bar chart for weekly activity
- **Responsive**: Charts adapt to container size
- **Theme-aware**: Colors match selected theme
- **Interactive**: Tooltips show detailed data

## Performance Considerations

- **Code Splitting**: React.lazy for route-based splitting
- **Optimized Images**: Efficient asset loading
- **Minimal Bundle**: Tree-shaking with Vite
- **Local Storage**: Client-side data persistence

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](./LICENSE).

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ for internship sprint challenges