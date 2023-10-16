import React, { useState } from "react";

const PortfolioStyle2 = () => {
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
                            <div className="mx-auto mb-[60px] max-w-full text-left">
                                <span className="block mb-2 text-lg font-semibold text-blue-600">
                                  Our Portfolio
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Our Recent Works
                                </h2>
                                {/*<p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-y-auto flex">
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
                            category="Graphic Design"
                            title="Aura Brending Design"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
                            category="Web Design"
                            title="Best Web Design"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
                            category="Branding"
                            title="Branding Solutions"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
                            category="Development"
                            title="Creative Agency"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
                            category="Design"
                            title="Creative Agency"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                        <PortfolioCard
                            ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
                            category="Marketing"
                            title="Creative Agency"
                            description="Lorem lorem  lorem  lorem  lorem  lorem  lorem"
                            button="View Portfolio"
                            buttonHref="#"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioStyle2;

const PortfolioCard = ({
                           description,
                           category,
                           ImageHref,
                           title,
                           button,
                           buttonHref,
                       }:{
                        description:string,
                        category:string,
                        ImageHref:string,
                        title:string,
                        button:string,
                        buttonHref:string,
                    }) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 flex-none`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-t-lg">
                        <img src="https://placehold.co/600x400" alt="portfolio" className="w-full" />
                    </div>
                    <div className="relative px-10 text-left rounded-b-lg py-9 bg-blue-600 text-white">
                        <span className="inline-block mb-3 text-sm font-semibold bg-white text-blue-600 py-1 px-2 rounded">
                          {category}
                        </span>
                        <h3 className="text-xl font-bold text-dark">{title}</h3>
                        <p className="mb-3">{description}</p>
                        <a
                            href={buttonHref}
                            className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-blue-600 hover:bg-white hover:text-blue-600"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
