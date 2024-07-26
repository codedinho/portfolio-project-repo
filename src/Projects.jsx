import React, { useState, useEffect, useRef } from 'react';

// Project Images
const guessThisImageUrl = `${import.meta.env.BASE_URL}docs/imgs/guess-this-pic-2.jpg`;
const aiAssistantImageUrl = `${import.meta.env.BASE_URL}docs/imgs/ai-assistant-app-pic-1.jpg`;
const emPowerToolsImageUrl = `${import.meta.env.BASE_URL}docs/imgs/em-powertools-pic-1.jpg`;
const idleConflictImageUrl = `${import.meta.env.BASE_URL}docs/imgs/idle-conflict-pic-1.jpg`;

// Icon Images
const githubIcon = `${import.meta.env.BASE_URL}docs/icons/github.png`;
const githubHoverIcon = `${import.meta.env.BASE_URL}docs/icons/github-hover.png`;
const websiteLinkIcon = `${import.meta.env.BASE_URL}docs/icons/websitelink.png`;
const websiteLinkHoverIcon = `${import.meta.env.BASE_URL}docs/icons/websitelink-hover.png`;

console.log("Guess This Image URL:", guessThisImageUrl);
console.log("AI Assistant Image URL:", aiAssistantImageUrl);
console.log("EM Power Tools Image URL:", emPowerToolsImageUrl);
console.log("Idle Conflict Image URL:", idleConflictImageUrl);
console.log("GitHub Icon:", githubIcon);
console.log("GitHub Hover Icon:", githubHoverIcon);
console.log("Website Link Icon:", websiteLinkIcon);
console.log("Website Link Hover Icon:", websiteLinkHoverIcon);



const projects = [
  {
    title: "GUESS THIS! - Interactive Learning Web App",
    description: "Online learning interactive web app; Geography, Maths, Dates, Words & much more.",
    fullDescription: `
      <h2>Introduction</h2>
      <p>A comprehensive learning game designed to enhance knowledge in dates, capitals, geography, maths & general guessing topics. Built with JavaScript, HTML, and CSS, the game features robust login/database mechanics, high scores, and global leaderboards. It's hosted on Heroku and managed via GitHub.</p>
      
      <h2>Concept and Features</h2>
      <p>This game offers multiple interactive modes to cater to different learning styles:</p>
      <ul>
        <li><strong>Survival Mode:</strong> Answer questions continuously to achieve the highest streak.</li>
        <li><strong>1v1 Mode:</strong> Compete head-to-head in real-time.</li>
        <li><strong>Category Selection:</strong> Choose from various educational categories like dates, capitals, and geography.</li>
      </ul>
      <p>These modes make the game versatile and educational, providing a unique learning experience.</p>
      
      <h3>Key Features</h3>
      <p>The game includes several key features to enhance user engagement and learning:</p>
      <ul>
        <li><strong>Responsive Design:</strong> Ensures a seamless experience across all devices.</li>
        <li><strong>Real-Time Interaction:</strong> Supports real-time 1v1 player interaction using WebSockets.</li>
        <li><strong>User Authentication:</strong> A comprehensive login system to create accounts, log in, and track progress.</li>
        <li><strong>Database Integration:</strong> Stores user data, high scores, and game statistics.</li>
        <li><strong>Leaderboards:</strong> Global leaderboards add a competitive edge to the learning experience.</li>
        <li><strong>Intuitive UI:</strong> A clean and engaging user interface with dynamic elements and smooth transitions.</li>
        <li><strong>Chat Forums:</strong> Connecting users via the online forum to discuss elements of the game.</li>
      </ul>
      
      <h2>Challenges Overcome</h2>
      <p>Throughout development, several challenges were tackled:</p>
      <ul>
        <li><strong>Responsive Design:</strong> Ensuring optimal performance on all devices required meticulous CSS work and thorough testing across various screen sizes.</li>
        <li><strong>Real-Time Socket Implementation:</strong> Smooth and reliable communication during 1v1 matches was achieved through effective handling of WebSocket protocols and asynchronous events.</li>
        <li><strong>Database Management:</strong> Secure and efficient data handling was crucial for features like high scores and leaderboards. This involved careful schema design and optimization.</li>
        <li><strong>User Authentication:</strong> Balancing security and user-friendliness in the registration, login, and session management processes.</li>
        <li><strong>Global Leaderboards:</strong> Aggregating data from multiple users and presenting it accurately and engagingly required efficient querying and processing.</li>
        <li><strong>Database Construction:</strong> Adding and sourcing reliable data for my database via APIs, creating a unique base of questions relevant to each guessing category. The GuessThis database now consists of over 30,000 unique dates, locations, riddles, equations, words, statistics and more.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <p>The project utilized a range of technologies to achieve its goals:</p>
      <ul>
        <li><strong>JavaScript:</strong> Core logic and interactivity.</li>
        <li><strong>HTML/CSS:</strong> Structure and styling for a visually appealing and responsive design.</li>
        <li><strong>WebSockets:</strong> Real-time player interactions in 1v1 mode.</li>
        <li><strong>Heroku:</strong> Hosting platform for scalable and reliable deployment.</li>
        <li><strong>GitHub:</strong> Version control and collaboration.</li>
        <li><strong>Database:</strong> Persistent and accurate data management.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This project showcases my ability to create engaging, user-friendly, and technically robust web applications. Taking an idea from inception, all the way through to deployment. Explore the project on GitHub and experience it live on the Heroku site link.</p>
    `,
    imageUrl: guessThisImageUrl,
    sourceCode: "https://github.com/codedinho/guess-this",
    websiteLink: "https://guess-this-app-baa2cf38f7de.herokuapp.com/",
  },
  {
    title: "AI ASSISTANT - ChatGPT Private Room",
    description: "ChatGPT meets Spotify; All of Alexa's functionality with ChatGPT's brain, split into various personalities!",
    fullDescription: "Full description of project two.",
    imageUrl: aiAssistantImageUrl,
    sourceCode: "https://github.com/codedinho/jarvis",
    websiteLink: "#",
  },
  {
    title: "EM POWER TOOLS - HV Solutions Software",
    description: "All in one private cable database and solutions calculator for high voltage cable systems in the UK.",
    fullDescription: "Full description of project three.",
    imageUrl: emPowerToolsImageUrl,
    sourceCode: "https://github.com/codedinho/EMPowerTools",
    websiteLink: "#",
  },
  {
    title: "IDLE CONFLICT - Online Multiplayer Idle War Game",
    description: "An immersive online war strategy game, focused on idle gameplay and RNG based outcomes.",
    fullDescription: "Full description of project four.",
    imageUrl: idleConflictImageUrl,
    sourceCode: "https://github.com/codedinho/idle-conflict",
    websiteLink: "#",
  },
];

