import Doc2 from "./../assets/documentation_2.jpg";

export default function FieldProgram() {
    return(
        <div className="container mx-auto mt-16 lg:mt-28">

            {/* Fields */}

            <div className="flex-1 px-4 text-center">
                <Title title="Bidang KM TEMBUS"/>
                <Desc desc="KM TEMBUS atau Keluarga Mahasiswa Tembalang Kudus merupakan Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Fusce gravida pharetra tortor, non consequat ex efficitur
                vel. Curabitur at risus et quam egestas scelerisque. Proin condimentum,"/>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center px-4 lg:px-0 md:p-6 lg:p-8">
                <Card 
                    link="/bph.html"
                    doc={Doc2}
                    text="BPH-Badan Pengurus Harian"
                />         

                <Card 
                    link="/pi.html"
                    doc={Doc2}
                    text="PI-Pengembangan Internal"
                />

                <Card 
                    link="/mikat.html"
                    doc={Doc2}
                    text="MIKAT-Minat dan Bakat"
                />

                <Card 
                    link="/medinfo.html"
                    doc={Doc2}
                    text="MEDINFO-Media dan Informasi"
                /> 

                <Card 
                    link="/re.html"
                    doc={Doc2}
                    text="RE-Relasi Eksternal"
                /> 

                <Card 
                    link="/kwu"
                    doc={Doc2}
                    text="KWU-Kewirausahan"
                />   

                <Card 
                    link="/sosmas"
                    doc={Doc2}
                    text="SOSMAS-Sosial Masyarakat"
                />     
            </div>


            {/* Programs */}

            <div className="flex-1 px-4 text-center mt-16">
                <Title title="Bidang KM TEMBUS"/>
                <Desc desc="KM TEMBUS atau Keluarga Mahasiswa Tembalang Kudus merupakan Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Fusce gravida pharetra tortor, non consequat ex efficitur
                vel. Curabitur at risus et quam egestas scelerisque. Proin condimentum,"/>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center px-4 lg:px-0 md:p-6 lg:p-8">
                <Card 
                    link="/"
                    doc={Doc2}
                    text="BPH-Badan Pengurus Harian"
                />         

                <Card 
                    link="/"
                    doc={Doc2}
                    text="BPH-Badan Pengurus Harian"
                />

                <Card 
                    link="/"
                    doc={Doc2}
                    text="BPH-Badan Pengurus Harian"
                />

                <Card 
                    link="/"
                    doc={Doc2}
                    text="BPH-Badan Pengurus Harian"
                />     
            </div>  
        </div>
    )
}

function Title({title}) {
    return(
        <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{title}</p>
        </div>
    )
}

function Desc({desc}) {
    return(
        <div>
            <p className="text-base md:text-lg lg:text-2xl mb-3">{desc}</p>
        </div>
    )
}

function Card({link, doc, text}) {
    return(
        <div>
            <a href={link}>
                <div className="w-48 md:w-56 lg:w-64 bg-white rounded-lg shadow-2xl overflow-hidden">
                    <img className="w-full h-40 md:h-48 lg:h-56 object-cover" src={doc} />
                    <div className="p-2 md:p-3 lg:p-4">
                        <p className="text-center lg:text-left text-sm md:text-lg lg:text-xl font-semibold">{text}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}