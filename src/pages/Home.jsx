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
          Aspiring Developer & Creative Thinker
        </h2>

        <p className="hero-description">
          I am passionate about technology, web development,
          and creating digital experiences. This is where I
          showcase my journey, skills, and projects.
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
        <div className="visual-circle">
          <div className="visual-inner">
            <span>RF</span>
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