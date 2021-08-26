import React, { useEffect, useState } from 'react'
import "./Nav.css"
export default function Nav() {

    const [show, handle] = useState(false)

    const handleTransition = () => {
        if (window.scrollY > 100) {
            handle(true);
        } else {
            handle(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleTransition);
        return () => { window.removeEventListener("scroll", handleTransition) }
    }, []);
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <div className="navbar_content">
                <img className="navbar_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png">
                </img>
                <img className="navbar_avatar" src="https://www.pngkit.com/png/full/525-5256364_company-profile-video-production-icon-circle.png" />

            </div>

        </div>
    );
}
