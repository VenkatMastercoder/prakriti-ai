# Prakriti AI

A modern web application for Ayurvedic constitution (Prakriti) assessment, built with Next.js 14 and TailwindCSS.

## Overview

This application helps users discover their Ayurvedic body constitution (Prakriti) through a comprehensive assessment. It provides personalized recommendations for diet, lifestyle, exercise, and herbs based on their unique dosha combination.

### Features

- 🎯 Interactive Prakriti Assessment
- 👤 User Information Collection
- 📊 Detailed Results Analysis
- 📋 Comprehensive PDF Reports
- 💫 Modern UI with Animations
- 📱 Fully Responsive Design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **PDF Generation:** @react-pdf/renderer
- **Type Safety:** TypeScript
- **State Management:** React Hooks
- **Form Validation:** Zod

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd prakriti-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Application Structure

- `/app` - Next.js app router pages and layouts
  - `/assessment` - Assessment flow components
    - `/user-info` - User information collection
    - `/questions` - Assessment questions
    - `/results` - Results display
    - `/report` - Detailed report generation
- `/components` - Reusable React components
- `/styles` - Global styles and Tailwind configuration

## Key Features

### Assessment Flow
1. **User Information Collection**
   - Personal details collection
   - Data validation
   - Secure storage

2. **Interactive Assessment**
   - Matrix-style question format
   - Progress tracking
   - Real-time validation

3. **Results Analysis**
   - Dosha percentage calculation
   - Visual representation
   - Detailed constitution breakdown

4. **Personalized Report**
   - PDF report generation
   - Customized recommendations
   - Lifestyle guidelines

## Development

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on traditional Ayurvedic principles
- Modern interpretation of Prakriti assessment
- Designed for accessibility and ease of use
