// Renders sections based on SITE_CONFIG and current view (industry|phd)
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }

function renderHero(){
  const c = SITE_CONFIG;
  document.getElementById('hero').innerHTML = `
    <img class="avatar" src="${c.photo}" alt="${c.name}" onerror="this.style.display='none'">
    <h1>${c.name}</h1>
    <p class="tag">${c.title}</p>
    <div class="contact-row">
      <a href="mailto:${c.email}">${c.email}</a>
      <a href="${c.github}" target="_blank">GitHub</a>
      <a href="${c.linkedin}" target="_blank">LinkedIn</a>
      <a href="${c.scholar}" target="_blank">Scholar</a>
      <span>${c.location}</span>
    </div>
    <a class="btn" href="${c.cv}" download>Download CV (PDF)</a>
  `;
}

function renderAbout(){
  if(!SITE_CONFIG.sections.about) return;
  document.getElementById('main').appendChild(el(`
    <section id="about"><div class="wrap">
      <h2>About</h2><p>${SITE_CONFIG.about}</p>
    </div></section>`));
}

function renderSkills(){
  if(!SITE_CONFIG.sections.skills) return;
  const items = SITE_CONFIG.skills.map(s=>`<li>${s}</li>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="skills"><div class="wrap">
      <h2>Skills</h2><ul class="skills-list">${items}</ul>
    </div></section>`));
}

function renderExperience(){
  if(!SITE_CONFIG.sections.experience) return;
  const items = SITE_CONFIG.experience.map(x=>`
    <div class="entry">
      <div class="entry-head"><span class="role">${x.role}</span><span class="period">${x.period}</span></div>
      <div class="org">${x.org}</div><p>${x.desc}</p>
    </div>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="experience"><div class="wrap">
      <h2>Work Experience</h2>${items}
    </div></section>`));
}

function renderEducation(){
  if(!SITE_CONFIG.sections.education) return;
  const items = SITE_CONFIG.education.map(x=>`
    <div class="entry">
      <div class="entry-head"><span class="role">${x.degree}</span><span class="period">${x.period}</span></div>
      <div class="org">${x.org}</div><p>${x.desc}</p>
    </div>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="education"><div class="wrap">
      <h2>Education</h2>${items}
    </div></section>`));
}

function renderResearch(){
  if(!SITE_CONFIG.sections.research) return;
  const items = SITE_CONFIG.research.map(x=>`
    <div class="entry"><div class="entry-head"><span class="role">${x.title}</span></div><p>${x.desc}</p></div>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="research"><div class="wrap">
      <h2>Research Focus</h2>${items}
    </div></section>`));
}

function renderPublications(){
  if(!SITE_CONFIG.sections.publications) return;
  const items = SITE_CONFIG.publications.map(p=>`
    <li><a href="${p.link}" target="_blank">${p.title}</a><div class="venue">${p.venue}</div></li>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="publications"><div class="wrap">
      <h2>Publications</h2><ul class="pub-list">${items}</ul>
    </div></section>`));
}

function renderProjects(){
  if(!SITE_CONFIG.sections.projects) return;
  const items = SITE_CONFIG.projects.map(p=>`
    <div class="entry"><div class="entry-head"><span class="role"><a href="${p.link}" target="_blank">${p.name}</a></span></div><p>${p.desc}</p></div>`).join('');
  document.getElementById('main').appendChild(el(`
    <section id="projects"><div class="wrap">
      <h2>Projects</h2>${items}
    </div></section>`));
}

function renderContact(){
  if(!SITE_CONFIG.sections.contact) return;
  document.getElementById('main').appendChild(el(`
    <section id="contact"><div class="wrap">
      <h2>Contact</h2>
      <p>Reach out at <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a> or connect via <a href="${SITE_CONFIG.linkedin}" target="_blank">LinkedIn</a>.</p>
    </div></section>`));
}

// view = 'industry' emphasizes experience first; 'phd' emphasizes research/education/publications first
function renderPage(view){
  renderHero();
  const order = view === 'phd'
    ? [renderAbout, renderResearch, renderEducation, renderPublications, renderSkills, renderExperience, renderProjects, renderContact]
    : [renderAbout, renderExperience, renderSkills, renderProjects, renderResearch, renderEducation, renderPublications, renderContact];
  order.forEach(fn=>fn());
  document.querySelectorAll('nav.top .links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.view === view);
  });
}
