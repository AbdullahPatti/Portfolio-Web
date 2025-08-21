import './Home.css';

function Home() {
  return (
    <section className="intro-section">
      <h1 className="headline">I code, I create, I narrate</h1>
      <h3 className="subheading">I’m Abdullah Haroon</h3>

      <div className="intro-content">
        <div className="text-content">
          <p className="bio">
  I am a 20-year-old from Lahore with a mind constantly brimming with thoughts and curiosity. I see myself as someone in the process of becoming the main character in my own journey, striving to grow, learn, and lead with purpose. Currently, I am pursuing a Bachelor's degree in Computer Science from FAST NUCES, Lahore. My passion lies in the ever-evolving world of technology and the changing ways we interact with it.
  <br /><br />
  I enjoy writing code as much as I enjoy meaningful conversations. I have developed skills in Python, C#, C++, C, MySQL, HTML5, CSS, React JS, and .NET, and I love using these tools to bring ideas to life. I also explore Data Science with Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn, and have actively participated in coding competitions such as the ACM Speed Programming Competition and the SOFTEC SQL Query Master, which have sharpened my problem-solving abilities and exposed me to fast-paced, real-world challenges.
  <br /><br />
  Outside the academic and competitive space, I am drawn to storytelling, photography, and videography, which allow me to express creativity, capture unique perspectives, and connect with others on a deeper level. I also engage in photo editing, video editing, and journaling, believing in continuous self-discovery and in pushing my boundaries to better understand both myself and the world around me.
  <br /><br />
  With every project, competition, and line of code, I aim to grow not just as a Computer Science student, but as a thoughtful and impact-driven individual ready to contribute meaningfully to the tech world.
</p>

        </div>

        <div className="ppm-container">
          <div className="ppm-image-wrapper">
            <img src="pattipromax.jpg" alt="No Image here" className="ppm" />
            <a
              href="https://linktr.ee/abdullahpatti?utm_source=linktree_profile_share&ltsid=f18c952d-332f-4d07-a1d2-110b51c2f023"
              target="_blank"
              rel="noopener noreferrer"
              className="ppm-button"
            >
              LinkTree
            </a>
          </div>

         <a href="/Abdullah_Haroon_CV.pdf" download="Abdullah_Haroon_CV.pdf" className="cv-button">
  Download CV
</a>

        </div>
      </div>
    </section>
  );
}

export default Home;
