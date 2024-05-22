import React, { useState, useEffect } from 'react';
import {Light as Syntaxhighligh} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return <Syntaxhighligh language="swift" style={darcula}>{displayedText}</Syntaxhighligh>;
};

export default TypingEffect;
