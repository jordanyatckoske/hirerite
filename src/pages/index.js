import React, { useState, useRef } from "react"
import { Fade, HeadShake } from "react-reveal"
import BrowserProfiles from "../assets/images/browserProfiles.svg"
import StackedResumes from "../assets/images/StackedResumes.svg"
import TeamMembers from "../assets/images/TeamMembers.svg"
import DeskAgreement from "../assets/images/DeskAgreement.svg"
import "../assets/styles/global.scss"
import Layout from "../components/Layout.js"

export default function Home() {
  const [companyName, setCompanyName] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const companyForm = useRef(null)

  const scrollToCompanyForm = () => {
    companyForm.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "companyContact",
        name: companyName,
        email: companyEmail,
      }),
    })
      .then(() => {
        setCompanyName("")
        setCompanyEmail("")
        setSubmitted(true)
      })
      .catch(error => setError("Unable to submit at this time."))
  }

  return (
    <Layout>
      {/* WE HIRE THE RIGHT PEOPLE */}
      <div className="hero tablet-fullheight">
        <div className="hero-body columns is-multiline is-vcentered">
          <div className="column is-half columns is-multiline is-mobile has-text-centered-mobile has-text-left-tablet">
            <Fade bottom cascade fraction={0.5} ssrFadeout={true}>
              <div className="column is-full">
                <h1 className="title is-1">
                  Looking to hire? <br /> We can help.
                </h1>
                <p className="subtitle">
                  We build teams and help you hire the right people
                </p>
              </div>
            </Fade>
            <Fade bottom delay={500} fraction={0.5} ssrFadeout={true}>
              <div className="column is-full-mobile is-full-tablet is-half-desktop">
                <button
                  onClick={scrollToCompanyForm}
                  className="button button-purple-gradient"
                >
                  Let's chat
                </button>
              </div>
              {/* <div className="column is-full-mobile is-full-tablet is-half-desktop">
              <button
                onClick={scrollToCandidateForm}
                className="button button-blue-gradient"
              >
                Start your career
              </button>
            </div> */}
            </Fade>
          </div>
          <div className="column is-half has-text-centered-mobile has-text-right-tablet">
            <Fade right delay={750} fraction={0.5}>
              <StackedResumes />
            </Fade>
          </div>
        </div>
      </div>

      {/* PROVEN PROCESS */}
      <div className="bg-circles section  my-5 has-text-centered-mobile has-text-left-tablet">
        <div className="container columns column-reverse-mobile is-multiline is-vcentered is-mobile">
          <div className="column is-full-mobile is-half-tablet has-text-centered-mobile has-text-left-tablet">
            <Fade left delay={500} fraction={0.5}>
              <TeamMembers />
            </Fade>
          </div>
          <div className="column is-full-mobile is-half-tablet columns is-multiline is-mobile">
            <Fade bottom cascade fraction={0.5}>
              <div className="column is-full">
                {/* <p className="overline">Trusted history</p> */}
                <h1 className="title is-1">Our proven process</h1>
                <p className="subtitle">
                  We help companies hire the right candidates in IT, marketing,
                  sales, and HR
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* SOFTWARE */}
      <div className="section my-5">
        <div className="container columns is-multiline is-vcentered">
          <Fade bottom cascade fraction={0.5}>
            <div className="column is-half has-text-centered-mobile has-text-left-tablet">
              {/* <p className="overline">Our technology</p> */}
              <h1 className="title is-1">Powered by our software</h1>
              <p className="subtitle">
                We use our software to help you make better and more informed
                hiring decisions
              </p>
            </div>
          </Fade>

          <div className="column is-half has-text-centered-mobile has-text-right-tablet">
            <Fade right delay={500} fraction={0.5}>
              <BrowserProfiles />
            </Fade>
          </div>
        </div>
      </div>

      {/* COMPANY FORM */}
      <div ref={companyForm} className="section my-5">
        <div className="container columns column-reverse-mobile is-mobile is-multiline is-vcentered ">
          <div className="column is-full-mobile is-half-tablet has-text-centered-mobile has-text-left-tablet">
            <Fade left fraction={0.5}>
              <DeskAgreement />
            </Fade>
          </div>
          <div className="column is-full-mobile is-half-tablet has-text-centered-mobile has-text-left-tablet">
            <Fade bottom>
              {/* <p className="overline">Let's connect</p> */}
              <h1 className="title is-1 limit-width">
                We help you find the right candidates
              </h1>
              <p className="subtitle">
                If you need to hire quickly or are struggling to find the right
                people, we can help.
              </p>
            </Fade>
            <form
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="companyContact" />
              <input type="hidden" name="bot-field" />
              <Fade bottom cascade delay={400} fraction={0.5}>
                <div className="field">
                  <label className="label has-text-left" htmlFor="name">
                    Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      value={companyName}
                      placeholder="John"
                      required
                      onChange={e => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade delay={750} fraction={0.5}>
                <div className="field">
                  <label className="label has-text-left" htmlFor="email">
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      value={companyEmail}
                      placeholder="hired@gmail.com"
                      required
                      onChange={e => setCompanyEmail(e.target.value)}
                    />
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade delay={900} fraction={0.5}>
                <div className="mt-5">
                  <button className="button button-blue-gradient" type="submit">
                    Let's chat
                  </button>
                </div>
              </Fade>
              {error ? (
                <HeadShake>
                  <div className="subtitle has-text-danger">{error}</div>
                </HeadShake>
              ) : null}
              {submitted ? (
                <Fade bottom fraction={0.5}>
                  <div className="subtitle has-text-success">
                    Thank you for contacting us, we will be in touch!
                  </div>
                </Fade>
              ) : null}
            </form>
          </div>
          {/* </Fade> */}
        </div>
      </div>

      {/* CANDIDATE FORM */}
      {/* <div
        ref={candidateForm}
        className="section columns column-reverse-mobile is-mobile is-multiline is-vcentered my-5 has-text-centered-mobile has-text-left-tablet"
      >
        <div className="column is-full-mobile is-two-thirds-tablet has-text-centered">
          <EmployeeInMirror />
        </div>
        <div className="column is-full-mobile is-one-third-tablet">
          <p className="overline">Let's connect</p>
          <h1 className="title is-1">Looking for your next career?</h1>
          <p className="subtitle">
            We can connect you with the top companies looking for people like
            you!
          </p>
          <form
            className=""
            name="candidateContact"
            method="POST"
            data-netlify="true"
          >
            <div className="field">
              <label className="label has-text-left" htmlFor="name">
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  value={candidateName}
                  placeholder="John"
                  required
                  onChange={e => setCandidateName(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  id="email"
                  value={candidateEmail}
                  placeholder="hired@gmail.com"
                  required
                  onChange={e => setCandidateEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <button className="button button-blue-gradient" type="submit">
                Start your career
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </Layout>
  )
}
