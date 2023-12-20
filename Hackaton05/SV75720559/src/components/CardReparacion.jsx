import React from 'react'
import TimeLineMaterial from './TimeLineMaterial'
const CardReparacion = ({type, reparacion, terminated}) => {
  const reparacionCase = [
    {
      cambio: "Cambio de pantalla",
      hora: 13,
      minutes: 17,
    },
    {
      cambio: "Limpieza de pantalla",
      hora: 13,
      minutes: 18,
    },
    {
      cambio: "Limpieza de audio",
      hora: 13,
      minutes: 20,
    },
  ];

  return (
    <div className="w-[400px] h-auto bg-white rounded-2xl py-[20px] px-[20px]">
      <div className="w-full grid place-items-center text-black">
        <div
          className={`w-[50px] h-[50px] rounded-full grid place-items-center ${!terminated ? "bg-green-300" : "bg-red-300"
            }`}
        >
          {
            !terminated ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            )
          }
        </div>
        <h1 className="text-2xl uppercase font-bold">Reparacion de {type}</h1>
      </div>
      <div className="w-full min-h-[550px]">
        <TimeLineMaterial reparacion={reparacionCase} />
      </div>
    </div>

  )
}

export default CardReparacion