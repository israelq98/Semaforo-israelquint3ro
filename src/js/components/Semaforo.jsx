import React, { useEffect } from 'react'




function semaforo({luzActiva,setLuzActiva}) {

  return (
    <div className='containerSemaforo'>
     <span className='poste'>

     
      <div className='semaforo'>

   
      <div className={`luzRoja ${luzActiva == "red" ? "activaRed" : ""}`} onClick={()=> setLuzActiva("red")}>
      </div>
      <div className={`luzAmarilla ${luzActiva == "yellow" ?"activa" : "" }`} onClick={()=> setLuzActiva("yellow")}>
      </div>  
      <div className={`luzVerde ${luzActiva == "green" ? "activaGreen" : ""}`} onClick={()=> setLuzActiva("green")}>
        </div>
      </div>
      </span>
    </div>
  )
}

export default semaforo
