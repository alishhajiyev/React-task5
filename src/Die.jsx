import React from 'react'
import './Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Die(props){
    const {face, rolling} = props
  return (
    <div>
        <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die 
                ${rolling && 'Die-shaking'}`} />
    </div>
  )
}

