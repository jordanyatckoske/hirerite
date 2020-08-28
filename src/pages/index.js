import React, { useState, useRef } from "react"
// import BrowserProfiles from "../assets/images/browserProfiles.svg"
// imort BrowserProfiles from "../assets/images/browserProfiles.js"
// import LaptopSearch from "../assets/images/laptopSearch.svg"
import StackedResumes from "../assets/images/StackedResumes.svg"
import TeamMembers from "../assets/images/TeamMembers.svg"
import DeskAgreement from "../assets/images/DeskAgreement.svg"
import EmployeeInMirror from "../assets/images/EmployeeInMirror.svg"
import "../assets/styles/global.scss"
import Layout from "../components/Layout.js"

export default function Home() {
  const [candidateName, setCandidateName] = useState("")
  const [candidateEmail, setCandidateEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const companyForm = useRef(null)
  const candidateForm = useRef(null)

  const scrollToCompanyForm = () => {
    companyForm.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToCandidateForm = () => {
    candidateForm.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Layout>
      <div className="hero">
        <div className="hero-body columns is-multiline is-vcentered">
          <div className="column is-one-third columns is-multiline is-mobile has-text-centered-mobile has-text-left-tablet">
            <div className="column is-full">
              <h1 className="title is-1">Looking to Hire? We can help.</h1>
              <p className="subtitle">
                Experts in building teams and recruiting the best candidates.
              </p>
            </div>
            <div className="column is-full-mobile is-full-tablet is-half-desktop">
              <button
                onClick={scrollToCompanyForm}
                className="button button-purple-gradient"
              >
                Build your team
              </button>
            </div>
            <div className="column is-full-mobile is-full-tablet is-half-desktop">
              <button
                onClick={scrollToCandidateForm}
                className="button button-blue-gradient"
              >
                Start your career
              </button>
            </div>
          </div>
          <div className="column is-two-thirds has-text-centered-mobile has-text-right-tablet">
            <StackedResumes />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section columns column-reverse-mobile is-multiline is-vcentered is-mobile my-5 has-text-centered-mobile has-text-left-tablet">
        <div className="column is-full-mobile is-two-thirds-tablet">
          <TeamMembers />
        </div>

        <div className="column is-full-mobile is-one-third-tablet columns is-multiline is-mobile">
          <div className="column is-full">
            <p className="overline">Trusted history</p>
            <h1 className="title is-1">Our success story</h1>
            <p className="subtitle">
              We help companies recruit the best candidates for the positions in
              IT, Marketing, HR, and Sales
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div
        ref={companyForm}
        className="section columns is-multiline is-vcentered my-5"
      >
        <div className="column is-one-third has-text-centered-mobile has-text-left-tablet">
          <p className="overline">Let's connect</p>
          <h1 className="title is-1">Looking to hire?</h1>
          <p className="subtitle">
            We can connect you with the top candidates searching for work at
            companies like yours!
          </p>
          <form
            className=""
            name="companyContact"
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
                  value={companyName}
                  placeholder="John"
                  required
                  onChange={e => setCompanyName(e.target.value)}
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
                  value={companyEmail}
                  placeholder="hired@gmail.com"
                  required
                  onChange={e => setCompanyEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <button className="button button-purple-gradient" type="submit">
                Build your team
              </button>
            </div>
          </form>
        </div>
        <div className="column is-two-thirds has-text-centered-mobile has-text-right-tablet">
          <DeskAgreement />
        </div>
      </div>

      {/* SECTION 4 */}
      <div
        ref={candidateForm}
        className="section columns column-reverse-mobile is-mobile is-multiline is-vcentered my-5 has-text-centered-mobile has-text-left-tablet"
      >
        <div className="column is-full-mobile is-two-thirds-tablet">
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
      </div>
    </Layout>
  )
}
