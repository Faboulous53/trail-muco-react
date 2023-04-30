import React from 'react';
import { useState, useEffect } from "react";


function Donation() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => {
            if (prevCount >= 282890) {
              clearInterval(interval);
            }
            return prevCount + 153;
          });
        }, 0.000000001);
        return () => clearInterval(interval) ;
      }, []);
  

    return (
        <div>
         <p>{count+1}</p>  
        </div>
    );
};

export default Donation;