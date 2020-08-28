import React from "react"
import { Helmet } from "react-helmet"
import "../assets/styles/global.scss"
import Hirerite from "../assets/images/hirerite.svg"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Helmet>
        {/* <link href="https://fonts.googleapis.com/css?family=Lato|Slabo+13px" rel="stylesheet"/> */}
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300"
          rel="stylesheet"
        />
        <title>Hirerite</title>
      </Helmet>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container has-text-centered">
          <div className="navbar">
            {/* <h1 className="title navbar-item">Hirerite</h1> */}
            <Hirerite />
          </div>
        </div>
      </nav>
      <main className="container">{children}</main>
      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <p className="overline text-pink content">
            &copy; Hirerite {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
