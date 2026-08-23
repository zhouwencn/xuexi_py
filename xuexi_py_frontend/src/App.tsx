import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LessonPage } from './pages/LessonPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { PracticePage } from './pages/PracticePage'
import { PlaygroundPage } from './pages/PlaygroundPage'
import { MistakesPage } from './pages/MistakesPage'
import { ProgressPage } from './pages/ProgressPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { ExpertPage } from './pages/ExpertPage'
import { LabDetailPage } from './pages/LabDetailPage'
import { LabsPage } from './pages/LabsPage'
import { AccountPage } from './pages/AccountPage'
import { DiagnosticPage } from './pages/DiagnosticPage'
import { EnvironmentPage } from './pages/EnvironmentPage'
import { ReviewPage } from './pages/ReviewPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/mistakes" element={<MistakesPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="/labs" element={<LabsPage />} />
      <Route path="/labs/:labId" element={<LabDetailPage />} />
      <Route path="/expert" element={<ExpertPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/diagnostic" element={<DiagnosticPage />} />
      <Route path="/environment" element={<EnvironmentPage />} />
      <Route path="/learn/:lessonId" element={<LessonPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
