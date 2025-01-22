export default function TimeLine
({
    timeline, 
    programUp1, timeUp1,
    programUp2, timeUp2,
    programUp3, timeUp3,
    
    programDown1, timeDown1,
    programDown2, timeDown2,
    programDown3, timeDown3,
}) {
    return(
        <div className="container mx-auto mt-16 md:mt-24 lg:mt-32">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center">{timeline}</p>          
            <div className="flex items-center justify-center bg-primary rounded-none lg:rounded-xl overflow-hidden px-4 md:px-6 lg:px-8">
                <div className="relative w-full h-64 lg:h-96 max-w-9xl items-center flex">
                    <div className="overflow-x-auto relative w-full scroll-smooth">
                        <div className="flex items-center justify-between w-full relative mb-6">
                            <div className="absolute top-1/2 left-1/2 w-[200vw] md:w-[150vw] lg:w-[140vw] -translate-x-1/2 -translate-y-1/2 bg-white h-2 rounded-full my-4"></div>
                            
                            {programUp1 && timeUp1 ? (
                                <div className="flex flex-col items-center mb-[100px] lg:mb-40">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-center text-primary font-semibold">{programUp1}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-center text-primary">{timeUp1}</p>
                                    </div>
                                </div>
                            ) : null}

                            {programDown1 && timeDown1 ? (
                                <div className="flex flex-col items-center justify-center mt-40 md:mt-56 lg:mt-52">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-primary font-semibold">{programDown1}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-primary">{timeDown1}</p>
                                    </div>
                                </div>
                            ) : null}

                            {programUp2 && timeUp2 ? (
                                <div className="flex flex-col items-center mb-[100px] lg:mb-40">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-center text-primary font-semibold">{programUp2}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-center text-primary">{timeUp2}</p>
                                    </div>
                                </div>
                            ) : null}

                            {programDown2 && timeDown2 ? (
                                <div className="flex flex-col items-center justify-center mt-40 md:mt-56 lg:mt-52">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-primary font-semibold">{programDown2}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-primary">{timeDown2}</p>
                                    </div>
                                </div>
                            ) : null}

                            {programUp3 && timeUp3 ? (
                                <div className="flex flex-col items-center mb-[100px] lg:mb-40">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-center text-primary font-semibold">{programUp3}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-center text-primary">{timeUp3}</p>
                                    </div>
                                </div>
                            ) : null}

                            {programDown3 && timeDown3 ? (
                                <div className="flex flex-col items-center justify-center mt-40 md:mt-56 lg:mt-52">
                                    <div className="w-48 md:w-52 lg:w-56 h-24 md:h-26 lg:h-28 bg-white rounded-md flex flex-col items-center justify-center p-2 md:p-3 lg:p-4">
                                        <p className="text-sm md:text-base lg:text-lg text-primary font-semibold">{programDown3}</p>
                                        <p className="text-xs md:text-sm lg:text-base text-primary">{timeDown3}</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}