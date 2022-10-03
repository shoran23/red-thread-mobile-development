import React, { useContext } from 'react'

import Destination from './Destination'

import { DestinationContext } from '../../context/Destinations'

import '../../../scss/components/matrix-routing/destinations.scss'

export default function Destinations() {
    const destinationContext = useContext(DestinationContext)
    return ( 
        <div id='destinations'>
            {destinationContext.destinations.map((destination,index) => (
                <Destination
                    key={index}
                    index={index}
                    destination={destination}
                    destinationContext={destinationContext}
                />
            ))}
        </div>
    )
}