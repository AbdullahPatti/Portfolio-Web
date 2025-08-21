import './Qualification.css';

function Qualification() {
  return (
    <section className="qualify" id="qualification">
      <h1 className="title">My Qualifications</h1>
      <p className="passage">
        My Qualifications trace a steady academic journey from school to university,
        shaped by consistent learning, dedication, and growth across different stages of education.
      </p>

      <div className="main">
        <div className="card">
          <img 
            src="https://thepunjabschool.edu.pk/images/logo.png" 
            alt="The Punjab School" 
            className="logo" 
          />
          <h2 className="inst-name">The Punjab School</h2>
          <p>Matriculation (Computer Science)</p>
          <p>2012 – 2021</p>
          <p>1098 / 1100</p>
          <p>99.82%</p>
          <p>Grade: A+</p>
          
        </div>

        <div className="card">
          <img 
            src="/PGC.png" 
            alt="Punjab Group of Colleges" 
            className="logo" 
          />
          <h2 className="inst-name">Punjab Group of Colleges</h2>
          <p>ICS</p>
          <p>2021 – 2023</p>
          <p>921 / 1100</p>
          <p>83.72%</p>
          <p>Grade: A+</p>
          
        </div>

        <div className="card">
          <img 
            src="/Fast.png" 
            alt="FAST NUCES" 
            className="logo" 
          />
          <h2 className="inst-name">FAST NUCES</h2>
          <p>BSCS</p>
          <p>2023 – Present</p>
          <p>CGPA: 2.85</p>
          
        </div>
      </div>
    </section>
  );
}

export default Qualification;