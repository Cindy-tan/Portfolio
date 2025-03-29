'use client';

import { useEffect, useState } from 'react';

const roles = [
    { color: '#1e1e2e', text: 'Graphic Designer' },
    { color: '#3b82f6', text: 'UI/UX Designer' },
    { color: '#16a34a', text: 'Video Editor' },
    { color: '#f59e0b', text: 'Social Media Manager' }
];

export default function LandingPage() {
    const [backgroundColor, setBackgroundColor] = useState(roles[0].color);
    const [activeText, setActiveText] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            roles.forEach((role, index) => {
                const section = document.getElementById(`section-${index}`);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    if (scrollPosition >= top + window.scrollY && scrollPosition < bottom + window.scrollY) {
                        setBackgroundColor(role.color);
                        typeWriterEffect(role.text);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const typeWriterEffect = (text) => {
        let index = 0;
        setActiveText('');
        const interval = setInterval(() => {
            if (index < text.length) {
                setActiveText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    };

    return (
        <div style={{ backgroundColor, transition: 'background-color 1s ease-in-out', minHeight: '100vh' }}>
            {roles.map((role, index) => (
                <div 
                    key={index} 
                    id={`section-${index}`} 
                    style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
                    <span>{activeText}</span>
                </div>
            ))}
        </div>
    );
}