import React, { useState } from 'react'
import CardTecnico from './CardTecnico'

const LIstTecnicos = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('tecnicos')) || [])

  console.log(list)

  return (
    <div
      className="grid place-items-center items-center justify-center w-full gap-4"
    >
      {list.map((element) => (
        <CardTecnico
          name={element.name}
          img={element.img_path}
          years={element.years}
          client:only="react"
        />
      )) }
    </div>
  )
}

export default LIstTecnicos