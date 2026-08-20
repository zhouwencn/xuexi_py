import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CourseDataProvider } from './hooks/useCourseData'
import { LearningProgressProvider } from './hooks/useLearningProgress'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CourseDataProvider>
        <LearningProgressProvider>
          <App />
        </LearningProgressProvider>
      </CourseDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
