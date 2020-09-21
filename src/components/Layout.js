import React from "react"
import { Helmet } from "react-helmet"
import Tada from "react-reveal/Tada"
import "../assets/styles/global.scss"
// import Hirerite from "../assets/images/hirerite.svg"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content="
          We build teams and help you hire the right people through our software
          and trusted recruiting history."
        />
        <title>Hirerite</title>
        <meta name="image" content="/hireriteLogo.png" />
        <meta property="og:image" content="/hireriteLogo.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f72585" />
        <meta name="msapplication-TileColor" content="#7209b7" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container has-text-centered">
          <div className="navbar">            
            <Hirerite />
          </div>
        </div>
      </nav> */}
      <main className="container">{children}</main>
      <footer className="footer has-background-white">
        <Tada delay={500}>
          <div className="content has-text-centered">
            <p className="overline text-pink content">
              &copy; Hirerite {new Date().getFullYear()}
            </p>
          </div>
        </Tada>
      </footer>
    </div>
  )
}

export default Layout
