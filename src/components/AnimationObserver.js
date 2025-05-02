"use client";

import { useEffect } from 'react';

export default function AnimationObserver() {
    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        // Create observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the element is visible
        });

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in-left, .fade-in-right, .fade-in-up, .stagger-animation > div'
        );

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Clean up
        return () => {
            if (observer) {
                animatedElements.forEach(el => {
                    observer.unobserve(el);
                });
            }
        };
    }, []);

    return null; // This component doesn't render anything
}