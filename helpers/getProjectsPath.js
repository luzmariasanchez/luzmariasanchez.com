
import projects from './../content/sitemap/projects'

export function getProjectsPath(lg='en') {
  const before = {
    en: '/project/',
    es: '/es/proyecto/',
    fr: '/fr/projet/',
  }[lg];
  return projects.data.map(slug => {
    return before+slug;
  })
}