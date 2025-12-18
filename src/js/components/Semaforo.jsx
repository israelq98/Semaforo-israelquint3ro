import React, { useEffect } from 'react'




function semaforo({luzActiva,setLuzActiva}) {

  return (
    <div className='containerSemaforo'>
      <div className='semaforo'>

   
      <div className={`luzRoja ${luzActiva} ${luzActiva == "red" ? "bg-danger" : ""}`} onClick={()=> setLuzActiva("red")}>
      </div>
      <div className={`luzAmarilla ${luzActiva} ${luzActiva == "yellow" ?"bg-warning" : "bg-danger" }`} onClick={()=> setLuzActiva("yellow")}>
      </div>  
      <div className={`luzVerde ${luzActiva} ${luzActiva == "green" ? "bg-sucess" : ""}`} onClick={()=> setLuzActiva("green")}>
        </div>
      </div>
    </div>
  )
}

export default semaforo
