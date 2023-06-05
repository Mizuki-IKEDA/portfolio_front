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
                                <span className="home--discover">Contact me<span className='white'>.</span></span>
                            </Link>
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                                <span className="home--cv">Check my work<span className='white'>.</span></span>
                            </Link>
                        </div>
                        <div className="home-prolinks">
                            <a className="home-prolink" href="https://www.linkedin.com/in/mizukiikeda/" target="_blank">
                                <img className="home-prologo" src="/images/logo_linkedin.png" alt="logo_linkedin" />
                            </a>
                            <a className="home-prolink" href="https://github.com/Mizuki-IKEDA" target="_blank">
                                <img className="home-prologo" src="/images/logo_github.png" alt="logo_github" />
                            </a>  
                            <a className="home-prolink" href="mailto:">
                                <img className="home-prologo" src="/images/logo_mail.png" alt="logo_mail" />
                            </a>  
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
                                <span className="home--discover">Contactez moi<span className='white'>.</span></span>
                            </Link>
                            <Link activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                                <span className="home--cv">Mes projets<span className='white'>.</span></span>
                            </Link>
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