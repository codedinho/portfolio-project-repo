import React, { useState, useEffect, useRef } from 'react';

// Project Images
const guessThisImageUrl = `${import.meta.env.BASE_URL}imgs/guess-this-pic-2.jpg`;
const aiAssistantImageUrl = `${import.meta.env.BASE_URL}imgs/ai-assistant-app-pic-1.jpg`;
const emPowerToolsImageUrl = `${import.meta.env.BASE_URL}imgs/em-powertools-pic-1.jpg`;
const idleConflictImageUrl = `${import.meta.env.BASE_URL}imgs/idle-conflict-pic-1.jpg`;

const emPowerToolsCableDemo = `${import.meta.env.BASE_URL}videos/em-powertools-cable-database-demo.mp4`;
const emPowerToolsCalulatorsDemo = `${import.meta.env.BASE_URL}videos/em-powertools-calculators-demo.mp4`;

// Icon Images
const githubIcon = `${import.meta.env.BASE_URL}icons/github.png`;
const githubHoverIcon = `${import.meta.env.BASE_URL}icons/github-hover.png`;
const websiteLinkIcon = `${import.meta.env.BASE_URL}icons/websitelink.png`;
const websiteLinkHoverIcon = `${import.meta.env.BASE_URL}icons/websitelink-hover.png`;

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
    fullDescription: `
      <h2>EM Power Tools - HV Solutions Software</h2>
      <p>This project provides an all-in-one private cable database and solutions calculator for high voltage cable systems in the UK.</p>
      
      <h3>Project Overview</h3>
      <p>The EM Power Tools application is designed to serve as a comprehensive solution for managing high voltage cable databases and performing complex engineering calculations. The system leverages MongoDB for data storage, a Node.js server, and a frontend built with JavaScript, HTML, and CSS. Deployment is handled through Heroku.</p>
      
      <h3>Cable Database Management</h3>
      <p>This section of the app allows users to manage their own private cable databases. Each user can add, sort, and filter cables based on their specific requirements. The cable management feature includes:</p>
      <ul>
        <li><strong>Customizable Cable Database:</strong> Users can add their own cables or use a preset bank of cables.</li>
        <li><strong>Sorting and Filtering:</strong> Cables can be sorted based on suitability for specific projects.</li>
        <li><strong>Project Integration:</strong> Selected cables can be added to projects, enabling detailed calculations and suitability assessments.</li>
      </ul>
      <p>Video one demonstrates the functionality of the cable management database.</p>
      <video controls style="width: 100%; border-radius: 10px; max-width: 1000px; margin: 0px auto; display: block; align-self: center;">
        <source src="${emPowerToolsCableDemo}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
      <h3>Advanced Calculators</h3>
      <p>The second major feature of the app is a suite of advanced calculators designed for high voltage engineering calculations. These include:</p>
      <ul>
        <li><strong>High Voltage Calculators:</strong> Perform detailed voltage-related calculations.</li>
        <li><strong>Per Unit Calculations:</strong> Essential for system stability and design.</li>
        <li><strong>CT Sizer:</strong> Calculate and size current transformers accurately.</li>
      </ul>
      <p>Video two showcases the functionality of these calculators.</p>
      <video controls style="width: 100%; border-radius: 10px; max-width: 1000px; margin: 0px auto; display: block; align-self: center;">
        <source src="${emPowerToolsCalulatorsDemo}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
      <h3>Technical Challenges and Solutions</h3>
      <p>Developing this application presented several technical challenges, including:</p>
      <ul>
        <li><strong>Responsive Calculations:</strong> Ensuring all calculations update dynamically and correctly when any field is changed required careful sequencing and error handling.</li>
        <li><strong>User Authentication:</strong> Implementing secure login with encrypted passwords to protect user data.</li>
        <li><strong>Database Management:</strong> Creating an efficient and secure database structure to handle extensive cable data and user-specific information.</li>
      </ul>
      <p>Overcoming these challenges involved close collaboration with top engineers to validate calculations and ensure the app's reliability and accuracy.</p>
      
      <h3>Project Deployment and Future Plans</h3>
      <p>The app is deployed on Heroku, providing a scalable and reliable platform for users. Future plans include leasing the app to companies in the UK on a subscription basis, tailored to their specific high voltage engineering needs.</p>
      
      <h3>Conclusion</h3>
      <p>The EM Power Tools project highlights my ability to deliver complex, high-functionality web applications. By automating intricate engineering calculations and providing a user-friendly interface, this app significantly reduces the time required for project planning and execution while minimizing the risk of human error.</p>
    `,
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
            <h5 style={styles.modalHeader}>{modalProject.title}</h5>
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
    marginTop: '50px',
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
    paddingLeft: '60px',
    paddingRight: '60px',
    paddingBottom: '40px',
    borderRadius: '20px',
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
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#1d1d1d',
    color: '#FFF',
    fontSize: '20px',
    fontWeight: '500',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Mulish, sans-serif',
  },
  modalHeader: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
    marginLeft: '-60px', // Negative margin to counteract padding
    marginTop: '0px', // Negative margin to counteract padding
    marginRight: '-60px', // Negative margin to counteract padding
    paddingLeft: '60px', // Add padding back to maintain internal spacing
    paddingRight: '60px', // Add padding back to maintain internal spacing
    color: 'white',
    backgroundColor:'#1d1d1d',
    borderRadius: '20px 20px 0 0',
  },
  video: {
    width: '100%',
    maxWidth: '600px',
    margin: '10px auto', // Center the video horizontally
    display: 'block',
  },
};

export default Projects;
