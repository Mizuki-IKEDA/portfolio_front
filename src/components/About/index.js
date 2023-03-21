import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';

function About({language}) {
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="about" id="about">
            {language === 'en' ? 
                <div className="about--container">
                    <h1 ref={aboutRef} className={`${'about--title'} ${aboutIsVisible ? 'animateFadein' : ''}`}>ABOUT</h1>
                    <div className="about--words">
                        <img ref={aboutRef} className={`${'about--profil'} ${aboutIsVisible ? 'animateFadein' : ''}`} src="/images/photo_profil.jpg" alt="profil" />
                        <div ref={aboutRef} className={`${'about--paragraph'} ${aboutIsVisible ? 'animateFadeinDelay' : ''}`}>
                            <p>After 10 years as an industrial engineer, I took a leap and trained in web and mobile app development at O'Clock school.</p>
                            <p>I quickly found enjoyment in bringing ambitious ideas to fruition and a positive attitude to every challenge.</p>
                            <p>Being a child of 2 japanese parents but born and raised in France, I strive in cultural diversity and am looking for collaborative and dynamic environments.</p>
                            <a href="/documents/CV_Mizuki_IKEDA_en.pdf" className="about--cv" target="_blank">Resume</a>
                        </div>
                    </div>
                </div> :
                <div className="about--container">
                    <h1 ref={aboutRef} className={`${'about--title'} ${aboutIsVisible ? 'animateFadein' : ''}`}>A propos</h1>
                    <div className="about--words">
                        <div ref={aboutRef} className={`${'about--paragraph'} ${aboutIsVisible ? 'animateFadeinDelay' : ''}`}>
                            <p>Après 10 ans en tant qu'ingénieur projet dans l'industrie des matériaux, je me suis reconverti dans le développement web pour poursuivre ma passion dans le code.</p>
                            <p>Mes expériences passées ont pu m'apporter une structure et des méthodes pour manager des projets de la conception à la mise en place.</p>
                            <p>Issu de 2 parents immigrés japonais, je m'épanouis dans les environnements multi-culturelles.
                            Je serais ravi de participer à vos prochains projets !</p>
                        </div>
                        <img ref={aboutRef} className={`${'about--profil'} ${aboutIsVisible ? 'animateFadein' : ''}`} src="/images/photo_profil.jpg" alt="profil" />
                    </div>
                </div>
            }
            {/* <img className="about--motif" src="/images/oooscillate2.svg" alt="motif" /> */}
        </div>
    )
}

About.propTypes = {
    language: PropTypes.string.isRequired,
};

export default About;