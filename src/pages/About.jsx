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
          <img
            className="about-profile-image"
            src="/images/about.jpg"
            alt="Reimhel Fortunato"
          />

          <h2>Reimhel Fortunato</h2>

          <p className="muted">
            BSIT 3rd Year · Gordon College
          </p>
        </div>

        <div className="about-description">
          <h2>A little introduction</h2>

          <p>
            I am Reimhel Fortunato, a third-year Bachelor of Science in
            Information Technology student at Gordon College. Alongside my
            studies, I am a basketball player who enjoys the challenge of
            working toward a shared goal and improving with every game.
          </p>

          <p>
            Basketball has taught me that success depends on teamwork,
            communication, and trust. I carried those values into my on-the-job
            training as an Excel encoder. Every intern had a role in getting
            the work done, and by helping one another organize data, verify
            information, and solve problems, we made our tasks more accurate,
            efficient, and enjoyable.
          </p>

          <p>
            My OJT also brought challenges: handling large amounts of data,
            maintaining accuracy, and meeting deadlines. Just as I stay
            focused and learn from every game, I stayed patient, accepted
            corrections, and kept improving my work. These experiences have
            strengthened my discipline and problem-solving skills, and they
            continue to shape the IT professional I hope to become.
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
