import React, { useEffect, useState } from "react";

const Banner = ({ gameBanner }) => {
    const [curretIndex, setCurrentIndex] = useState(0);
    const [selectedGame, setSelectedGame] = useState(null);

    useEffect(() => {
        if (gameBanner.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % gameBanner.length);
            }, 7000);
            return () => clearInterval(interval);
        }
    }, [gameBanner]);

    const currentGame = gameBanner[curretIndex];
    return (
        <div className="relative  border-2 border-white rounded-xl">
            <div className="absolute bottom-0 p-4 md:p-13  w-full rounded-xl">
                <h2 className="text-2xl md:text-5xl text-white font-bold mb-3">{currentGame.name}</h2>
                <div className=" flex-wrap w-200 gap-2 mt-4  hidden md:flex">
                    {currentGame.tags?.slice(0,5).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#396afc]  to-[#2948ff]  text-white text-sm font-semibold rounded-lg">
                            {tag.name}
                        </span>
                    ))}
                </div>
                <div className=" hidden md:grid xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-3 gap-2 mt-4">
                    {currentGame.short_screenshots?.map((screenshot, index) => (
                        <img key={index} src={screenshot.image} className="h-30 w-45 bg-cover rounded-lg  border-2 cursor-pointer hover:scale-105 duration-500 ease-in-out border-white" />
                    ))}
                </div>
            </div>
            <img src={currentGame.background_image} alt="bg image" className="md:h-230 w-full object-cover rounded-xl h-90" />
        </div>
    );
};

export default Banner;
