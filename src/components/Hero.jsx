export default function Hero({ profile, labels }) {
  return (
    <header className="hero">
      <div className="wrap">
        <img
          className="avatar"
          src={profile.photo}
          alt={profile.name}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <h1>{profile.name}</h1>
        <p className="tag">{profile.title}</p>
        <div className="contact-row">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {labels.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {labels.linkedinLabel}
          </a>
          {/* <a href={profile.scholar} target="_blank" rel="noreferrer">{labels.scholarLabel}</a> */}
          <span>{profile.location}</span>
        </div>
        <a className="btn" href={profile.cv} download>
          {labels.downloadCv}
        </a>
      </div>
    </header>
  )
}
