import myPhoto from './my_photo.png';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <section id="home">

        <div className="header">
          <img src={myPhoto} alt="My Profile" className="profile-img" />

          <div className="intro">
            <h1>I Jaswanth</h1>
            <p>
              Aspiring Software Developer focused on building strong fundamentals
              and solving real-world problems through code.
            </p>

            {/* 🔥 ADDED BUTTONS */}
            <div className="action-buttons">
              <a 
                href="/Resume_ITPD.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn primary"
              >
                Resume
              </a>

              <a 
                href="https://github.com/jaswanth-student" 
                target="_blank" 
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/i-jaswanth-4861a9323/" 
                target="_blank" 
                rel="noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </div>

        <div className="section">
          <h2>About Me</h2>
          <p>
            I am a third-year Integrated M.Tech student at Mahindra University.
            I focus on mastering core concepts and applying them practically.
            I am adaptable, consistent, and continuously improving my skills.
          </p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <p>JavaScript • React • HTML • CSS • Python • Data Structures</p>
        </div>

        <div className="section">
          <h2>Research Interests</h2>
          <p>AI, Machine Learning, Web Development</p>
        </div>

        <div className="section">
          <h2>Personal Details</h2>
          <div className="details">
            <p><strong>Name:</strong> I Jaswanth</p>
            <p><strong>Phone:</strong> +91 6281390224</p>
            <p><strong>Email:</strong> jaswanth6281390224@gmail.com</p>
            <p><strong>College Email:</strong> se23umcs015@mahindrauniversity.edu.in</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;