import Hero from './Hero.jsx'
import {
  About,
  Skills,
  Experience,
  Education,
  Research,
  Publications,
  Projects,
  Contact,
  Certifications,
} from './Sections.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

// Maps a section key to its component + the props it needs from data.
const SECTION_REGISTRY = {
  about: (data) => (
    <About title={data.labels.sectionTitles.about} text={data.about} />
  ),
  skills: (data) => (
    <Skills title={data.labels.sectionTitles.skills} items={data.skills} />
  ),
  experience: (data) => (
    <Experience
      title={data.labels.sectionTitles.experience}
      items={data.experience}
    />
  ),
  education: (data) => (
    <Education
      title={data.labels.sectionTitles.education}
      items={data.education}
    />
  ),
  research: (data) => (
    <Research
      title={data.labels.sectionTitles.research}
      items={data.research}
    />
  ),
  publications: (data) => (
    <Publications
      title={data.labels.sectionTitles.publications}
      items={data.publications}
    />
  ),
  projects: (data) => (
    <Projects
      title={data.labels.sectionTitles.projects}
      items={data.projects}
    />
  ),
  contact: (data) => (
    <Contact
      title={data.labels.sectionTitles.contact}
      labels={data.labels}
      profile={data.profile}
    />
  ),
  certifications: (data) => (
    <Certifications
      title={data.labels.sectionTitles.certifications}
      labels={data.labels}
      items={data.certifications}
    />
  ),
}

export default function ResumeView({ data, view }) {
  usePageMeta(data, view)

  const order = data.viewOrder[view] || Object.keys(SECTION_REGISTRY)
  const enabledOrdered = order.filter((key) => data.sections[key])

  // Resolve public-asset paths against Vite's base (works on GitHub Pages project sites too).
  const profile = {
    ...data.profile,
    photo: import.meta.env.BASE_URL + data.profile.photo,
    cv: import.meta.env.BASE_URL + data.profile.cv,
  }

  return (
    <>
      <Hero profile={profile} labels={data.labels} />
      <main>
        {enabledOrdered.map((key) => (
          <div key={key}>{SECTION_REGISTRY[key](data)}</div>
        ))}
      </main>
    </>
  )
}
