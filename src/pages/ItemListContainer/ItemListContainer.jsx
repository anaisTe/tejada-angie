import React, { useEffect, useState } from 'react'
import "./ItemListContainer.scss"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemListContainer = () => {
    const [ itemMovie, setMovies ] = useState([]);
    const { idGenre } = useParams();
    const [ searchMovies, setSearchMovies ] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
        .then((response) => {
            
            if(idGenre) {
                const movieFilter =  response.data.filter( (ele) => (
                    ele.genre === idGenre
                ));
                setMovies(movieFilter)
            } else {
                setMovies(response.data);
            }

        })
        .catch( (error) => {
            console.log(error);
        })
    }, [idGenre])
    
    const handleFilter = (event) => {
        const inputVal = event.target.value;
        setSearchMovies(inputVal);
    };
    const filtered = itemMovie.filter( ele => 
        ele.title.toLowerCase().includes(searchMovies.toLowerCase()) ||
        ele.description.toLowerCase().includes(searchMovies.toLowerCase())
    );

    return (
        <div className="row row-gap-3">
            <input className="form-control mb-4" 
                type="search" 
                placeholder="Buscar" 
                value={searchMovies} 
                onChange={handleFilter} />

            {
                ( filtered.length === 0 ) ? (
                    <p style={{color: '#fff'}}>No se encontraron coincidencias</p>
                ) : (
                    filtered.map(element => (
                        <ItemList key={element.id} element={element}/>
                    ))
                )
            }
        </div>
    )
}

export default ItemListContainer