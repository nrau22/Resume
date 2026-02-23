import './styles.css'
import { translations } from './translations'

import screenshot1 from './assets/screenshot1.png'
import screenshot2 from './assets/screenshot2.png'
import screenshot3 from './assets/screenshot3.png'
import screenshot4 from './assets/screenshot4.png'

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
  projectImagesNote: document.getElementById('projectImagesNote'),
  projectScreenshots: document.getElementById('projectScreenshots'),
  modal: document.getElementById('imageModal'),
  modalImg: document.getElementById('modalImage'),
  modalClose: document.getElementById('modalClose')
}

const screenshots = [
  { src: screenshot1, alt: 'Project Screenshot 1' },
  { src: screenshot2, alt: 'Project Screenshot 2' },
  { src: screenshot3, alt: 'Project Screenshot 3' },
  { src: screenshot4, alt: 'Project Screenshot 4' }
]

function renderScreenshots() {
  elements.projectScreenshots.innerHTML = screenshots
    .map(
      (shot) => `
        <img 
          src="${shot.src}" 
          alt="${shot.alt}" 
          class="screenshot-thumb"
          loading="lazy"
        />
      `
    )
    .join('')
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
  elements.button.textContent = t.button
  elements.projectTitle.textContent = t.projectTitle
  elements.projectDescription.innerHTML = t.projectDescription
  elements.projectImagesNote.textContent = t.projectOpenImages
}

elements.button.addEventListener('click', () => {
  currentLang = currentLang === 'fi' ? 'en' : 'fi'
  render()
})

/* ---------- Modal logic ---------- */
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('screenshot-thumb')) {
    elements.modalImg.src = e.target.src
    elements.modal.classList.remove('hidden')
  }

  if (e.target === elements.modal || e.target === elements.modalClose) {
    closeModal()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})

function closeModal() {
  elements.modal.classList.add('hidden')
  elements.modalImg.src = ''
}

/* ---------- Init ---------- */
render()
renderScreenshots()
