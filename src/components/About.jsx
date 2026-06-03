import React from 'react'
import './About.css'

const teamMembers = [
  {
    name: 'Martín Eugenio Nunell Rey',
    contribution: 'Integración de la navegación y estructura general de la aplicación.',
  },
  {
    name: 'Carlos Gálvez Reguera',
    contribution: 'Apoyo en la interfaz y validación de las vistas principales.',
  },
  {
    name: 'Pedro Chacón Rosa',
    contribution: 'Implementación y revisión de pruebas Cypress.',
  },
  {
    name: 'Asier Bajo Juan',
    contribution: 'Organización del contenido y soporte en componentes reutilizables.',
  },
  {
    name: 'Sergio Gálvez Reguera',
    contribution: 'Revisión final, ajustes de detalle y control de calidad.',
  },
]

const About = () => {
  return (
    <main className="about-container">
      <h1>Acerca de nosotros</h1>
      <p id="team-number">Somos el equipo nº 1</p>

      <section aria-labelledby="team-members-title">
        <h2 id="team-members-title">Miembros y aportaciones</h2>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.name}>
              <strong>{member.name}:</strong> {member.contribution}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default About