export const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation);
          observer.unobserve(entry.target);
        }
      });
    });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div id="projects" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textContainer} ref={(el) => (elementsRef.current[0] = el)} data-animation="slide-in-left">
          <h3>PROJECTS</h3>
          <h2>Here's some of my latest work 👨‍💻</h2>
          <p>This is where the writeup goes</p>
        </div>
        <div style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.project}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              data-animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
            >
              <div style={styles.imageContainer}>
                <img 
                  src={project.imageUrl} 
                  alt={`Project ${index + 1} Image`} 
                  style={styles.image} 
                  onError={(e) => {
                    console.error(`Image failed to load: ${project.imageUrl}`);
                    e.target.style.display = 'none'; // Hide the broken image
                  }} 
                />
              </div>
              <div style={styles.projectTextContainer}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={styles.buttonsContainer}>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <img
                      src={githubIcon}
                      alt="Source Code"
                      style={styles.icon}
                      onMouseOver={(e) => (e.currentTarget.src = githubHoverIcon)}
                      onMouseOut={(e) => (e.currentTarget.src = githubIcon)}
                    />
                  </a>
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={websiteLinkIcon}
                      alt="Website Link"
                      style={styles.icon}
                      onMouseOver={(e) => (e.currentTarget.src = websiteLinkHoverIcon)}
                      onMouseOut={(e) => (e.currentTarget.src = websiteLinkIcon)}
                    />
                  </a>
                  <span style={styles.seeMore} onClick={() => openModal(project)}>Project Details &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h5>{modalProject.title}</h5>
            <div dangerouslySetInnerHTML={{ __html: modalProject.fullDescription }} />
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px',
    height: '100%',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  textContainer: {
    marginBottom: '50px',
    color: '#363638',
    textAlign: 'left',
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  project: {
    flex: '1 0 45%',
    margin: '20px',
    textAlign: 'left',
    minWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '40px',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    minWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '40px 40px 0 0',  // Match the AboutMe image styling
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Match the AboutMe image styling
  },
  projectTextContainer: {
    padding: '20px',
    position: 'relative',
  },
  buttonsContainer: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  seeMore: {
    marginLeft: 'auto',
    cursor: 'pointer',
    fontWeight: '700',
    textDecoration: 'underline',
  },
  modalOverlay: {
    position: 'fixed',
    top: '40px',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: '20px',
    borderRadius: '10px',
    width: '1000px',
    maxWidth: '80%',
    maxHeight: '80%',
    textAlign: 'left',
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#1d1d1d',
    color: '#FFF',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default Projects;
