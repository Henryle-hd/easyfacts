'use client'

import React, { useEffect, useState } from 'react'

export default function Page() {
    const [facts, setFacts] = useState([]);
    useEffect(() => {
        const fetchFacts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/facts");
                const data = await response.json();
                setFacts(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchFacts();
    },[]);



return (
    <div>
          {facts.map((fact) => (
              <div key={fact}>
                  {fact}
         </div>
          ))}
        
        <p>hello</p>
    </div>
  )
}
