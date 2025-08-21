import "./About.css";

function About() {
  return (
    <section className="abouts" id="skills">
      <div className="about-wrapper">
        <h2 className="skillset">My Skills</h2>
        <p className="skillsOutline">
          I have a deep interest in exploring the intersection of technology, creativity, and personal growth. I'm drawn to building things that solve problems, tell stories, or inspire others. Whether it's through logical thinking, visual expression, or meaningful conversations, I enjoy engaging with ideas that challenge me and help me evolve. I'm passionate about learning, experimenting, and continuously pushing my boundaries to better understand both myself and the world around me.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="head">Programming Languages</h3>
            <ul className="tedec">
              <li>Python</li>
              <li>C#</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Data Science & Analytics</h3>
            <ul className="tedec">
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Scikit-learn</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Web Development</h3>
            <ul className="tedec">
              <li>HTML5</li>
              <li>CSS</li>
              <li>React JS</li>
              <li>.NET</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Database</h3>
            <ul className="tedec">
              <li>MySQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Version Control</h3>
            <ul className="tedec">
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Tools & Platforms</h3>
            <ul className="tedec">
              <li>VS Code</li>
              <li>Linux/Ubuntu</li>
              <li>Jupyter Notebook</li>
              <li>PyCharm</li>
            </ul>
          </div>

           <div className="skill-card">
            <h3 className="head">Multimedia & Creative Design</h3>
            <ul className="tedec">
              <li>Photography</li>
              <li>Videography</li>
              <li>Photo Editing</li>
              <li>Video Editing</li>
              <li>Story Telling</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3 className="head">Soft Skills & Interests</h3>
            <ul className="tedec">
              <li>Problem Solving</li>
              <li>Creative & Critical Thinking</li>
              <li>Team Collaboration</li>
              <li>Public Speaking</li>
              <li>Journaling</li>
              <li>Book Reading</li>
            </ul>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default About;