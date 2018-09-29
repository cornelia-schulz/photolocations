import { Route, Link } from 'react-router-dom'
import React from 'react'
import Search from './Map/Search'
import { I18n } from 'react-i18next'
import i18n from 'i18next'
import { connect } from 'react-redux'
import { setLanguage } from '../actions/localise'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  toggleVisibility() {
    const w = window
    const width = w.innerWidth
    const menu = document.getElementsByClassName('dropdown-content')[0]
    if (menu.style.display === 'none') {
      menu.style.display = 'block'
    } else if (width >= 768) {
      menu.style.display = 'flex'
    } else {
      menu.style.display = 'none'
    }
  }

  changeLanguage(language) {
    i18n.changeLanguage(language)
    this.props.setLanguage(language)
  }

  render() {
    return (
      <I18n ns="strings">
        {
          (t, { i18n }) => (
            <header>
              <nav className="navbar" role="navigation">
                <div className="logo header  header-left">
                  <img src="/images/Logo.PNG" alt="Photo Locations" />
                </div>
                <div className="languages">
                <button className="button language" onClick={() => this.changeLanguage('de')}>{t('languages.de')}</button>
                <button className="button language" onClick={() => this.changeLanguage('en')}>{t('languages.en')}</button>
                </div>
                <div className="header">
                  <Route exact path='/' component={Search} />
                </div>
                <div className="dropdown header">
                  <button className="dropbtn" onClick={this.toggleVisibility}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/" onClick={this.toggleVisibility}>{t('header.home')}</Link>
                    <Link to="/about" onClick={this.toggleVisibility}>{t('header.about')}</Link>
                    <Link to="/contact" onClick={this.toggleVisibility}>{t('header.contact')}</Link>
                  </div>
                </div>
              </nav>
            </header>
          )
        }
      </I18n>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: (language) => {
      return dispatch(setLanguage(language))
    }
  }
}

export default connect (null, mapDispatchToProps)(Header)
