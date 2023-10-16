import React, { useState } from "react";

const PortfolioStyle1 = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category:string) => {
        setShowCard(category);
    };

    return (
        <>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Portfolio
                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Our Recent Projects
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 hover:bg-blue-600 hover:text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "all"
                                                ? "activeClasses bg-blue-600 text-white"
                                                : "inactiveClasses"
                                        }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("branding")}
                                        className={`inline-block  rounded-lg py-2 px-5 hover:bg-blue-600 hover:text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "branding"
                                                ? "activeClasses bg-blue-600 text-white"
                                                : "inactiveClasses" 
                                        }`}
                                    >
                                        Branding
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("design")}
                                        className={`inline-block rounded-lg py-2 px-5 hover:bg-blue-600 hover:text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "design"
                                                ? "activeClasses bg-blue-600 text-white"
                                                : "inactiveClasses"
                                        }`}
                                    >
                                        Design
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("marketing")}
                                        className={`inline-block rounded-lg py-2 px-5 hover:bg-blue-600 hover:text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "marketing"
                                                ? "activeClasses bg-blue-600 text-white"
                                                : "inactiveClasses"
                                        }`}
                                    >
                                        Marketing
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("development")}
                                        className={`inline-block rounded-lg py-2 px-5 hover:bg-blue-600 hover:text-white text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "development"
                                                ? "activeClasses bg-blue-600 text-white"
                                                : "inactiveClasses"
                                        }`}
                                    >
                                        Development
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
                            category="Branding"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
                            category="Development"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
                            category="Design"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
                            category="Marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioStyle1;

const PortfolioCard = ({
                           showCard,
                           category,
                           ImageHref,
                           title,
                           button,
                           buttonHref,
                       }:{
                        showCard:string,
                        category:string,
                        ImageHref:string,
                        title:string,
                        button:string,
                        buttonHref:string,
                    }) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                    showCard === "all" || showCard === category.toLowerCase()
                        ? "block"
                        : "hidden"
                }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-lg">
                        <img src={ImageHref} alt="portfolio" className="w-full" />
                    </div>
                    <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
            <span className="block mb-2 text-sm font-semibold text-primary">
              {category}
            </span>
                        <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
                        <a
                            href={buttonHref}
                            className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
