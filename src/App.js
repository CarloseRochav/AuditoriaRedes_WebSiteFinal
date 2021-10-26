//Este archivo es como un index / main de un programa : aqui referenciamos las pages e importamos componentes
import React from 'react'
import Home from './pages/Home' //IMportante importar comopnente e invocarlo en el return
import About from './pages/about' //IMportante importar comopnente e invocarlo en el return
import Info from './pages/info' //IMportante importar comopnente e invocarlo en el return
import holaVecino from './pages/holaMundo';
import article from './pages/Article';
import ArticlesList from './pages/ArticlesList'

import { BrowserRouter as Router,Route } from 'react-router-dom';//Enrutamiento de paginas en React
import './App.css';

//Componets
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-indigo-900">
   <Router>
     <NavBar/>
    <div className="max-w-screen-md mx-auto pt-20">
    <Route exact path='/' component={Home}/>{/*Asi podemos asociar un componen a una ruta */}
    <Route exact path='/hola-mundo' component={holaVecino}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/info' component={Info}/>
    <Route exact path='/articles-list' component={ArticlesList}/>
    {/**Aqui crearemos una ruta con params ; paso de parametros */}
    <Route exact path='/article/:name' component={article}/>
    </div>
    </Router>   
    </div>
  );
}

export default App;
