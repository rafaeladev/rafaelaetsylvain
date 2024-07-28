import React, { useEffect, useRef, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateIn = () => {
            if (containerRef.current) {
                gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 3 });
            }
        };

        const animateOut = () => {
            if (containerRef.current) {
                gsap.fromTo(containerRef.current, { opacity: 1 }, { opacity: 0, duration: 1 });
            }
        };

        animateIn();

        return () => animateOut();
    }, [location]);

    return (
        <div
            ref={containerRef}
            style={{ width: '100%', height: '100%' }}
        >
            {children}
        </div>
    );
};

export default PageTransition;
