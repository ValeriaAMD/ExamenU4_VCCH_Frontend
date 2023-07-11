import React, { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import {ICliente} from '../Accions/Modelo';
import { ClienteServicio } from '../Accions/Servicio';
interface IListar{
    IdCliente: number,
    setIdCliente: React.Dispatch<React.SetStateAction<number>>
      flag: boolean,
      setFlag: React.Dispatch<React.SetStateAction<boolean>>
  }
  

export const Listar = (poop:IListar) => {

    const Clientitoss = useCallback(
        (idEliminar:number) => {
            ClienteServicio.eliminar(idEliminar).then(
              (correct)=>{
                  if(correct.status===200){
                      alert("Id was deleted: "+idEliminar)
                      poop.setFlag(!poop.flag)
                  }
              }
          )
        },
        [poop.flag],
      )
      
      const [Id, setId] = useState(0)
      const [dCliente,setDCliente]= useState<[ICliente]>()
      const SearchAll = useCallback(
          () => {
            ClienteServicio.consulta().then(
                  (aproveted)=>{
                      if(aproveted.status === 200){
                          setDCliente(aproveted.data)
                      }
                  }
              ).catch(
                  (error)=>{
                      alert(error)
                  }
              )
          },
          [poop.flag],
      )


      useEffect(() => {
        SearchAll()
          return () => {
            
          }
        }, [poop.flag])

  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Name Complete</th>
                    <th>Birthadte</th>
                    <th>Address</th>
                    <th>City CP</th>
                    <th>Phone </th>
                    <th>Email address</th>
                    <th>Client grup</th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {
                    dCliente && dCliente?.map(
                        (cliente,i)=>(
                            <tr key={cliente.id}>
                                <td>
                                    {cliente.name_complete}
                                </td>
                                <td>
                                    {cliente.birthdate}
                                    
                                </td>
                                <td>
                                    {cliente.address}
                                </td>
                                <td>
                                    {cliente.city_CP}
                                </td>
                                <td>
                                    {cliente.phone}
                                </td>
                                <td>
                                    {cliente.e_address}
                                </td>
                                <td>
                                    {cliente.client_grup}
                                </td>
                                <td>
                                <Button variant="secondary"
                                   onClick={()=>{poop.setIdCliente(cliente.id)}}
                                >Edit</Button>{' '}
                                </td>
                                <td>
                                <Button variant="danger"
                                   onClick={()=>{Clientitoss(cliente.id)}}
                                >Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </Table>
        <Button variant="secondary"
        onClick={()=>{SearchAll()}}
        >Actualizar Tabla</Button>{' '}
    </div>
  )
}
