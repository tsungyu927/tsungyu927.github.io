import RESUME from '../../data/resume/Resume_ENG_231014.pdf'

function openMail() {
  window.open('mailto:tsungyu927@gmail.com', '_blank')
}

function openGithub() {
  window.open('https://github.com/tsungyu927', '_blank')
}

function openMedium() {
  window.open('https://medium.com/@tsungyu927', '_blank')
}

function openResume() {
  window.open(RESUME, '_blank')
}

export {
  openMail, openGithub, openMedium, openResume,
}
