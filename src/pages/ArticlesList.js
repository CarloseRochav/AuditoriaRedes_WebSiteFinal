import React from 'react'
import ArticleContent from './article-content'//Usaremos este componente para mostar el contenido
import {Link} from 'react-router-dom'

//Funcion; Aqui llamaremos a nuestra lista de ariculos, donde ahremos click a uno y sera linkeado al contenido
function ArticlesList() {
    return (
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">Articles</h1>
            <div className='container py-4 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {ArticleContent.map((article,index)=>(
                        <div key={index} className="p-4 md:w-1/2">
                            <div className='h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden'>
                                
                                {/*Con link podemos referencia un elemnto a una ruta */}
                                {/*Apartado de imagen */}
                                <Link to={`/article/${article.name}`}>{/**Este elemento esta referenciado a una ruta */}
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src={article.thumbnail} 
                                    alt="blog">
                                    </img>    
                                </Link> {/*Esto entre temprale literals*/}

                            <div className="p-6">

                                {/*Apartado de title del article */}
                                <Link key={index} to={`/article/${article.title}`}>{/**Este elemento esta referenciado a una ruta */}
                                    <h3 className="ttle-font text-lg font-medium text-gray-900">
                                        {article.title}
                                    </h3>
                                </Link>

                                {/*Apartado de contenido */}
                                <p className="leading-relaxed mb-3">{/*ESte elemento solo contiene informacion */}
                                    {article.content[0].substring(0,115)}...
                                </p>
                                <div className="flex item-center flex-wrap">
                                    <Link className="flex-bg-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                        Read More...
                                    </Link>
                                </div>
                                
                            </div>

                                

                                



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticlesList
