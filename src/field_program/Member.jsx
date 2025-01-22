export default function Member({
    member1, imgMember1, position1,
    member2, imgMember2, position2,
    member3, imgMember3, position3,
    member4, imgMember4, position4,
    member5, imgMember5, position5,
    member6, imgMember6, position6
}) {
    return(
        <div className="container mx-auto mt-32">
            <p className="text-4xl font-bold mt-32 mb-3 text-center">Anggota</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-6">

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember1}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member1}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position1}</p>
                    </div>
                </div>

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember2}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member2}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position2}</p>
                    </div>
                </div>

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember3}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member3}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position3}</p>
                    </div>
                </div>

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember4}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member4}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position4}</p>
                    </div>
                </div>

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember5}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member5}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position5}</p>
                    </div>
                </div>

                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border-primary border-2">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember6}/>
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-primary">{member6}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position6}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}