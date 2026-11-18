import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'My Project', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="nav-container">
          <Link to="/" className="logo">
            REIMHEL<span>.</span>
          </Link>

          <nav className="navigation">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  location.pathname === link.path ? 'active' : ''
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="nav-button">
            Let's Talk <span>↗</span>
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Reimhel Fortunato. All rights reserved.</p>
        <p>Designed & Built with React.</p>
      </footer>
    </div>
  )
}

export default Layout
