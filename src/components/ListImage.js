import React, { useState } from 'react';
import Image from './Image'

const ListImage = (props) => {
    if(Object.keys(props.image).length < 2) return null
    return ( 
        <div className="row">
            {props.image.data.hits.map(resp => (
                <Image image={resp} key={resp.id} />
            ))}
        </div>
     );
}
 
export default ListImage;