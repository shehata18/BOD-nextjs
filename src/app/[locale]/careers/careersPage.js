// Client-side JavaScript for the Careers page

// Initialize AOS animations
export function initAOS() {
    if (typeof window !== 'undefined') {
        import('aos').then((AOS) => {
            AOS.init({
                duration: 800,
                once: false,
                mirror: true
            });
        });
    }
}

// Initialize particles.js
export function initParticles() {
    if (typeof window !== 'undefined' && document.getElementById('particles-js')) {
        // Check if particles.js is already loaded
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });
        } else {
            // Load particles.js if not available
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
            script.async = true;
            script.onload = () => {
                window.particlesJS('particles-js', {
                    // Same configuration as above
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "particles_nb": 4
                            }
                        }
                    },
                    "retina_detect": true
                });
            };
            document.body.appendChild(script);
        }
    }
}

// Smooth scrolling for anchor links
export function initSmoothScroll() {
    if (typeof window !== 'undefined') {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Initialize search and filter functionality
export function initSearch() {
    if (typeof window !== 'undefined') {
        const searchInput = document.querySelector('input[placeholder="Search positions..."]');
        const jobCards = document.querySelectorAll('.job-card');

        if (searchInput && jobCards.length > 0) {
            searchInput.addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();

                jobCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const desc = card.querySelector('p').textContent.toLowerCase();

                    if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        // Department filter
        const departmentSelect = document.querySelector('select[name="department"]');
        if (departmentSelect) {
            departmentSelect.addEventListener('change', function () {
                const selected = this.value.toLowerCase();

                if (selected === '') {
                    jobCards.forEach(card => {
                        card.style.display = 'block';
                    });
                    return;
                }

                jobCards.forEach(card => {
                    const department = card.dataset.department?.toLowerCase();
                    if (department === selected) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }
}

// Initialize all functionality
export function initCareersPage() {
    initAOS();
    initParticles();
    initSmoothScroll();
    initSearch();
}

export default {
    initAOS,
    initParticles,
    initSmoothScroll,
    initSearch,
    initCareersPage
}; 