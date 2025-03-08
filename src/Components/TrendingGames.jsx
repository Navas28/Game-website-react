import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
    
    return (
        <div className="mt-5 hidden md:block">
            <h2 className="font-bold text-3xl text-white">Trending Games</h2>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {gameList.map(
                    (item, index) =>
                        index < 4 && (
                            <div className="bg-transparent hover:border-white border rounded-lg group hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer pb-7 p-3">
                                <img src={item.background_image} className="h-64 rounded-lg object-cover"/>
                                <h2 className="text-white text-xl font-bold text-center">{item.name}</h2>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default TrendingGames;
