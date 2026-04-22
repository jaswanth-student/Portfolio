// import "./Projects.css";
// import memoryImg from "./memory_image.png";
// import chronosImg from "./project_chronos.png"; // or your second image
// function Projects() {
//   return (
//     <div className="projects-container">

//       <h1>My Projects</h1>
//       <p className="projects-subtitle">
//         A showcase of my work, combining problem-solving, design, and development.
//       </p>

//       <div className="projects-grid">

//         {/* Project 1 */}
//         <div className="project-card">

//           <div className="project-image">
//             <img src={memoryImg} alt="Memory Game"/>
//           </div>

//           <div className="project-content">
//             <h2>Memory Game</h2>

// <p>
//   A React-based interactive memory game that enhances logical thinking and 
//   concentration through engaging gameplay. 
// </p>

// <ul>
//   <li>Developed using React functional components and hooks</li>
//   <li>Game reset and replay functionality</li>
// </ul>

//             <div className="tech-stack">
//               <span>React</span>
//               <span>JavaScript</span>
//               <span>CSS</span>
//             </div>

//             <div className="project-buttons">
//               <a href="https://github.com/jaswanth-student/Memory-Game" target="_blank" rel="noreferrer">
//                 Code
//               </a>
//               <a href="#" className="live-btn">Live</a>
//             </div>
//           </div>

//         </div>

//         {/* Project 2 */}
//         <div className="project-card">

//           <div className="project-image">
//             <img src={chronosImg} alt="Project Chronos"/>
//           </div>

//           <div className="project-content">
//             <h2>Project Chronos</h2>

//             <p>
//               Machine learning system for analyzing historical data and generating 
//               predictive insights for archaeological research.
//             </p>
//             <ul>
//   <li>Built ML model for historical data analysis</li>
//   <li>Performed data preprocessing and feature engineering</li>
// </ul>
//             <div className="tech-stack">
//               <span>Python</span>
//               <span>Machine Learning</span>
//               <span>Data Analysis</span>
//             </div>

//             <div className="project-buttons">
//               <a href="https://github.com/jaswanth-student/Reconstruction-report" target="_blank" rel="noreferrer">
//                 Code
//               </a>
//               <a href="#" className="live-btn">Live</a>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Projects;









import "./Projects.css";
import memoryImg from "./memory_image.png";
import chronosImg from "./project_chronos.png";

function Projects() {
  return (
    <div className="projects-container">

      {/* HEADER BOX (ADDED) */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-subtitle">
          A showcase of my work, combining problem-solving, design, and development.
        </p>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-image">
            <img src={memoryImg} alt="Memory Game"/>
          </div>

          <div className="project-content">
            <h2>Memory Game</h2>

            <p>
              A React-based interactive memory game that enhances logical thinking and 
              concentration through engaging gameplay. 
            </p>

            <ul>
              <li>Developed using React functional components and hooks</li>
              <li>Game reset and replay functionality</li>
            </ul>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="project-buttons">
              <a href="https://github.com/jaswanth-student/Memory-Game" target="_blank" rel="noreferrer">
                Code
              </a>
              <a href="#" className="live-btn">Live</a>
            </div>
          </div>

        </div>

        {/* Project 2 */}
        <div className="project-card">

          <div className="project-image">
            <img src={chronosImg} alt="Project Chronos"/>
          </div>

          <div className="project-content">
            <h2>Project Chronos</h2>

            <p>
              Machine learning system for analyzing historical data and generating 
              predictive insights for archaeological research.
            </p>

            <ul>
              <li>Built ML model for historical data analysis</li>
              <li>Performed data preprocessing and feature engineering</li>
            </ul>

            <div className="tech-stack">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
            </div>

            <div className="project-buttons">
              <a href="https://github.com/jaswanth-student/Reconstruction-report" target="_blank" rel="noreferrer">
                Code
              </a>
              <a href="#" className="live-btn">Live</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Projects;