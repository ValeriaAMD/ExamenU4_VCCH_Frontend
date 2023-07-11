import React, {useState} from 'react'
import { Menu } from './Menu'
import { Agregar } from '../ChildComponents/Agregar'
import { Listar } from '../ChildComponents/Listar'
import { Editar } from '../ChildComponents/Editar'

export const Master = () => {
  
  const [flag, setFlag] = useState(false)
  const [id,setId] = useState(0)

  return (
    <div>
        <Menu />
    <Agregar flag={flag} setFlag={setFlag}/>
    <Listar IdCliente={id} setIdCliente={setId} 
    flag={flag} setFlag={setFlag}/>
    <Editar IdCliente={id} setIdCliente={setId} 
    flag={flag} setFlag={setFlag}/>
    </div>
  )
}
