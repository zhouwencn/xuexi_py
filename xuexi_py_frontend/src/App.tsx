import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LessonPage } from './pages/LessonPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { PracticePage } from './pages/PracticePage'
import { PlaygroundPage } from './pages/PlaygroundPage'
import { MistakesPage } from './pages/MistakesPage'
import { ProgressPage } from './pages/ProgressPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/mistakes" element={<MistakesPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/learn/:lessonId" element={<LessonPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
