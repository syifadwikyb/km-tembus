export default function Member({
    member1, imgMember1, position1,
    member2, imgMember2, position2,
    member3, imgMember3, position3,
    member4, imgMember4, position4,
    member5, imgMember5, position5,
    member6, imgMember6, position6,
    member7, imgMember7, position7,
    member8, imgMember8, position8,
    member9, imgMember9, position9
}) {
    return(
        <div className="container mx-auto mt-16 md:mt-24 lg:mt-32">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Anggota</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-4">

                {imgMember1 && member1 && position1 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember1}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member1}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position1}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember2 && member2 && position2 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember2}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member2}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position2}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember3 && member3 && position3 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember3}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member3}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position3}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember4 && member4 && position4 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember4}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member4}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position4}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember5 && member5 && position5 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember5}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member5}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position5}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember6 && member6 && position6 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember6}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member6}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position6}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember7 && member7 && position7 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember7}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member7}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position7}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember8 && member8 && position8 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember8}/>
                        <div className="p-2 md:p-3 lg:p-4">
                            <p className="text-sm md:text-lg lg:text-xl font-semibold">{member8}</p>
                            <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position8}</p>
                        </div>
                    </div>
                ) : null}

                {imgMember9 && member9 && position9 ? (
                    <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={imgMember9} />
                        <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-sm md:text-lg lg:text-xl font-semibold">{member9}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-semibold text-gray-600">{position9}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}