export default function Fields({title, desc, field, field1, field2, field3, field4, field5, doc}){
    return(
        <div className="container mx-auto lg:mt-28">             
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="left-content flex-1 text-center lg:text-left w-full lg:w-auto">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{title}</p>
                    <p className="text-base md:text-lg lg:text-2xl mb-3">{desc}</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-5">{field}</p>    
                    <ul className="text-base md:text-lg lg:text-2xl mb-3">
                        <li>{field1}</li>
                        <li>{field2}</li>
                        <li>{field3}</li>
                        <li>{field4}</li>
                        <li>{field5}</li>
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