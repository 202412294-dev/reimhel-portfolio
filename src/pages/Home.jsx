import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero container">

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          WELCOME TO MY PORTFOLIO
        </div>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Reimhel
          <span> Fortunato.</span>
        </h1>

        <h2>
          BSIT Student & Basketball Player
        </h2>

        <p className="hero-description">
          I am a third-year Bachelor of Science in Information Technology
          student at Gordon College, a basketball player, and an aspiring
          developer. My experiences in class, on the court, and during my OJT
          as an Excel encoder continue to build my teamwork, discipline, and
          attention to detail.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="primary-button">
            Explore My Work ↗
          </Link>

          <Link to="/about" className="outline-button">
            About Me
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="portrait-image-wrap">
            <img src="/images/pic.jpg" alt="Reimhel Fortunato" />
          </div>
        </div>

        <div className="floating-card">
          <span>✦</span>
          <div>
            <strong>Creative Mind</strong>
            <p>Always Learning</p>
          </div>
        </div>

        <div className="visual-label">
          <span>01 / 04</span>
          <p>MY DIGITAL SPACE</p>
        </div>
      </div>

    </section>
  )
}

export default Home
