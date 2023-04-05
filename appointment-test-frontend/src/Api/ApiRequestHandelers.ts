import { axiosHelper } from "./AxiousConfig";

export const getAllDoctors=async()=>{return await axiosHelper.get(`http://localhost:5141/api/Doctor`)};
export const DeleteDoctor=async(id:string)=>{return await axiosHelper.delete(`http://localhost:5141/api/Doctor/DeletDoctor/${id}`)};
export const AddDoctor=async(id:string)=>{return await axiosHelper.get(`http://localhost:5141/api/Doctor/addDoctor/${id}`)};


export const getAddPatantByDocId=async(id:string)=>{return await axiosHelper.get(`http://localhost:5141/getAddPatantByDocId/${id}`)};
