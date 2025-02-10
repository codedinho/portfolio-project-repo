import React, { useState, useEffect, useRef } from 'react';

// Project Images
const sweepingHandsImageUrl = `${import.meta.env.BASE_URL}imgs/sweeping-hands-pic.png`;
const guessThisImageUrl = `${import.meta.env.BASE_URL}imgs/guess-this-pic-2.JPG`;
const aiAssistantImageUrl = `${import.meta.env.BASE_URL}imgs/ai-assistant-app-pic-1.JPG`;
const emPowerToolsImageUrl = `${import.meta.env.BASE_URL}imgs/em-powertools-pic-1.JPG`;
const idleConflictImageUrl = `${import.meta.env.BASE_URL}imgs/idle-conflict-pic-1.JPG`;
const hebeCafeImageUrl = `${import.meta.env.BASE_URL}imgs/hebe-cafe.png`;

// New: Sweeping Hands Site Gallery Images (1-4)
const sweepingHandsSite1ImageUrl = `${import.meta.env.BASE_URL}imgs/sweeping-hands-site-1.png`;
const sweepingHandsSite2ImageUrl = `${import.meta.env.BASE_URL}imgs/sweeping-hands-site-2.png`;
const sweepingHandsSite3ImageUrl = `${import.meta.env.BASE_URL}imgs/sweeping-hands-site-3.png`;
const sweepingHandsSite4ImageUrl = `${import.meta.env.BASE_URL}imgs/sweeping-hands-site-4.png`;

