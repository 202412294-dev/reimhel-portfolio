function Contact() {
  return (
    <section className="container page-section contact-section">

      <p className="eyebrow">GET IN TOUCH</p>

      <h1 className="page-title">
        Let's Work <span>Together.</span>
      </h1>

      <p className="section-description">
        Have a question, an idea, or a project in mind?
        Feel free to reach out.
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <span className="contact-icon">✉</span>
          <div>
            <p className="muted">EMAIL ADDRESS</p>
            <h3>Your Email Address</h3>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">⌖</span>
          <div>
            <p className="muted">LOCATION</p>
            <h3>Your Location</h3>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">↗</span>
          <div>
            <p className="muted">GITHUB</p>
            <h3>Your GitHub Profile</h3>
          </div>
        </div>

      </div>

      <p className="contact-note">
        Thank you for visiting my portfolio!
      </p>

    </section>
  )
}

export default Contact