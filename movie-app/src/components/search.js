import React  from 'react'

function Search ({handleInput}) {
    return (

        <section className ="searchbox-wrap">
         <input type ="text" placeholder = "Search for a movie here...." className ="search-box"/>
        </section>
    )
}

export default Search