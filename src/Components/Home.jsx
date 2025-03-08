import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPi from "../Services/GlobalAPi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesById from "../Components/GamesById";

const Home = () => {
    const [allGameList, setAllGameList] = useState();
    const [gameListByGenre, setGameListByGenre] = useState([]);
    const [selectedGenreName, setSelectedGenreName] = useState("Action");

    useEffect(() => {
        getAllGames();
        getGamesListById(4);
    }, []);

    const getAllGames = () => {
        GlobalAPi.getAllGames.then((resp) => {
            setAllGameList(resp.data.results);
        });
    };

    const getGamesListById = (id) => {
        console.log("genre", id);

        GlobalAPi.getGameListByGenreId(id).then((resp) => {
            console.log("games", resp.data.results);
            setGameListByGenre(resp.data.results);
        });
    };
    return (
        <div className="px-8 pt-25 bg-gradient-to-r from-[#000428]  to-[#004e92]">
            {allGameList?.length > 0 && <Banner gameBanner={allGameList} />}

            
            <div className="grid grid-cols-4 gap-4 mt-4">
          
                <div className="hidden md:block md:col-span-1">
                    <GenreList
                        genreId={(genreId) => getGamesListById(genreId)}
                        selectGenreName={(name) => setSelectedGenreName(name)}
                    />
                </div>

                <div className="col-span-4 md:col-span-3">
                    {allGameList?.length > 0 && gameListByGenre.length > 0 && (
                        <>
                            <TrendingGames gameList={allGameList} />
                            <GamesById gameList={gameListByGenre} selectedGenreName={selectedGenreName} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
