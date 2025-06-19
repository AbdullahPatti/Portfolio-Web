import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <div style={{ height: '80px', marginTop: '-70px' }}></div>
      <div className="mainstream">
      <h2 className="project_heading">My Accomplishments</h2>
      <p className="paragraph">
        I am dedicated to continual growth and learning, always striving to push boundaries and achieve excellence in every project I undertake. Explore below for a detailed list of my accomplishments and technical expertise.
      </p>

      <div className="container">
        <h1 className="main_projects">My Projects</h1>
      </div>

      <div className="explanation">
        <ul className="tedecs">
          <li className='id1 ids'>Cartify Grocery Store</li>
          <li className='id2'>(HTML, CSS, React JS, Node JS, Express JS, MySQL)</li>

          <li className='id1 ids'>Mine Sweeper</li>
          <li className='id2'>(C++)</li>

          <li className='id1 ids'>Social Network App (Facebook)</li>
          <li className='id2'>(C++ with SFML Library for Graphics)</li>

          <li className='id1 ids'>Pacman</li>
          <li className='id2'>(Assembly Language)</li>

          <li className='id1 ids'>Portfolio Website</li>
          <li className='id2'>(HTML, CSS, React JS)</li>

          <li className='id1 ids'>Tic Tac Toe</li>
          <li className='id2'>(C++)</li>
        </ul>
      </div>

      <div className="certify">
        <h1 className="main_projects">My Certifications</h1>
        <div className="certify_exp">
          <ul className="tedecs">
            <li className='cid1 ids'>SQL Query Master Competition</li>
            <li className='cid2'>(SOFTEC'25 - FAST)</li>

            <li className='cid1 ids'>Speed Programming Competition</li>
            <li className='cid2'>(ACM - FAST)</li>

            <li className='cid1 ids'>Microsoft Office Specialist</li>
            <li className='cid2'>(Microsoft)</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;
