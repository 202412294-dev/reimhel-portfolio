function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Python',
    'Problem Solving',
    'Web Development',
    'Database Management'
  ]

  return (
    <section className="container page-section">

      <p className="eyebrow">GET TO KNOW ME</p>

      <h1 className="page-title">
        About <span>Me.</span>
      </h1>

      <div className="about-content">

        <div className="about-card">
          <div className="profile-placeholder">
            RF
          </div>

          <h2>Reimhel Fortunato</h2>

          <p className="muted">
            Aspiring Developer
          </p>
        </div>

        <div className="about-description">
          <h2>A little introduction</h2>

          <p>
            Hello! My name is Reimhel Fortunato.
            I am an individual interested in technology,
            programming, and web development.
          </p>

          <p>
            I enjoy exploring new technologies, learning
            programming languages, and developing creative
            solutions to different problems.
          </p>

          <p>
            I believe that continuous learning and
            practical experience are important in becoming
            a better developer.
          </p>

          <h2 className="skills-heading">My Skills</h2>

          <div className="skills-container">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About