import './styles.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { translations } from './translations'

let currentLang = 'fi'

const elements = {
  contact: document.getElementById('contact'),
  educationTitle: document.getElementById('educationTitle'),
  education: document.getElementById('education'),
  experienceTitle: document.getElementById('experienceTitle'),
  experience: document.getElementById('experience'),
  skillsTitle: document.getElementById('skillsTitle'),
  skills: document.getElementById('skills'),
  languagesTitle: document.getElementById('languagesTitle'),
  languages: document.getElementById('languages'),
  button: document.getElementById('langBtn'),
  projectTitle: document.getElementById('projectTitle'),
  projectDescription: document.getElementById('projectDescription'),
  projectImagesNote: document.getElementById('projectImagesNote')
}

function render() {
  const t = translations[currentLang]
  elements.contact.innerHTML = t.contact
  elements.educationTitle.textContent = t.educationTitle
  elements.education.innerHTML = t.education
  elements.experienceTitle.textContent = t.experienceTitle
  elements.experience.innerHTML = t.experience
  elements.skillsTitle.textContent = t.skillsTitle
  elements.skills.innerHTML = t.skills
  elements.languagesTitle.textContent = t.languagesTitle
  elements.languages.innerHTML = t.languages
  elements.button.innerHTML = t.button
  elements.projectTitle.innerHTML = t.projectTitle
  elements.projectDescription.innerHTML = t.projectDescription
  elements.projectImagesNote.innerHTML = t.projectOpenImages
}

elements.button.addEventListener('click', () => {
  currentLang = currentLang === 'fi' ? 'en' : 'fi'
  render()
})

render()

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
