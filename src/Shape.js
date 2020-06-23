import React from 'react';

const Shape = (props) => {
    // Another option: const { shape } = props;
    const shape = props.shape; // just giving props.shape an identifier
    return (
    <div className={shape}></div>
   );
}

export default Shape;