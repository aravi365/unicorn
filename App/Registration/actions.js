import  { SUBMIT_START,SUBMIT_SUCCESS } from './constants'

export const sumbit = (values)=>{
    console.log(values)
    if(Object.keys(values).length>0)
        return{
            type:SUBMIT_SUCCESS,
            payload:{message:"registered successfully"}
        }
    
   
}