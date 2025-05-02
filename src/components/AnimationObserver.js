"use client";

import { useEffect } from 'react';

export default function AnimationObserver() {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in-up, .fade-in-left, .fade-in-right, .scale-up, .stagger-animation'
        );
        
        animatedElements.forEach(element => observer.observe(element));

        return () => {
            // Cleanup the observer when component unmounts
            if (animatedElements.length > 0) {
                animatedElements.forEach(element => observer.unobserve(element));
            }
        };
    }, []);

    return null;
}