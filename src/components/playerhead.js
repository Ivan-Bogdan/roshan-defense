import React from 'react';


const PlayerHead = ({name, img}) => {
    return (
    <div>
        <img src={img} style={{maxWidth: 50, maxHeight: 50}}/>
        {name}
    </div>
)}
export default PlayerHead;
