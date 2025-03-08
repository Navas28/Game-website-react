import axios from "axios";
import React, { useEffect, useState } from "react";

const GameNews = () => {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get("https://gnews.io/api/v4/search", {
                params: {
                    q: "xbox AND playstation", // pc games, xbox game
                    token: "a84244c9925f5ce08bfdf5e023067604",
                    lang: "en",
                    country: "in",
                },
            });
            setNews(response.data.articles);
        } catch (error) {
            console.error("Erro fetching news", error);
        }
    };
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#000428]  to-[#004e92]">
            <div class="mx-auto max-w-8xl px-6 lg:px-8 pt-18">
                <div class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {news.map((article, index) => (
                        <article
                            key={index}
                            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:scale-105 duration-500 ease-in-out"
                        >
                            <img
                                src={article.image}
                                alt={article.image}
                                class="absolute inset-0 -z-10 h-full w-full object-cover"
                            />
                            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time datetime={article.publishedAt} class="mr-8">
                                    {new Date(article.publishedAt).toDateString()}
                                </time>
                            </div>
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    <span class="absolute inset-0"></span>
                                    {article.title}
                                </a>
                            </h3>
                            <p class="text-gray-300 mt-2">{article.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameNews;
