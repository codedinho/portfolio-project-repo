import React, { useEffect, useRef } from 'react';
const imageUrl = `${import.meta.env.BASE_URL}imgs/about-me-photo.jpg`;

export const AboutMe = () => {
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

  return (
    <div id="about" style={styles.container}>
      <div
        style={styles.content}
        ref={(el) => (elementsRef.current[0] = el)}
        data-animation="slide-in-left"
      >
        <div style={styles.imageContainer}>
          <img src={imageUrl} alt="About Pic" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h3 id="aboutTitle">ABOUT ME</h3>
          <h2>Full-Stack Developer based in Brighton, UK 📍</h2>
          <p>
            I'm a full-stack Developer currently using React, JavaScript, HTML5 & CSS. I enjoy creating and developing clean code and a pleasing UI/UX for my users.<br /><br />
            My main stack currently is the MERN stack; MongoDB, Express.js, React.js/React Native & Node.js.
          </p>
        </div>
      </div>
      <div
        style={styles.divider}
        ref={(el) => (elementsRef.current[1] = el)}
        data-animation="slide-in-up"
      >
        <div id="dividerLine"></div>
      </div>
      <div style={styles.skillsSection}>
        <div style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div
              style={styles.skillCard}
              key={index}
              ref={(el) => (elementsRef.current[index + 2] = el)}
              data-animation="slide-in-right"
            >
              <div style={styles.skillHeader}>
                <i className={skill.icon} style={styles.skillIcon}></i>
                <div style={styles.skillText}>
                  <div>{skill.title}</div>
                </div>
              </div>
              <div style={styles.skillDescription}>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const skills = [
  {
    title: 'Front-End',
    icon: 'fas fa-laptop-code',
    description: 'HTML, CSS, JavaScript & React.js/React Native. Fully Responsive & Aesthetic Modern UI/UX.',
  },
  {
    title: 'Back-End',
    icon: 'fas fa-server',
    description: 'Node.js, Express.js, MongoDB, SQL, APIs, Database Management, Basic AI/Machine Learning & Reporting Services.',
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-tools',
    description: 'Git, Heroku, AWS, Figma, ChatGPT, ProTools, Ableton, Canva, Basic UE5.',
  },
  {
    title: 'Other Skills',
    icon: 'fas fa-music',     
    description: 'Qualified Audio Engineer, Game Design/Development, UI/UX Design, Live Chat & Bot Services.',
  },
  {
    title: 'Personality Traits',
    icon: 'fas fa-user-tie',
    description: 'Friendly, Passionate, Resourceful & A Fast Learner.',
  },
  {
    title: 'Other Experience',
    icon: 'fas fa-briefcase',
    description: 'Full Business Startup & Management, Customer Service, Sales.',
  },
];

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    paddingBottom: '150px',
    height: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '50px auto',
    flexWrap: 'wrap',
  },
  divider: {
    height: '2px',
    maxWidth: '600px',
    backgroundColor: '#ccc',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '50px',
    opacity: '0.2',
  },
  textContainer: {
    flex: 1,
    margin: '20px',
    color: '#363638',
    minWidth: '300px',
    textAlign: 'left',
  },
  imageContainer: {
    flex: 1,
    margin: '20px',
    minWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  skillsSection: {
    marginTop: '50px',
  },
  skillsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  skillCard: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '40px',
    padding: '20px',
    width: '265px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  },
  skillHeader: {
    backgroundColor: '#ececec',
    padding: '10px 20px', // Padding left and right only
    borderRadius: '40px 40px 0 0',
    margin: '-20px -20px 10px -20px', // Negative margin to offset padding
    fontFamily: 'Poppins, sans-serif',
  },
  skillText: {
    color: '#1d1d1d',
    margin: '10px auto',
    fontWeight: '600',
    fontSize: '18px',
  },
  skillDescription: {
    margin: '10px auto',
    fontWeight: '400',
    fontSize: '16px',
  },
  skillIcon: {
    fontSize: '44px',
    color: '#1d1d1d',
    marginTop: '10px',
  },
};

export default AboutMe;
