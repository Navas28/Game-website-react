import React from "react";

const About = () => {
    return (
        <div className="bg-gradient-to-r from-[#000428]  to-[#004e92] h-screen">
           
                <section class="overflow-hidden pt-40">
                    <div class="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[650px] lg:min-h-[650px]">
                        <div class="flex items-center justify-center w-full lg:order-2 lg:w-full">
                            <div class="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 lg:pt-40">
                                <div class="flex flex-col justify-between flex-1 h-full">
                                    <div>
                                        <h1 class="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                                            {" "}
                                            Exciting Game Application <br />
                                            Coming Soon!
                                        </h1>
                                        <p class="mt-6 text-base text-white sm:text-xl">
                                            {" "}
                                            Our game platform will soon be available on the App Store and Play Store. Stay
                                            tuned for an epic gaming experience!Explore the latest games, track new releases, and discover exclusive content. Whether you're a casual gamer or a pro, we've got something for everyone.Get ready to dive into a world of adventure, action, and entertainment. Follow us for updates and be the first to experience the future of gaming!
                                        </p>
                                    </div>

                                    <div class=" border-t-2 border-white lg:mt-auto sm:mt-14">
                                        <div class="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                                            <div class="flex items-center mt-5 space-x-5 sm:mt-0">
                                                <a
                                                    href="#"
                                                    title=""
                                                    class="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                                                    role="button"
                                                >
                                                    <img
                                                        class="w-auto rounded h-14 sm:h-16"
                                                        src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                                                        alt=""
                                                    />
                                                </a>

                                                <a
                                                    href="#"
                                                    title=""
                                                    class="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                                                    role="button"
                                                >
                                                    <img
                                                        class="w-auto rounded h-14 sm:h-16"
                                                        src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default About;
