import { Link } from 'react-scroll';
import './style.scss';
import PropTypes from 'prop-types';

function Home({language}) {
    return (
        <div className="home" id="home">
            {language === 'en' ? 
                <>
                    <div className="home--container">
                        <h1 className='home--title'>
                            <span className="home--title-hi">
                                Hi, my name is <br></br>
                            </span>
                            <span className="home--title-name">
                                Mizuki IKEDA
                            </span>.
                        </h1>
                        <p className='home--paragraph'>
                            I'm a <span className='home--paragraph-dev'>fullstack developer</span> specialized in <span className='home--paragraph-dev'>ReactJS</span>.
                        </p>
                        <div className="home--links">
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                                <span className="home--discover">Contact me</span>
                            </Link>
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                                <span className="home--cv">Check my work</span>
                            </Link>
                        </div>
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="skills">
                            <img className="home--downarrow" src="/images/down_arrow_3.png" alt="down_arrow" />
                        </Link>
                    </div>
                    <Link activeClass="active" duration={400} smooth={true} spy={true} to="skills" className="home--scroll">
                        <div className="home--scroll-item">scroll down.</div>
                    </Link>
                </>:
                <>
                    <div className="home--container">
                        <h1 className='home--title'>
                            <span className="home--title-hi">
                                Bonjour, je m'appelle <br></br>
                            </span>
                            <span className="home--title-name">
                                Mizuki IKEDA
                            </span>.
                        </h1>
                        <p className='home--paragraph'>
                            Je suis <span className='home--paragraph-dev'>développeur fullstack</span> spécialisé en <span className='home--paragraph-dev'>ReactJS</span>.
                        </p>
                        <div className="home--links" >
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                                <span className="home--discover">Contactez moi</span>
                            </Link>
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                                <span className="home--cv">Mes projets</span>
                            </Link>
                            {/* <a href="/documents/CV_Mizuki_IKEDA_en.pdf" className="home--cv" target="_blank">Mon CV</a> */}
                        </div>
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="about">
                            <img className="home--downarrow" src="/images/down_arrow_3.png" alt="down_arrow" />
                        </Link>
                    </div>
                    <Link activeClass="active" duration={400} smooth={true} spy={true} to="skills" className="home--scroll">
                        <div className="home--scroll-item">scrollez en bas.</div>
                    </Link>
               </>
            }
        </div>
    )
}

Home.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Home;