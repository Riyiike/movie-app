import React from 'react'

import 
function Result({result}) {
    return (
        <div className ="result">
            <img src ={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
