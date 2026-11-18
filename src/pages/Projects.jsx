function Projects() {
  const projects = [
    {
      number: '01',
      category: 'INVENTORY MANAGEMENT',
      title: 'Inventory System',
      description:
        'A web-based inventory system for managing products and keeping stock information organized.',
      tech: 'Inventory Management • Web App',
      image: '/images/project.jpg',
      url: 'https://inventory-system-5c35b.web.app'
    }
  ]

  return (
    <section className="container page-section">

      <p className="eyebrow">MY SELECTED WORK</p>

      <h1 className="page-title">
        My <span>Project.</span>
      </h1>

      <p className="section-description">
        Explore my inventory management system project and its tools for
        organizing products and stock information.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (
          <a
            className="project-card"
            key={project.number}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} in a new tab`}
          >

            <img
              className="project-cover"
              src={project.image}
              alt="Inventory system cover"
            />

            <div className="project-top">
              <span>{project.number}</span>
              <span>↗</span>
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech}
            </div>

          </a>
        ))}

      </div>
    </section>
  )
}

export default Projects
