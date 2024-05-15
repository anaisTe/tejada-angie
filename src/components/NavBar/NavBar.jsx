import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiCameraMovie } from "react-icons/bi";


const NavBar = () => {

    const [itemMenu, setitemMenu] = useState([]);

    useEffect(() => {
      
        axios.get('http://localhost:3000/genres')
        .then( (element) => {
            setitemMenu(element.data);
        })

    }, [])
    
    return (
        <nav className="navbar bg-body-tertiary py-2 bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <div className='d-flex align-items-center column-gap-4'>
                    <Link className="navbar-brand" to={'/'}>
                        <div className='d-flex align-items-center column-gap-2 fs-2'>
                            <BiCameraMovie size={30}/>
                            Movies
                        </div>
                        
                    </Link>
                        
                    <div className="nav-item dropdown">
                        <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar por
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark position-absolute">
                            <p className='filterBtn'>Género</p>
                            {
                                itemMenu.map( ele => (
                                    <div className="navbar-nav" key={ele.id}>
                                        <Link className="nav-link active px-3" to={`/genre/${ele.name}`}>{ele.name}</Link>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar