export function About({ title, text }) {
  return (
    <section id="about">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

export function Skills({ title, items }) {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>{title}</h2>
        <ul className="skills-list">
          {items.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Experience({ title, items }) {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>{title}</h2>
        {items.map((x, i) => (
          <div className="entry" key={i}>
            <div className="entry-head">
              <span className="role">{x.role}</span>
              <span className="period">{x.period}</span>
            </div>
            <div className="org">{x.org}</div>
            <p>{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Education({ title, items }) {
  return (
    <section id="education">
      <div className="wrap">
        <h2>{title}</h2>
        {items.map((x, i) => (
          <div className="entry" key={i}>
            <div className="entry-head">
              <span className="role">{x.degree}</span>
              <span className="period">{x.period}</span>
            </div>
            <div className="org">{x.org}</div>
            {x.desc && <p>{x.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export function Research({ title, items }) {
  return (
    <section id="research">
      <div className="wrap">
        <h2>{title}</h2>
        {items.map((x, i) => (
          <div className="entry" key={i}>
            <div className="entry-head">
              <span className="role">{x.title}</span>
            </div>
            <p>{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Publications({ title, items }) {
  return (
    <section id="publications">
      <div className="wrap">
        <h2>{title}</h2>
        <ul className="pub-list">
          {items.map((p, i) => (
            <li key={i}>
              <a href={p.link} target="_blank" rel="noreferrer">
                {p.title}
              </a>
              <div className="venue">{p.venue}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Projects({ title, items }) {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>{title}</h2>
        {items.map((p, i) => (
          <div className="entry" key={i}>
            <div className="entry-head">
              <span className="role">
                <a href={p.link} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              </span>
            </div>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Contact({ title, labels, profile }) {
  return (
    <section id="contact">
      <div className="wrap">
        <h2>{title}</h2>
        <p>
          {labels.contactIntro}{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>{' '}
          {labels.contactOr}{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {labels.contactLinkedinLabel}
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export function Certifications({ title, items }) {
  return (
    <section id="research">
      <div className="wrap">
        <h2>{title}</h2>
        {items.map((x, i) => (
          <div className="entry" key={i}>
            <div className="entry-head">
              <span className="role">{x.degree}</span>
            </div>
            <p className="org">{x.org}</p>
            {x.desc && <p>{x.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
