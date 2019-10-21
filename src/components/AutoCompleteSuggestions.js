import React from 'react'

const AutoCompleteSuggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.fullAddress}
    </li>
  ))
  return <ul>{options}</ul>
}

export default AutoCompleteSuggestions