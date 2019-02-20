import React from 'react';

const validation = (props) => {
    const textValidation = props.textLength >= 5 ? 'Text long enough' : 'Text too short';

  return (
    <div>
        {textValidation}
    </div>
  )
};

export default validation