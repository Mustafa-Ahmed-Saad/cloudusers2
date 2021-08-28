import React from 'react';

const NotFound = (props) => {
   return (
      <div>
         <h2>404, Not Found</h2>
         <p>No Match For {props.location.pathname}</p>
      </div>
   );
};

export default NotFound;
