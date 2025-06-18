import "./About.css";

function About() {
  return (
    <section className="abouts" id="skills">
      <h2 className="skillset">My Skills</h2>
      <p className="skillsOutline">
        I have a deep interest in exploring the intersection of technology, creativity, and personal growth. I'm drawn to building things that solve problems, tell stories, or inspire others. Whether it's through logical thinking, visual expression, or meaningful conversations, I enjoy engaging with ideas that challenge me and help me evolve. I'm passionate about learning, experimenting, and continuously pushing my boundaries to better understand both myself and the world around me.
      </p>

      <h1 className="head">Programming Languages</h1>
      <ul className="tedec">
        <li>C</li>
        <li>C++</li>
      </ul>

      <h1 className="head">Web Development</h1>
      <ul className="tedec">
        <li>HTML5</li>
        <li>CSS</li>
        <li>React JS</li>
      </ul>

      <h1 className="head">Database</h1>
      <ul className="tedec">
        <li>MySQL</li>
      </ul>

      <h1 className="head">Version Control</h1>
      <ul className="tedec">
        <li>Git & GitHub</li>
      </ul>

      <h1 className="head">Tools & Platforms</h1>
      <ul className="tedec">
        <li>VS Code</li>
        <li>Linux/Ubuntu</li>
      </ul>

      <h1 className="head">Soft Skills & Interests</h1>
      <ul className="tedec">
        <li>Problem Solving</li>
        <li>Story Telling</li>
        <li>Creative & Critical Thinking</li>
        <li>Team Collaboration</li>
        <li>Public Speaking</li>
        <li>Photography</li>
      </ul>
    </section>
  );
}

export default About;
