

import React from 'react'

function Article({ title, Date = "december 15, 2020", preview, Minutes }) {
    //console.log(minutes)
   // const bonus = minutesRead(minutes);
   
  return (
    <article>
      <h3>{title}</h3>
      
      <p>{preview}</p>
    </article>
  );
}

export default Article