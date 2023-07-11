import React, { useCallback, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import {ICliente} from '../Accions/Modelo';
import { ClienteServicio } from '../Accions/Servicio';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface  IEditar{
    IdCliente: number,
    setIdCliente: React.Dispatch<React.SetStateAction<number>>
    flag: boolean,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>
  }
  

export const Editar = (poop:IEditar) => {

    const[dCliente,setDCliente] = useState<ICliente>({
        id: 0,
        name_complete: 'null',
        birthdate: 0,
        address: 'null',
        city_CP: 'null',
        phone: 'null',
        e_address: 'null',
        client_grup: 'null'
        })

        const SearchforID = useCallback(
            () => {
                ClienteServicio.consultaporid(poop.IdCliente).then(
                (comprobar) => {
                  if(comprobar.status===200){
                    setDCliente(comprobar.data)
                  }
                }
              )
            },
            [poop.IdCliente],
          )
          

          useEffect(() => {
            SearchforID();
            return () => {
            }
          }, [poop.IdCliente]
          )
          
          const act2alizar = () =>{
            ClienteServicio.actualizar(poop.IdCliente,dCliente).then(
              (larespuesta) => {
                if (larespuesta.status === 200){
                  alert('actualizado '+poop.IdCliente)
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
          <Form.Control value={dCliente.birthdate}  type='number'
          onChange={
            (event)=>{
              setDCliente(
                {...dCliente, birthdate: +event.target.value}
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

        <Button variant="outline-warning"
 onClick={()=>{
act2alizar()
 }
}
 >Actualizar</Button>{' '}
    </div>
  )
}
