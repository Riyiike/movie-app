import React from 'react'

//destructure the props of relts function to {results}
function Results({results}) {
    return (
        <section className ="results">
        {results.map(result => (
            <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
        </section>
    )
}

export default Results