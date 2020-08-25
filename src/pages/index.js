import React, { useState } from "react"
import { Helmet } from "react-helmet"
// import BrowserProfiles from "../assets/images/browserProfiles.svg"
import BrowserProfiles from "../assets/images/browserProfiles.js"
import LaptopSearch from "../assets/images/laptopSearch.svg"
import "../assets/styles/global.scss"

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <div className="container">
      <Helmet>
        {/* <link href="https://fonts.googleapis.com/css?family=Lato|Slabo+13px" rel="stylesheet"/> */}
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300"
          rel="stylesheet"
        />
        <title>Hirerite</title>
      </Helmet>
      <div className="hero">
        <div className="hero-body columns is-multiline is-vcentered">
          <div className="column is-one-third columns is-multiline is-mobile">
            <div className="column is-full">
              <p className="overline">Welcome to Hirerite</p>
              <h1 className="title is-1">Advance your company</h1>
              <p className="subtitle">
                We help companies build teams and find the best people.
              </p>
            </div>
            <div className="column is-full">
              <button className="button">Build your team</button>
            </div>
          </div>
          <div className="column is-two-thirds">
            <LaptopSearch />
          </div>
        </div>
      </div>
      <main className="container">
        <div className="section">
          <div className="columns is-multiline is-vcentered">
            <div className="column is-two-thirds">
              <BrowserProfiles />
            </div>

            <div className="column is-one-third columns is-multiline is-mobile">
              <div className="column is-full">
                <p className="overline">Trusted history</p>
                <h1 className="title is-1">Our success story</h1>
                <p className="subtitle">
                  We help companies recruit the best candidates for the
                  positions in IT, Marketing, HR, and Sales
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section columns is-multiline is-mobile">
          <div className="column is-one-third">
            <p className="overline">Let's connect</p>
            <h1 className="title is-1">Looking for your next career?</h1>
            <p className="subtitle">
              We can connect you with the top companies looking for people like
              you!
            </p>
          </div>
          <form
            className="column is-two-thirds"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div className="field column">
              <label className="label" htmlFor="name">
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  value={name}
                  placeholder="John"
                  required
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="field column">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  id="email"
                  value={email}
                  placeholder="hired@gmail.com"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="column">
              <button className="button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
          <p className="content">&copy; Hirerite 2020</p>
        </div>
      </footer>
    </div>
  )
}
