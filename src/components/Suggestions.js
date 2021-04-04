import React from 'react'
// Creating the search result by fetching the result object and using it's keys
const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li className='text-left'>
        <ul>
            <li><img className="search-display-image" src={r.event.map_url}></img><span><strong>{r.event.name}</strong></span></li>
            <li><img className="search-display-image" src={r.performers[0].hero_image_url}></img><span><strong>{r.performers[0].name}</strong></span></li>
            <li><img className="search-display-image" src={r.venue.image_url}></img><span><strong>{r.venue.name}</strong></span></li>
        </ul>       
    </li>
  ))
  return <ul>{options}</ul>
}
export default Suggestions