// New: Arguably Screenshots
const arguably1ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-1.PNG`;
const arguably2ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-2.PNG`;
const arguably3ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-3.PNG`;
const arguably4ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-4.PNG`;
const arguably5ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-5.PNG`;
const arguably6ImageUrl = `${import.meta.env.BASE_URL}imgs/arguably-6.PNG`;

const emPowerToolsCableDemo = `${import.meta.env.BASE_URL}videos/em-powertools-cable-database-demo.mp4`;
const emPowerToolsCalulatorsDemo = `${import.meta.env.BASE_URL}videos/em-powertools-calculators-demo.mp4`;

// Icon Images
const githubIcon = `${import.meta.env.BASE_URL}icons/github.png`;
const githubHoverIcon = `${import.meta.env.BASE_URL}icons/github-hover.png`;
const websiteLinkIcon = `${import.meta.env.BASE_URL}icons/websitelink.png`;
const websiteLinkHoverIcon = `${import.meta.env.BASE_URL}icons/websitelink-hover.png`;

const projects = [
  {
    title: "Sweeping Hands",
    description: "Luxury watch brand with a full range of features—including blog, personalized accounts, watch sourcing, buying/selling, wishlist, and branded filtering.",
    fullDescription: `
      <h2>Sweeping Hands</h2>
      <p>
        Sweeping Hands is a premier luxury watch brand built on Shopify, offering a posh and sophisticated online shopping experience. Beyond exquisite design, the platform integrates an engaging blog for watch insights, powerful tools to source, sell, and buy exclusive timepieces, and personalized features like customer accounts and wishlists.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Elegant & Responsive Design:</strong> Enjoy a sleek, minimalist interface crafted to reflect the luxury and quality of each timepiece.</li>
        <li><strong>Comprehensive E-commerce Capabilities:</strong> Seamlessly browse, purchase, and even sell or source exquisite watches online.</li>
        <li><strong>User Accounts & Wishlist:</strong> Create a personalized account to manage orders, save favorite pieces, and curate a wishlist tailored to your style.</li>
        <li><strong>Interactive Blog & Insights:</strong> Stay updated with industry news, style advice, and expert reviews showcasing the latest trends in luxury watches.</li>
        <li><strong>Advanced Filtering & Brand Showcase:</strong> Easily source your next watch through sophisticated filtering by brand, style, price, and more.</li>
      </ul>
      
      <h3>Visual Gallery</h3>
      <p>Explore a selection of site screenshots that capture the refined design and multifunctional features available at Sweeping Hands:</p>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <img src="${sweepingHandsSite1ImageUrl}" alt="Sweeping Hands Site 1" style="width: 48%; border-radius: 8px;">
        <img src="${sweepingHandsSite2ImageUrl}" alt="Sweeping Hands Site 2" style="width: 48%; border-radius: 8px;">
        <img src="${sweepingHandsSite3ImageUrl}" alt="Sweeping Hands Site 3" style="width: 48%; border-radius: 8px;">
        <img src="${sweepingHandsSite4ImageUrl}" alt="Sweeping Hands Site 4" style="width: 48%; border-radius: 8px;">
      </div>
      
      <h3>Platform & Technology</h3>
      <p>
        Powered by Shopify, the Sweeping Hands website leverages a robust e-commerce framework to safely handle transactions while delivering an elegant shopping experience. Whether you are here to source a watch, sell a collectible timepiece, or simply stay informed through the blog, every component is designed to meet the discerning demands of luxury watch aficionados.
      </p>
    `,
    imageUrl: sweepingHandsImageUrl,
    sourceCode: "", // Not applicable for Shopify projects
    websiteLink: "https://sweepinghands.co.uk/",
  },
  {
    title: "Arguably",
    description: "Social media app for debates and topical discussions using React Native.",
    fullDescription: `
      <h2>Arguably</h2>
      <p>Arguably is a dynamic social media platform for debates and topical discussions designed to foster engaging and thoughtful conversations on current issues. Built with React Native and powered by MongoDB, it provides full authentication, user registration, and a wide range of social interaction features – reminiscent of Instagram but focused on meaningful dialogue.</p>
      <p>The app features a clean and modern UI, ensuring an intuitive and secure user experience. With refined branding, appealing UI/UX, and scaled interactions, Argually is being developed with future deployment on the App Store in mind.</p>
      <h3>Key Features</h3>
      <ul>
        <li>User authentication and secure login</li>
        <li>Registration and profile management</li>
        <li>Post creation with liking, disliking, and commenting</li>
        <li>Intuitive navigation and engaging interactions</li>
        <li>Clean UI design with a modern, minimalist aesthetic</li>
      </ul>
      <h3>Gallery</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <img src="${arguably1ImageUrl}" alt="Arguably Screenshot 1" style="width: 30%; border-radius: 8px;">
        <img src="${arguably2ImageUrl}" alt="Arguably Screenshot 2" style="width: 30%; border-radius: 8px;">
        <img src="${arguably3ImageUrl}" alt="Arguably Screenshot 3" style="width: 30%; border-radius: 8px;">
        <img src="${arguably4ImageUrl}" alt="Arguably Screenshot 4" style="width: 30%; border-radius: 8px;">
        <img src="${arguably5ImageUrl}" alt="Arguably Screenshot 5" style="width: 30%; border-radius: 8px;">
        <img src="${arguably6ImageUrl}" alt="Arguably Screenshot 6" style="width: 30%; border-radius: 8px;">
      </div>
    `,
    imageUrl: arguably1ImageUrl,
    sourceCode: "https://github.com/codedinho/hebe-cafe", // In progress
    websiteLink: "#", // Not deployed yet
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
    fullDescription: `
      <h2>IDLE CONFLICT</h2>
      <p>IDLE CONFLICT is an innovative online multiplayer idle war game that blends strategic resource management with real-time combat. Inspired by idle titans like Melvor Idle, players gradually build and develop their accounts even when offline, aiming to assemble the mightiest army on the server.</p>
      
      <h3>Game Progression & Idle Gameplay</h3>
      <p>Begin with modest resources and a small unit, then invest time strategically to grow your forces. The game features deep idle mechanics that allow your progress to continue accumulating passively, with dynamic RNG calculations ensuring every playthrough offers fresh challenges and unique gear upgrades.</p>
      
      <h3>Multiplayer & Real-Time Combat</h3>
      <ul>
        <li><strong>Real-Time 1v1 Battles:</strong> Engage in competitive head-to-head combat powered by sockets for smooth, live interactions.</li>
        <li><strong>Account Authentication:</strong> Secure login and registration processes protect your progress and maintain a personalized gaming experience.</li>
        <li><strong>Leaderboards & Stats:</strong> Track your performance and rise in the rankings as you compete against players on the server.</li>
      </ul>
      
      <h3>Technical Architecture</h3>
      <ul>
        <li><strong>React:</strong> Built using HTML, CSS, and JavaScript, the client-side leverages React for a dynamic and responsive UI.</li>
        <li><strong>Socket.io:</strong> Enables robust real-time multiplayer interactions essential for live 1v1 combat.</li>
        <li><strong>MongoDB:</strong> Acts as the backend database to store user accounts, progression data, gear statistics, and leaderboard information.</li>
        <li><strong>RNG Algorithms:</strong> Power random gear generation and progression, keeping gameplay unpredictable and engaging.</li>
      </ul>
      
      <h3>Status and Future Development</h3>
      <p>Currently a work in progress, Idle Conflict promises to evolve into a rich, strategic multiplayer experience. Future updates will focus on refining idle mechanics, balancing combat, and expanding multiplayer capabilities. Although not deployed yet, the game is on track to deliver a competitive and highly engaging war strategy adventure.</p>
    `,
    imageUrl: idleConflictImageUrl,
    sourceCode: "https://github.com/codedinho/idle-conflict",
    websiteLink: "#",
  },
  {
    title: "Hebe Cafe Bar",
    description: "London based cafe. Minimalist static website.",
    fullDescription: `
      <h2>Hebe Cafe Bar</h2>
      <p>Hebe Cafe Bar is a London-based cafe website designed using React and JavaScript. Deployed on GitHub Pages, this static website features a clean, minimalist design that meets the client's specifications.</p>
      <h3>Features</h3>
      <ul>
        <li>Menu section showcasing the cafe's offerings</li>
        <li>Events section for upcoming events and promotions</li>
        <li>About section detailing the cafe's story</li>
        <li>Clean and simple navigation</li>
      </ul>
      <h3>Technical Details</h3>
      <p>Built with React and JavaScript, the site is hosted on GitHub Pages, providing a modern, efficient static website experience.</p>
    `,
    imageUrl: hebeCafeImageUrl,
    sourceCode: "https://github.com/codedinho/hebe-cafe",
    websiteLink: "https://codedinho.github.io/hebe-cafe/#/",
  },
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
          <p>Check out what I've been working on recently.</p>
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
                  style={
                    project.title === "Arguably" 
                      ? { ...styles.image, objectFit: "cover", maxHeight: "220px" } 
                      : styles.image
                  }
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
                  {project.sourceCode && project.sourceCode !== "#" && (
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <img
                        src={githubIcon}
                        alt="Source Code"
                        style={styles.icon}
                        onMouseOver={(e) => (e.currentTarget.src = githubHoverIcon)}
                        onMouseOut={(e) => (e.currentTarget.src = githubIcon)}
                      />
                    </a>
                  )}
                  {project.websiteLink && project.websiteLink !== "#" && (
                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={websiteLinkIcon}
                        alt="Website Link"
                        style={styles.icon}
                        onMouseOver={(e) => (e.currentTarget.src = websiteLinkHoverIcon)}
                        onMouseOut={(e) => (e.currentTarget.src = websiteLinkIcon)}
                      />
                    </a>
                  )}
                  <span style={styles.seeMore} onClick={() => openModal(project)}>Project Details &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <>
          <style>{`
            @keyframes modalPopup {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <div style={styles.modalOverlay} onClick={closeModal}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h5 style={styles.modalHeader}>{modalProject.title}</h5>
              <div dangerouslySetInnerHTML={{ __html: modalProject.fullDescription }} />
              <button onClick={closeModal} style={styles.closeButton}>Close</button>
            </div>
          </div>
        </>
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
    animation: 'modalPopup 0.5s ease-out',
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
