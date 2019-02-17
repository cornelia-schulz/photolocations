import React from 'react'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  

  return (
    <footer>
      <p>
      <i className='fa fa-copyright' aria-hidden='true'></i> Cornelia Schulz 2018 - {currentYear}
      </p>
    </footer>
  )
}

export default Footer