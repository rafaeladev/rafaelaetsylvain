import React from 'react';
import './AnimatedLetters.css'; // Assurez-vous d'importer le fichier CSS pour les styles

interface AnimatedLettersProps {
    letterClass: string;
    strArray: string[];
    idx: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ letterClass, strArray, idx }) => {
    return (
        <span className='span_animate'>
            {strArray.map((char, i) => (
                <span
                    key={char + i}
                    className={`${letterClass} _${i + idx}`}
                    style={{ animationDelay: `${i * 0.1 + 1.5}s` }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
