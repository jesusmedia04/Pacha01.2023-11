import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { Avatar, Checkbox, Chip, FormControlLabel } from '@mui/material';

const FormCrearReparacion = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('celulares')) || [])

  const [requierePantalla, setRequierePantalla] = useState(false)
  const [requiereSistema, setRequiereSistema] = useState(false)
  const [requiereCase, setRequiereCase] = useState(false)

  const [values, setValue] = useState({})

  const handleChangue = (event) => {
    event.preventDefault()

    const { name, value } = event.target;

    setValue({
      ...values,
      [name]: value
    })

  }

  const handleSave = () => {
    values.requierePantalla = requierePantalla,
      values.requiereCase = requiereCase,
      values.requiereSistema = requiereSistema
    list.push(values)
    localStorage.setItem("celulares", JSON.stringify(list));
    alert('Creado correctamente.')
    document.getElementsByName('IMEI')[0].value = ''; 
    document.getElementsByName('phone')[0].value = ''; 
    setRequierePantalla(false); 
    setRequiereCase(false);
    setRequiereSistema(false);
  }


  return (
    <div className="w-[350px] bg-white rounded-2xl grid place-items-center py-6 gap-4">
      <TextField
        name="IMEI"
        onChange={handleChangue}
        label="Ingrese IMEI:"
        variant="standard"
        client:only="react"
      />

      <TextField
        name="phone"
        label="Ingrese numero:"
        onChange={handleChangue}
        variant="standard"
        client:only="react"
      />

      <FormControlLabel control={
        <Checkbox
          onClick={() => setRequierePantalla(!requierePantalla)}
          checked={requierePantalla} />} label="Require Pantalla" />
      <FormControlLabel control={<Checkbox
        onClick={() => setRequiereSistema(!requiereSistema)}
        checked={requiereSistema} />} label="Requiere sistema" />
      <FormControlLabel control={<Checkbox
        onClick={() => setRequiereCase(!requiereCase)}
        checked={requiereCase} />} label="Require case" />

      <button
        onClick={handleSave}
        className="bg-gray-700 flex flex-row py-4 px-4 w-[200px] rounded-2xl text-white uppercase font-medium shadow-2xl hover:bg-slate-500 hover:text-white justify-center"
      >Crear</button>
  
      <a class="bg-gray-700 flex flex-row py-4 px-4 w-[200px] rounded-2xl text-white uppercase font-medium shadow-2xl hover:bg-slate-500 hover:text-white justify-center" href="/Tecnicos">Elegir Tecnico</a>
    </div>
    
  )
}

export default FormCrearReparacion