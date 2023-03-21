import { useInView } from 'react-intersection-observer';
import './style.scss';

function Skills() {
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="skills">
      <div className="skills-container">
        <h1 ref={aboutRef} className={`${"skills-title"} ${aboutIsVisible ? "animateFadein" : ""}`}>SKILLS</h1>
          <ul className="skills-items">
            <li className="skills-items--skill">FRONT</li>
            <li className="skills-items--skill">BACK</li>
            <li className="skills-items--skill">TOOLS</li>
          </ul>
      </div>
    </div>
  )
}

export default Skills