import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {ICliente} from '../Accions/Modelo';
import { ClienteServicio } from '../Accions/Servicio';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface IAgregar{
  flag: boolean,
  setFlag: React.Dispatch<React.SetStateAction<boolean>>
}



export const Agregar = (poop:IAgregar) => {

  const[dCliente,setDCliente] = useState<ICliente>({
    id: 0,
    name_complete: 'null',
    birthdate: 'null',
    address: 'null',
    city_CP: 'null',
    phone: 'null',
    e_address: 'null',
    client_grup: 'null'
    })

    const clientito = () =>{
      ClienteServicio.subir(dCliente).then(
        (respuesta) => {
          if (respuesta.status === 200){
            alert('Se registro con exito '+dCliente.name_complete)
            poop.setFlag(!poop.flag)
          }
        }
      )
    }

  return (
    <div>
        <FloatingLabel controlId="floatingName" label="Name Complete" className="mb-3">
          <Form.Control value={dCliente.name_complete} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, name_complete: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>
  
        <FloatingLabel controlId="floatingNameAuthor" label="Birthadte" className="mb-3">
          <Form.Control value={dCliente.birthdate} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, birthdate: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>
  
        <FloatingLabel controlId="floatingNameAuthor" label="Address" className="mb-3">
          <Form.Control value={dCliente.address} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, address: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingNameAuthor" label="City CP" className="mb-3">
          <Form.Control value={dCliente.city_CP} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, city_CP: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingNameAuthor" label="Phone" className="mb-3">
          <Form.Control value={dCliente.phone} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, phone: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingNameAuthor" label="Email address" className="mb-3">
          <Form.Control value={dCliente.e_address} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, e_address: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingNameAuthor" label="Client grup" className="mb-3">
          <Form.Control value={dCliente.client_grup} 
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, client_grup: event.target.value}
              )
            }
          }
          />
        </FloatingLabel>
        
        <Button variant="outline-success"
        onClick={()=>{
  clientito()
        }
      }
        >Guardar</Button>{' '}
    </div>
  )
}
