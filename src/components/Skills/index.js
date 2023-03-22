import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Skills({language}) {
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    triggerOnce: true,
  });

  const [show, setShow] = useState("");

  const handleClickFront = () => {
    setShow("front");
  };

  const handleClickBack = () => {
    setShow("back");
  };

  const handleClickTools = () => {
    setShow("tools");
  };

  return (
    <div className="skills">
      <div className="skills-container">
        <h1 ref={aboutRef} className={`${"skills-title"} ${aboutIsVisible ? "animateFadein" : ""}`}>SKILLS</h1>
          <ul className="skills-topics">
            <li className="skills-topic" onClick={handleClickFront}>FRONT</li>
            <li className="skills-topic" onClick={handleClickBack}>BACK</li>
            <li className="skills-topic" onClick={handleClickTools}>TOOLS</li>
          </ul>
          {show ==="front" && 
            <ul className="skills-items">
              <li className="skills-item">
                <img src="/images/html-5.png" className="skills-item--logo" alt="html5"/>
                <p className="skills-item--name">HTML5</p>
              </li>
              <li className="skills-item">
                <img src="/images/css-3.png" className="skills-item--logo" alt="css3"/>
                <p className="skills-item--name">CSS3</p>
              </li>
              <li className="skills-item">
                <img src="/images/sass.png" className="skills-item--logo" alt="sass"/>
                <p className="skills-item--name">Sass</p>
              </li>
              <li className="skills-item">
                <img src="/images/js.png" className="skills-item--logo" alt="js"/>
                <p className="skills-item--name">JavaScript</p>
              </li>
              <li className="skills-item">
                <img src="/images/tailwindcss-icon.svg" className="skills-item--logo" alt="tailwind"/>
                <p className="skills-item--name">Tailwind</p>
              </li>
              <li className="skills-item">
                <img src="/images/atom.png" className="skills-item--logo" alt="react"/>
                <p className="skills-item--name">ReactJS</p>
              </li>
              <li className="skills-item">
                <img src="/images/redux.svg" className="skills-item--logo" alt="redux"/>
                <p className="skills-item--name">Redux</p>
              </li>
            </ul>
          }
          {show ==="back" && 
            <ul className="skills-items">
              <li className="skills-item">
                <img src="/images/nodejs-horizontal.svg" className="skills-item--logo" alt="node"/>
                <p className="skills-item--name">NodeJS</p>
              </li>
              <li className="skills-item">
                <img src="/images/express-seeklogo.com.svg" className="skills-item--logo" alt="express"/>
                <p className="skills-item--name">ExpressJS</p>
              </li>
              <li className="skills-item">
                <img src="/images/sequelizejs-icon.svg" className="skills-item--logo" alt="sequelize"/>
                <p className="skills-item--name">Sequelize</p>
              </li>
              <li className="skills-item">
                <img src="/images/postgresql-icon.svg" className="skills-item--logo" alt="postgresql"/>
                <p className="skills-item--name">PostgreSQL</p>
              </li>
              <li className="skills-item">
                <img src="/images/rest-api-icon.svg" className="skills-item--logo" alt="restfulapi"/>
                <p className="skills-item--name">RESTfulAPI</p>
              </li>
              <li className="skills-item">
                <img src="/images/mongodb-icon.svg" className="skills-item--logo" alt="mongodb"/>
                <p className="skills-item--name">MongoDB</p>
              </li>
            </ul>
          }
          {show ==="tools" && 
            <ul className="skills-items">
              <li className="skills-item">
                <img src="/images/agile.png" className="skills-item--logo" alt="agile"/>
                <p className="skills-item--name">Agile</p>
              </li>
              <li className="skills-item">
                <img src="/images/git-scm-icon.svg" className="skills-item--logo" alt="git"/>
                <p className="skills-item--name">Git</p>
              </li>
              <li className="skills-item">
                <img src="/images/icons8-github-64.png" className="skills-item--logo" alt="github"/>
                <p className="skills-item--name">GitHub</p>
              </li>        
              <li className="skills-item">
                <img src="/images/js_webpack-icon.svg" className="skills-item--logo" alt="webpack"/>
                <p className="skills-item--name">Webpack</p>
              </li>        
              <li className="skills-item">
                <img src="/images/jestjsio-icon.svg" className="skills-item--logo" alt="jest"/>
                <p className="skills-item--name">Jest</p>
              </li>    
              <li className="skills-item">
                <img src="/images/heroku-icon.svg" className="skills-item--logo" alt="heroku"/>
                <p className="skills-item--name">Heroku</p>
              </li>    
              <li className="skills-item">
                <img src="/images/netlify-icon.svg" className="skills-item--logo" alt="netlify"/>
                <p className="skills-item--name">Netlify</p>
              </li>                        
              <li className="skills-item">
                <img src="/images/socketio-icon.svg" className="skills-item--logo" alt="socketio"/>
                <p className="skills-item--name">Socketio</p>
              </li>
              <li className="skills-item">
                <img src="/images/axios-icon.svg" className="skills-item--logo" alt="axios"/>
                <p className="skills-item--name">Axios</p>
              </li>
            </ul>
          }
      </div>
    </div>
  )
}

Skills.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Skills