import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';


export const Navigation = () => {
  return (
      // el Suspense permite mostrar un componente o mensaje que va indicar al usuario que se esta cargando el componente
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo"/>

                    <ul>
                        {   routes.map( ({ to, name }) => 
                        (
                            <li key={ to }>
                                <NavLink 
                                    to={ to }
                                    className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                                >
                                    { name }
                                </NavLink>
                            </li>
                        )) 
                        }
                    </ul>
                </nav>

                <Routes>
                    { routes.map( ({ path, Component, to }) => (
                        <Route path={ path } element={ <Component /> } key={ to } />    
                        )) 
                    }
                    <Route path='*' element={ <Navigate to={ routes[1].to } replace /> } />
                </Routes>            
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
