export default function Fields({title, desc, proker, proker1, proker2, proker3, proker4, proker5, doc}){
    return(
        <div className="container mx-auto lg:mt-28">             
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="left-content flex-1 text-center lg:text-left w-full lg:w-auto">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{title}</p>
                    <p className="text-base md:text-lg lg:text-2xl mb-3">{desc}</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-5">{proker}</p>    
                    <ul className="text-base md:text-lg lg:text-2xl mb-3">                        
                        {proker1 ? (
                            <li>{proker1}</li> 
                        ) : null}
                        {proker2? (
                            <li>{proker2}</li> 
                        ) : null}
                        {proker3? (
                            <li>{proker3}</li> 
                        ) : null}
                        {proker4? (
                            <li>{proker4}</li> 
                        ) : null}
                        {proker5? (
                            <li>{proker5}</li> 
                        ) : null}
                    
                    </ul>            
                </div>
                <div className="flex justify-center w-full lg:flex-1 order-1 lg:order-none mb-6 lg:mb-0">
                    <div className="flex flex-col items-center">
                        <img className="w-full lg:w-3/4" src={doc}/>
                    </div>
                </div>
            </div>            
        </div>
    )
}