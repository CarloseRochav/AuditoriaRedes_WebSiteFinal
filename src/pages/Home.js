import React from 'react'

function Home() {
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">Super </h1>{/*Style from taildwindcss*/}
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">Boletos </h1>{/*Style from taildwindcss*/}
            <p className="mx-auto leading-relaxed text-base mb-4">
               Equipo de auditoria 
            </p>
            
            <img className="lg:h-48 md:h-36 w-full object-center" 
                    src={'/images/sb.png'} 
                    alt="blog">
            </img>    
            
        </div>
    )
}

export default Home
