import React, { useContext } from 'react'

import Source from './Source'

import '../../../../scss/components/shared/sources.scss'

import { SelectedSourceContext } from '../../../context/SelectedSource'
import { DestinationContext } from '../../../context/Destinations'

export default function Sources(props) {
    const selectedSourceContext = useContext(SelectedSourceContext)
    const destinationContext = useContext(DestinationContext)

    console.log('destinationContext = ',destinationContext)

    return (
        <div className='source-list'>
            {props.sources.map((source,index) => (
                <React.Fragment key={index}>
                    {index > 0 ?
                        <Source
                            // states
                            key={index}
                            index={index}
                            source={source}
                            length={props.sources.length}
                            selectedSourceContext={selectedSourceContext}
                            destinationContext={destinationContext}
                        />   
                    :                 
                        <React.Fragment key={index}/>
                    }
                </React.Fragment>
            ))}
        </div>
    )
}