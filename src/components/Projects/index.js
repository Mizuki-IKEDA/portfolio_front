import { useInView } from 'react-intersection-observer';
import Project from './project';
import './style.scss';
import PropTypes from 'prop-types';

function Projects({ projects, language }) {
    const { ref: projectsRef, inView: projectsIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="projects" id="projects">
            <div className="projects--separator"></div>
            <div className="projects--container">
                {/* <div className="projects--developping">Ongoing</div> */}
                <h1 ref={projectsRef} className={`${'projects--title'} ${projectsIsVisible ? 'animateFadein' : ''}`}>{language === 'en' ? 'PROJECTS' : 'PROJETS'}<span className='aquablue'>.</span></h1>
                {projects && (
                    <section ref={projectsRef} className={`${'projects--projects'} ${projectsIsVisible ? 'animateFadeinDelay' : ''}`}>
                        {/* {projects.map((project) => (
                            <Project
                                key={project.id}
                                {...project}
                                language={language}
                            />
                        ))} */}
                        <Project
                            thumbnail="/images/photo_keepup.png"
                            title="Keep'Up"
                            subtitle="Meetup for Sport"
                            description="A mobile-first social networking application allowing sports lovers to connect with each other through creating and joining events."
                            technology="ReactJS / NodeJS"
                            link="https://keepup-oclock.netlify.app/"
                            github_link="https://github.com/O-clock-Flamel/projet-07-tinder-du-sportif-front"
                        />
                        <div className="project">
                            <img src="/images/photo_leCookNippon.png" className="project-image" alt="TheNipponCook" />
                            <div className="project-text">
                                <h3 className="project-title">"TheNipponCook"</h3>
                                <h4 className="project-subtitle">"A Japanese cooking app"</h4>
                                <p className="project-description">"A website presenting family friendly japanese recipes where you can pick and save favorites."</p>
                                <p className="project-technology">ReactJS / NodeJS"</p>
                                <div className="project-links">
                                    <div className='project-underdev'>Soon available !</div>
                                    <a href="">
                                        <img className="project-links--img" src="/images/logo_github.png" alt="link-github" />
                                    </a>
                                    <a href="">
                                        <img className="project-links--img" src="/images/external-link.svg" alt="link-site" />
                                    </a>
                                </div>
                            </div>
                    </div>
                    </section>
                )}
            </div>
            {/* <img className="projects--motif" src="/images/gggyrate.svg" alt="motif" /> */}
        </div>
    )
}

Projects.propTypes = {
    projects: PropTypes.array,
    language: PropTypes.string.isRequired,
};


export default Projects;