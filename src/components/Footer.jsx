import React from 'react'
import './Footer.css'

const teamMembers = [
  'Martín Eugenio Nunell Rey',
  'Carlos Gálvez Reguera',
  'Pedro Chacón Rosa',
  'Asier Bajo Juan',
  'Sergio Gálvez Reguera',
]

const Footer = () => {
  return (
    <footer>
      <h2>Miembros del equipo:</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
