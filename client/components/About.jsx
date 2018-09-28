import React from 'react'
import ReactGA from 'react-ga'
import { I18n } from 'react-i18next'

ReactGA.initialize('UA-124825499-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const About = (props) => {
  return (
    <I18n ns="strings">
      {
        (t, { i18n }) => (
          <div className="about">
            <img src="/images/Whatipu.jpg" alt="Milkyway over Whatipu" />
            <div className="aboutText">
              <h1>{t('about.about_header')}</h1>
              <p>{t('about.about_paragraph_1')}</p>
              <p>{t('about.about_paragraph_2')}</p>
              <p>{t('about.about_paragraph_3')}</p>
              <p>Cornelia</p>
            </div>
          </div>
        )
      }
    </I18n>

  )
}

export default About