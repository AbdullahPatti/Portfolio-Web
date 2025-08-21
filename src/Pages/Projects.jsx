import './Projects.css';

function Projects() {
  const projects = [
    {
      name: "Stocks Price Predictor",
      link: "https://github.com/AbdullahPatti/Stocks-Price-Predictor",
      tech: "Python - Pandas, NumPy, Matplotlib, Seaborn, yFinance, Scikit-Learn",
    },
    {
      name: "Customer Churn Predictor",
      link: "https://github.com/AbdullahPatti/Customer-Churn-Prediction-using-Machine-Learning.git",
      tech: "Python - Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn",
    },
    {
      name: "Titanic Survival Predictor",
      link: "https://github.com/AbdullahPatti/Titanic-Survival-Prediction.git",
      tech: "Python - Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn",
    },
    {
      name: "Cartify Grocery Store",
      link: "https://github.com/AbdullahPatti/Grocery-System-Cartify.git",
      tech: "HTML, CSS, React JS, Node JS, Express JS, MySQL",
    },
    {
      name: "Space Invaders",
      link: "https://github.com/AbdullahPatti/Space-Invaders-Game.git",
      tech: "C++",
    },
    {
      name: "Social Network App (Facebook)",
      link: "https://github.com/AbdullahPatti/Social-Network-App.git",
      tech: "C++ with SFML Library for Graphics",
    },
    {
      name: "Pacman",
      link: "https://github.com/AbdullahPatti/Pacman",
      tech: "Assembly Language",
    },
    {
      name: "Portfolio Website",
      link: "https://github.com/AbdullahPatti/Portfolio-Web.git",
      tech: "HTML, CSS, React JS",
    },
    {
      name: "Weather Website",
      link: "https://github.com/AbdullahPatti/Weather-App.git",
      tech: "HTML, CSS, React JS",
    },
    {
      name: "Tic Tac Toe",
      link: "https://github.com/AbdullahPatti/Tic-Tac-Toe",
      tech: "C++",
    },
  ];

  const certifications = [
    { name: "Machine Learning with Python", issuer: "IBM", id: "ACTZJHXRLJAD" },
    { name: "Data Analysis and Visualization with Python", issuer: "MICROSOFT", id: "R4RKKX6T0WDE" },
    { name: "Databases and SQL for Data Science with Python", issuer: "IBM", id: "M1PDJA3NEB3O" },
    { name: "Introduction to Generative AI", issuer: "GOOGLE", id: "ZB7FUFBJBRX4" },
    { name: "Python Project for Data Science", issuer: "IBM", id: "0SU9823Y1HD2" },
    { name: "What is Data Science", issuer: "IBM", id: "JYO3K9RJAWTN" },
    { name: "Microsoft Office Specialist: Microsoft WORD 2019", issuer: "MICROSOFT", id: "PLER-uSJG" },
    { name: "Microsoft Office Specialist: Microsoft EXCEL 2019", issuer: "MICROSOFT", id: "w9ecQ-H9mP" },
    { name: "Microsoft Office Specialist: Microsoft POWERPOINT 2019", issuer: "MICROSOFT", id: "aTLp-sFpM" },
    { name: "SQL Query Master Competition", issuer: "SOFTEC'25 - FAST", id: null },
    { name: "Speed Programming Competition", issuer: "ACM - FAST", id: null },
    { name: "Cinematography Competition", issuer: "SOFTEC'25 - FAST", id: null },
  ];

  return (
    <section id="projects" className="projects">
      <div className="spacer"></div>
      <div className="mainstream">
        <h2 className="project_heading">My Accomplishments</h2>
        <p className="paragraph">
          I am dedicated to continual growth and learning, always striving to push boundaries and achieve excellence in every project I undertake. Explore below for a detailed list of my accomplishments and technical expertise.
        </p>

        {/* Projects Section */}
        <div className="container">
          <h3 className="main_projects">My Projects</h3>
          <div className="explanation">
            <ul className="tedecs">
              {projects.map((project, index) => (
                <li key={index} className="project-card">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="id1">{project.name}</span>
                    <p className="id2">{project.tech}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certify">
          <h3 className="main_projects">My Certifications</h3>
          <div className="certify_exp">
            <ul className="tedecs">
              {certifications.map((cert, index) => (
                <li key={index} className="cert-card">
                  <span className="main">{cert.name}</span>
                  <p className="cid2">
                    {cert.issuer}
                    {cert.id ? ` - Credential ID: ${cert.id}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
