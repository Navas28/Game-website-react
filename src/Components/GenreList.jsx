import React, { useEffect, useState } from "react";
import GlobalAPi from "../Services/GlobalAPi";

const GenreList = ( {genreId,selectGenreName} ) => {
    const [genreList, setGenreList] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, []);

    const getGenreList = () => {
        GlobalAPi.getGenreList.then((resp) => {
            setGenreList(resp.data.results);
        });
    };
    return (
        <div className="">
            <h2 className="text-3xl font-bold text-white my-5">Genres</h2>
            {genreList.map((item, index) => (
                <div
                    onClick={() => {setActiveIndex(index); genreId(item.id); selectGenreName(item.name)}}
                    className={`flex gap-2 items-center mb-4 hover:border-white border cursor-pointer  p-2 rounded-lg group ${
                        activeIndex == index ? "border-white" : null
                    }`}
                >
                    <img
                        src={item.image_background}
                        alt="backround image"
                        className={`w-16 h-16 object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-500 ${
                            activeIndex == index ? "scale-110" : null
                        }`}
                    />
                    <div>
                        <h3
                            className={`text-lg text-white group-hover:font-bold transition-all ease-out duration-500 ${
                                activeIndex == index ? "font-bold" : null
                            }`}
                        >
                            {item.name}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GenreList;
