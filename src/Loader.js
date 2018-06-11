import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <div className="spinner">
            <span className="inner"></span>
            <span className="inner"></span>
            <span className="inner"></span>
        </div>
    )
}

export default Loader