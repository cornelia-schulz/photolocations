import React from 'react'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-124825499-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const About = (props) => {
  return (
    <div className="about">
      <img src="/images/Whatipu.jpg" alt="Milkyway over Whatipu" />
      <div className="aboutText">
        <h1>About Photo Locations</h1>
        <p>Welcome to Photo Locations. The app is aimed at all of you
          who like travelling and photography. I love to see and explore new places
          but sometimes struggle to find interesting places to photograph when I
          have only limited time to explore and would still like to come home with
          some amazing shots.
        </p>
        <p>Hopefully this site will prove useful to you as well. You are welcome to
          drop me a comment over on the Contacts page at any time</p>
        <p>Happy snapping!!</p>
        <p>Cornelia</p>
      </div>
    </div>
  )
}

export default About