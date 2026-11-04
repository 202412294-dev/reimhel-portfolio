function Projects() {
  const projects = [
    {
      number: '01',
      category: 'WEB DEVELOPMENT',
      title: 'Personal Portfolio',
      description:
        'A personal website that introduces an individual, showcases skills, and presents completed projects.',
      tech: 'React • CSS • JavaScript'
    },
    {
      number: '02',
      category: 'SYSTEM DEVELOPMENT',
      title: 'Management System',
      description:
        'A web-based system designed to organize information and simplify everyday management tasks.',
      tech: 'HTML • CSS • JavaScript'
    },
    {
      number: '03',
      category: 'CREATIVE PROJECT',
      title: 'Digital Showcase',
      description:
        'A creative digital platform that presents ideas, information, and interactive content.',
      tech: 'React • CSS'
    }
  ]

  return (
    <section className="container page-section">

      <p className="eyebrow">MY SELECTED WORK</p>

      <h1 className="page-title">
        Featured <span>Projects.</span>
      </h1>

      <p className="section-description">
        Here are some sample projects representing my
        interests and learning journey.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

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

          </article>
        ))}

      </div>
    </section>
  )
}

export default Projects