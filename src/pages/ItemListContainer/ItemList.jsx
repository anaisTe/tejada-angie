import React from 'react'

const ItemList = ({element}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
        <div className="card text-bg-dark" >
            <div className='d-flex justify-content-center'>
                <img src={element.img} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
                <div className="genre-tag">{element.genre}</div>
            </div>
        </div>
    </div>
  )
}

export default ItemList