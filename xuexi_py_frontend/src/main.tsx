import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { CourseDataProvider } from './hooks/useCourseData'
import { LearningProgressProvider } from './hooks/useLearningProgress'
import { TooltipProvider } from './components/ui/Tooltip'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <TooltipProvider delayDuration={300}>
        <CourseDataProvider>
          <LearningProgressProvider>
            <App />
          </LearningProgressProvider>
        </CourseDataProvider>
      </TooltipProvider>
    </HashRouter>
  </StrictMode>,
)
