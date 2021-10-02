import React from 'react'
import articleContent from './article-content'

//Funcion que recibe parametros
function Article({match}) { /*match ; Puede realizar acciones cuando se hace match con el url tambien
    contiene propieades y dentro de estas propieades se encuentra params*/

    const name = match.params.name;//Guardar valor del param en una constante
    const article = articleContent.find((article)=>article.name===name);//Buscar que exista el name dentro de la proedad del arreglo y guardarlo en una variable
    

    if(!article)return <h1 className='sm:text-4xl text-2xl font-bold text-gary-900'>{'This article don´t exist'}</h1>//Condicion que indica que no se encontro el valor
    //Si solo vas a retornar un elemento no es necesario encerrarlo en un dic o react.fragment
    //En caso de que vaas a retornar mas de un elemnto es necesario dentro de un div/react-fragment
    // ; Esto porque solo se puede regresar una elemento padre en react
    return (      
        <React.Fragment>

        <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900"> 
        {article.name}{/**EN JSX Usamos curly-braces para referencias valores strings que se usan en 
         * javascript, se referencias los valores entre curly braces
         */}
        </h1>  

        {article.content.map((paragraph,index)=>(
            <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                {paragraph}
            </p>
        
        ))}
        </React.Fragment>
    )
}

export default Article
