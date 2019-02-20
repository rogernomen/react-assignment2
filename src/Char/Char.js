import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        border: '1px solid black'
    };

  return (
        <div>
            {}
            <div style={style} onClick={props.removeChar}>
                letter: {props.char}
            </div>
        </div>
  )
};

export default char;