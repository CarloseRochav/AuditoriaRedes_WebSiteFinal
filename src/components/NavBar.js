import React from 'react'
import { Link } from 'react-router-dom'//Importante importar este componente para poder usarlo
function NavBar() {
    return (
        <div>
            <nav className="border-b-4 border-green-700 text-center fixed top-0 w-full bg-green-800
            font-bold text-lg text-white">
                <ul>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/" className="pl-6 pr-8">
                            Home
                        </Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/info" className="pl-6 pr-8">
                            Info
                        </Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/about" className="pl-6 pr-8">
                            About
                        </Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/hola-mundo" className="pl-6 pr-8">
                            holaMundo
                        </Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/articles-list" className="pl-6 pr-8">
                            Articles
                        </Link>
                    </li>
                </ul>

            </nav>
            
        </div>
    )
}

export default NavBar
