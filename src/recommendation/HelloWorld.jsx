export default function HelloWorld() {
    return (
        <div className="bg-green-300">
            <HeaderHelloWorld text="Percobaan 1"/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld({text = "Hello World"}) {    
    return (
        <h1 className="header">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = 'Selamat Datang di Hello World'
    return (
       <p className="content">{text.toLowerCase()}</p>
    )
}