import React, { useState, useEffect } from 'react';
import '../styles/Announcements.css';
import { Bell } from 'lucide-react';
import { FaBullhorn, FaTimes } from 'react-icons/fa';

const Announcements = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button only after scrolling past 80% of viewport height
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAnnouncement = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky-announcement-wrapper">
            {/* TOGGLE BUTTON (Visible when closed and scrolled) */}
            <div 
                className={`announcement-toggle ${isOpen ? 'hidden' : ''} ${!isScrolled ? 'hidden' : ''}`} 
                onClick={toggleAnnouncement}
            >
                <div className="toggle-icon-box">
                    <Bell className='bell-icon' />
                </div>
                <span className="toggle-text">Show Announcement</span>
            </div>

            {/* ANNOUNCEMENT CARD (Visible when open) */}
            <div className={`announcement-card ${isOpen ? 'visible' : ''}`}>
                <button className="close-btn" onClick={toggleAnnouncement}>
                    <FaTimes />
                </button>
                
                <div className="card-content">
                    <div className="icon-badge">
                        <FaBullhorn />
                    </div>
                    <div className="text-area">
                        <h3 className="announcement-title">Update</h3>
                        <p className="announcement-msg">
                            Delegate applications are now live!
                        </p>
                    </div>
                </div>
                
                {/* Optional "Click to Register" Action */}
                <button 
                    className="action-link"
                    onClick={() => window.open('https://bit.ly/gmuniitkgp2025', '_blank')}
                >
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default Announcements;