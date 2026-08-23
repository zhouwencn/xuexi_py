import source from '../../../content/advanced_catalog.json'
import type { LearningLab, PracticeItem, Skill } from '../types/course'
import { lessons } from './course'

type SkillDefinition = Omit<Skill, 'lessonIds'>

const skillDefinitions = source.skills as unknown as SkillDefinition[]

export const advancedSkills: Skill[] = skillDefinitions.map((skill) => ({
  ...skill,
  lessonIds: lessons.filter((lesson) => lesson.stageId === skill.stageId).map((lesson) => lesson.id),
}))

export const labs = source.labs as unknown as LearningLab[]
export const advancedPracticeChallenges = source.practiceChallenges as unknown as PracticeItem[]
