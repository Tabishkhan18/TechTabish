import React, { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 2000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex justify-center">
            {isVisible && (
                <button onClick={scrollToTop} className="text-neutral-600 animate-bounce">
                    <TfiArrowCircleUp size={50} />
                </button>
            )}
        </div>
    );
};

export default ScrollUp;
