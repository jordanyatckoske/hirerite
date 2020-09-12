import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import "../assets/styles/global.scss"
import EmployeeInMirror from "../assets/images/EmployeeInMirror.svg"

export default () => {
  return (
    <div className="container-fluid tablet-fullheight">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang="en" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <main className="container">
        <div className="hero">
          <div className="hero-body columns is-multiline is-vcentered">
            <div className="column is-half columns is-multiline is-mobile has-text-centered-mobile has-text-left-tablet">
              <Fade bottom cascade fraction={0.5} ssrFadeout={true}>
                <div className="column is-full">
                  <h1 className="title is-1">Page not found</h1>
                  <p className="subtitle">Sorry! This page does not exist.</p>
                </div>
              </Fade>
              <Fade bottom delay={500} fraction={0.5} ssrFadeout={true}>
                <div className="column is-full-mobile is-full-tablet is-half-desktop">
                  <button className="button button-purple-gradient">
                    <Link to="/" className="has-text-white">
                      Back to home
                    </Link>
                  </button>
                </div>
              </Fade>
            </div>
            <div className="column is-half has-text-centered-mobile has-text-right-tablet">
              <Fade right delay={750} fraction={0.5}>
                <EmployeeInMirror />
              </Fade>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
