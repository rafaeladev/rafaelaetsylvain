import React from 'react';
import AnimatedLetters from './AnimatedLetters';

export default function Home() {
    const nameArray = [
        'R',
        'a',
        'f',
        'a',
        'e',
        'l',
        'a',
        '',
        '&',
        '',
        'S',
        'y',
        'l',
        'v',
        'a',
        'i',
        'n',
    ];
    const [letterClass, setLetterClass] = React.useState('text-animate');
    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);
    }, []);

    return (
        <div className='accueil_wrapper'>
            <div className='accueil_title'>
                <h2 className='accueil_mariage fadeIn'>Mariage</h2>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={0}
                    />
                </h1>
                <p className='accueil_date fadeIn'>15/06/2024</p>
            </div>
            <div className='accueil_container'>
                <h3>Liens de l'événement : </h3>
                <div className='acuueil_links_container'>
                    <a
                        href='https://picadventure.lumys.photo/sylvain---rafaela-6-2024'
                        target='_blank'
                        className='accueil_link'
                    >
                        Gallerie photographe
                    </a>
                    <a
                        href='https://event.piktoo.io/'
                        target='_blank'
                        className='accueil_link'
                    >
                        Gallerie photobooth (Code : 7TMP)
                    </a>
                    <a
                        href=''
                        target='_blank'
                        className='accueil_link'
                    >
                        Vidéo cérémonie
                    </a>
                </div>
            </div>
            <div className='accueil_thanks'>
                <p>Merci !</p>
            </div>
        </div>
    );
}
