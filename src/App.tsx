import { useEffect, useMemo, useState } from 'react'
import { apps, type AppCategory } from './data/apps'
import './App.css'

const categories: Array<'All' | AppCategory> = [
  'All',
  'Finance',
  'Education',
  'Tools',
  'Productivity',
  'Other',
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState<'All' | AppCategory>('All')

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)

    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light',
    )
  }, [darkMode])

  const filteredApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return apps.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.technologies.some((technology) =>
          technology.toLowerCase().includes(query),
        )

      const matchesCategory =
        selectedCategory === 'All' ||
        app.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="/">
            <span className="brand-logo">A</span>

            <div>
              <strong>Anton Apps</strong>
              <span>Personal projects</span>
            </div>
          </a>

          <button
            className="theme-button"
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Αλλαγή θέματος"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero">

          <h1>Οι εφαρμογές μου σε ένα μέρος</h1>

          <p className="hero-text">
            Μικρά εργαλεία, εκπαιδευτικά projects και εφαρμογές
            που έχω δημιουργήσει.
          </p>

          <p className="app-count">
            {apps.length}{' '}
            {apps.length === 1 ? 'εφαρμογή' : 'εφαρμογές'}
          </p>
        </section>

        <section className="controls">
          <input
            type="search"
            placeholder="Αναζήτηση εφαρμογής ή τεχνολογίας..."
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
          />

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="apps-grid">
          {filteredApps.map((app) => (
            <article className="app-card" key={app.id}>
              <div className="card-top">
                <div className="app-icon">
                  {app.icon}
                </div>

                <span
                  className={`status status-${app.status.toLowerCase()}`}
                >
                  {app.status}
                </span>
              </div>

              <div className="category">
                {app.category}
              </div>

              <h2>{app.name}</h2>

              <p className="description">
                {app.description}
              </p>

              <div className="technologies">
                {app.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {app.url !== '#' ? (
                <a
                  className="open-button"
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Άνοιγμα εφαρμογής →
                </a>
              ) : (
                <span className="unavailable">
                  Δεν υπάρχει ακόμα δημόσιο URL
                </span>
              )}
            </article>
          ))}
        </section>

        {filteredApps.length === 0 && (
          <div className="empty-state">
            <h2>Δεν βρέθηκαν εφαρμογές</h2>
            <p>
              Δοκίμασε διαφορετική αναζήτηση ή κατηγορία.
            </p>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-inner">
          <span>Anton Apps</span>
          <span>Personal development projects</span>
        </div>
      </footer>
    </>
  )
}

export default App