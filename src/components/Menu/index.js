import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { toggleLanguage } from '../../reducers/languageReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Menu({language}) {
    const dispatch = useDispatch();
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="menu">
            <div className="menu-container">
                <div className="menu-home">
                    <Link className="menu-square" activeClass="active" duration={400} smooth={true} spy={true} to="home">M</Link>
                </div>
                <div className="menu-logo" onClick={handleShowNavbar}>
                    <img className="menu-logo--img" src="/images/menu-logo.svg" />
                </div>
                <ul className={`menu-links ${showNavbar && 'menu-active'}`}>
                    <li>
                        <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="home">
                            {language === 'en' ? 'HOME' : 'ACCUEIL'}<span className='aquablue'>.</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="skills">
                            {language === 'en' ? 'SKILLS' : 'COMPETENCES'}<span className='aquablue'>.</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                            {language === 'en' ? 'PROJECTS' : 'PROJETS'}<span className='aquablue'>.</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="about">
                            {language === 'en' ? 'ABOUT' : 'A PROPOS'}<span className='aquablue'>.</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                            CONTACT<span className='aquablue'>.</span>
                        </Link>
                    </li>
                </ul>
                <div className='menu-languages'>
                    <a href="/documents/CV_IKEDA_fr.pdf" className="menu-cv" target="_blank">
                        {language === 'en' ? 'MY RESUME' : 'MON CV'}<span className='white'>.</span>
                    </a>
                    <Link onClick={() => dispatch(toggleLanguage())} className={language==='en' ? 'menu-language menu-language--chosen' : 'menu-language'}>
                        EN
                    </Link>
                    <Link onClick={() => dispatch(toggleLanguage())} className={language==='fr' ? 'menu-language menu-language--chosen' : 'menu-language'}>
                        FR
                    </Link>
                </div>

            </div>
        </nav>
    )
}

Menu.propTypes = {
    language: PropTypes.string.isRequired,
};


export default Menu;