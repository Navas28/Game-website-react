import React, { useEffect } from "react";
import { FaComment, FaFire, FaStar } from "react-icons/fa";

const GamesById = ({ gameList,selectedGenreName }) => {
    useEffect(() => {
        console.log("gamelist", gameList);
    }, []);
    return (
        <div>
            <h2 className="font-bold  text-white text-3xl mt-5">{selectedGenreName} Games</h2>
            <div className="grid grid-col1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {gameList.map((item) => (
                    <div className="border hover:border-white p-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer pb-12">
                        <img className="w-full h-[250px] rounded-xl object-cover" src={item.background_image} />
                        <h2 className="text-white text-xl font-bold mt-4">
                            {item.name} 
                        </h2>
                        <h2 className="flex flex-row gap-3 items-center text-white">
                            <span className="text-yellow-500">
                                <FaStar />
                            </span>
                            {item.rating}
                            <span>
                                <FaComment />
                            </span>
                            {item.reviews_count}
                            <span className="text-yellow-600">
                                <FaFire />
                            </span>
                            {item.suggestions_count}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesById;
