import axios from "axios";
import { ICliente } from "./Modelo";

const base= "http://127.0.0.1:8000/api/"
const endpoint="clientitos/"

const consulta = async ()=>{
    return await axios.get(base+endpoint)
}

const subir = async (data:ICliente)=>{
    return await axios.post(base+endpoint,data)
}

const eliminar = async (id:number) =>{
    return await axios.delete(base+endpoint+id)
}

const consultaporid = async(id:number) =>{
    return await axios.get(base+endpoint+id)
}

const actualizar = async (id:number, data:ICliente)=>{
    return await axios.put(base+endpoint,data)
}

export const ClienteServicio ={
    consulta,
    subir,
    eliminar,
    consultaporid,
    actualizar
}
