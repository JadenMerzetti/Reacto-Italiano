import React, { useState } from 'react';

function MainContent({ activeButton }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(inputEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
    } else if (emailError) {
      alert('Please correct the email address.');
    } else {
      alert('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };


  let content;

    content = (
        <div className="about-me-section">
        <h2>About Me</h2>
        <p>
          I am a full-stack certification student with a unique background in philosophy, holding two degrees in the field. My journey in web development is fueled by a deep passion for both technology and critical thinking.
        </p>
        <img src="Images/JadenMerzetti.png" alt="Profile Picture" />
      </div>
    );

    if (activeButton === 'Portfolio') {
    content = (
        <div className="portfolio">
        <div className="showcase">
          {[
            { src: 'Images/project1.png', alt: 'Project 1', description: 'The Note Taker Challenge is a user-friendly web app for creating, viewing, and deleting notes. Developed to showcase web development skills, it employs Node.js and Express.js, offering an efficient way to organize important information. Users can run it locally by cloning the GitHub repository.' },
            { src: 'Images/project2.jpg', alt: 'Project 2', description: 'Loghi Creati-Dinamicamente is a command-line application that allows users to design custom logos by specifying text, text color, shape, and shape background color. It creates scalable vector graphics (SVG) files representing the logos based on user input.' },
            { src: 'Images/project3.jpg', alt: 'Project 3', description: 'MeteoRicerca is a weather search application that allows users to get weather information for various cities around the world. Users can enter a city name in the search box and click the "Search" button to retrieve the weather data. The application displays the current weather conditions, a five-day forecast, and keeps a history of past searches.' },
            { src: 'Images/project4.jpg', alt: 'Project 4', description: 'This project is a code quiz game that features a timer, questions, and scoring. When users click the start button, a timer initiates, and questions are displayed. Correct answers lead to the next question, while incorrect ones deduct time. The game ends when all questions are answered or the timer expires. Afterward, players can save their initials and score.' },
            { src: 'Images/project5.jpg', alt: 'Project 5', description: 'File leggimi dinamico is a command-line application designed to streamline the process of creating well-structured and informative README files for your projects. Rather than manually writing and formatting README files, this tool allows you to generate README files dynamically based on your input.' },
            { src: 'Images/project6.jpg', alt: 'Project 6', description: 'Segui gli Impiegati la Missione Tracking is a command-line application that allows you to manage employee information, departments, roles, and more. It uses Node.js, Inquirer, and MySQL to provide a simple interface for performing various tasks related to employee management.' },
          ].map((project, index) => (
            <div className="project" key={index}>
              <img src={project.src} alt={project.alt} />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (activeButton === 'Resume') {
    content = (
      <div className="resume">
        <h1>Resume</h1>
        <img src="Images/Jaden_Merzetti_Resume.jpg" alt="Resume Picture" />
        <p>Download my resume: <a href="C:\Users\jaden\Documents\BootcampWorkplace\Challenges\react-italiano\src\Images\Jaden_Merzetti_Resume.jpg" download>Jaden_Merzetti_Resume.jpg</a></p>
        <h2>Proficiencies</h2>
        <ul>
          <li>Front-end Development</li>
          <li>Back-end Development</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
    );
  } else if (activeButton === 'Contact Me') {
    content = (
        <div className="contact">
  <h1>Contact Me</h1>
  <form>
    <div className="form-group">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="form-input"
        title="Enter your name"
      />
    </div>
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="form-input"
        title="Enter a valid email address"
      />
    </div>
    <div className="form-group">
      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className="form-input"
        title="Enter your message"
      />
    </div>
    <button type="submit" className="form-button">Submit</button>
  </form>
</div>
    );
  }

  return <div className="main-content">{content}</div>;
}

export default MainContent;



