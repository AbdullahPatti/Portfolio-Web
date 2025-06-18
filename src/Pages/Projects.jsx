import './Projects.css';

function Projects() {
  return (
    <section>
      <h2 className="project_heading">My Accomplishments</h2>
      <p className="paragraph">
        I am dedicated to continual growth and learning, always striving to push boundaries and achieve excellence in every project I undertake. Explore below for a detailed list of my accomplishments and technical expertise.
      </p>
      <div className="container">
        <h1 className="main_projects">My Projects</h1>
      </div>
      <div className="explanation">
        <ul className="tedecs">
          <li className='id1 ids'>Cartify Grocery Store </li>
          <li className='id2'>(HTML,CSS, React JS, Node JS, Express JS,MySQL)</li>
          <br />
          <br />
          <li className='id1'>Mine Sweeper </li>
          <li className='id2'>(C++)</li>
          <li className='id1 ids'>Social Network App (Facebook)</li>
          <li className='id2'>(C++ with SFML Library for Graphics)</li>
          <br />
          <li className='id1 ids'>Pacman </li>
          <li className='id2'>(Assembly Language)</li>
          <br />
          <li className='id1 ids'>Portfolio Website </li>
          <li className='id2'>(HTML,CSS, React JS)</li>
          <br />
          <li className='id1 ids'>Tic Tac Toe </li>
          <li className='id2'>(C++)</li>
          <br />  
        </ul>
      </div>
      <div>
        <br />

        <div className="certify">
        <h1 className='main_projects'>My Certifications</h1>
        <div className="certify_exp">
          <ul>
            <li className='cid1'>Pacman </li>
          <li className='cid2'>(Assembly Language)</li>
          <br />
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
