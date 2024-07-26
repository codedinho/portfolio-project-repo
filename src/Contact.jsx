import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <div id="contact" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h3>CONTACT</h3>
          <h2>Don't be shy! Hit me up 👇</h2>
          <div style={styles.contactDetails}>
            <div style={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
              <span>Brighton, UK</span>
            </div>
            <div style={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
              <span>codedinho@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  textContainer: {
    flex: 1,
    marginRight: '20px',
    color: '#363638',
    textAlign: 'left',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: '20px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'left',
    marginRight: '20px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '24px',
    color: 'gray',
  },
};

export default Contact;