import { TextField } from '@mui/material'
import React, { useState } from 'react'

const FormSearchPhone = () => {

  const [values, setValues] = useState({})

  const hanldeChangue = (event) => {
    event.preventDefault()

    const {name, value} = event.target

    setValues({...values, [name]: value} )
  }

  const handleSave = () => {
    localStorage.setItem("phone", JSON.stringify(values));
  }

  return (
    <div
      className="w-[350px] h-[300px] rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-around"
    >
      <div className="grid place-items-center gap-4">
        <TextField
          onChange={hanldeChangue}
          name="phone"
          label="Ingrese numero:"
          variant="standard"
          client:only="react"
        />
        <TextField
          onChange={hanldeChangue}
          name='imei'
          label="Ingrese IMEI:"
          variant="standard"
          client:only="react"
        />
      </div>
      <a
        onClick={handleSave}
        href="/Reparacion"
        className="bg-gray-700 flex flex-row py-4 px-4 w-[200px] rounded-2xl text-white uppercase font-medium shadow-2xl hover:bg-slate-500 hover:text-white justify-between"
      >Buscar

        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>

      </a>
    </div>
  )
}

export default FormSearchPhone