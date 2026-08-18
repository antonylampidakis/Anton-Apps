export type AppStatus = 'Live' | 'Development' | 'Private'

export type AppCategory =
  | 'Finance'
  | 'Education'
  | 'Tools'
  | 'Productivity'
  | 'Other'

export interface PersonalApp {
  id: string
  name: string
  description: string
  category: AppCategory
  status: AppStatus
  url: string
  technologies: string[]
  icon: string
}

export const apps: PersonalApp[] = [
  {
    id: 'money-manager',
    name: 'MoneyManager',
    description: 'Εφαρμογή διαχείρισης προσωπικών οικονομικών.',
    category: 'Finance',
    status: 'Live',
    url: 'https://money.antonylampidakis.com',
    technologies: ['React', 'TypeScript', 'Supabase'],
    icon: '€',
  },
  {
    id: 'my-studies-plan',
    name: 'myStudiesPlan',
    description: 'Εφαρμογή οργάνωσης και παρακολούθησης σπουδών.',
    category: 'Education',
    status: 'Live',
    url: 'https://antonylampidakis.github.io/myStudiesPlanA/',
    technologies: ['React', 'TypeScript', 'Supabase'],
    icon: '🎓',
  },
  {
    id: 'dapaxotoday',
    name: 'DapaxoToday',
    description: 'Εφαρμογή παρακολούθησης ημερισιων βαρδιων .',
    category: 'Tools',
    status: 'Live',
    url: 'https://dapaxotoday.antonylampidakis.com/',
    technologies: ['React', 'TypeScript', 'Supabase'],
    icon: '🚒',
  },
  {
    id: 'TasksNotes',
    name: 'Tasks & Notes',
    description: 'Εφαρμογή για  Tasks & Notes .',
    category: 'Tools',
    status: 'Live',
    url: 'https://tasks.antonylampidakis.com/',
    technologies: ['React', 'TypeScript', 'Supabase'],
    icon: '📒',
  },
  {
    id: 'birthday&gifts',
    name: 'birthdays-gifts-app',
    description: 'Εφαρμογή για  birthdays-gifts-app .',
    category: 'Tools',
    status: 'Live',
    url: 'https://antonylampidakis.github.io/birthdays-gifts-app/',
    technologies: ['React', 'TypeScript', 'Supabase'],
    icon: '🎉',
  },
]
