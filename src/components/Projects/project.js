import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function Project({
    thumbnail,
    title,
    subtitle,
    description,
    technology,
    link,
}) {
    return (
        <div className="project">
                <img src={thumbnail} className="project-image" alt={title} />
                <div className="project-text">
                    <h3 className="project-title">{title}</h3>
                    <h4 className="project-subtitle">{subtitle}</h4>
                    <p className="project-description">{description}</p>
                    <p className="project-technology">{technology}</p>
                    <div className="project-links">
                        <a href="https://github.com/O-clock-Flamel/projet-07-tinder-du-sportif-front" target="_blank">
                            <img className="project-links--img" src="/images/logo_github.png" alt="link-github" />
                        </a>
                        <a href={link} target="_blank">
                            <img className="project-links--img" src="/images/external-link.svg" alt="link-site" />
                        </a>
                    </div>
                </div>
            {/* <Modal onClose={() => setShow(false)} show={show} title={title} subtitle={subtitle} description={description} link={link} thumbnail={thumbnail} done={done} language={language} /> */}
        </div>
    )
}

// onClick={() => setShow(true)} 

Project.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired,
};

export default Project;
