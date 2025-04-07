import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a UX designer with a passion for creating intuitive and beautiful user experiences. 
              With a background in design and a growing expertise in React development, I bridge the gap 
              between design and implementation.
            </p>
            <p>
              My approach combines user-centered design principles with modern web technologies to create 
              seamless digital experiences that solve real problems for users.
            </p>
            <div className="about__skills">
              <h3>Skills</h3>
              <div className="about__skills-grid">
                <div className="about__skill">
                  <span className="about__skill-name">UX Design</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="about__skill">
                  <span className="about__skill-name">UI Design</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="about__skill">
                  <span className="about__skill-name">React</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="about__skill">
                  <span className="about__skill-name">JavaScript</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="about__skill">
                  <span className="about__skill-name">HTML/CSS</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="about__skill">
                  <span className="about__skill-name">Figma</span>
                  <div className="about__skill-bar">
                    <div className="about__skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__image">
            <div className="about__image-placeholder">
              <span>About Me</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 