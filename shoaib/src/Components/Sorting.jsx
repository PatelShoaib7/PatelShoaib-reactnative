import { Box, Input, Select, SelectField } from '@chakra-ui/react'
import React from 'react',
  import {useSelector} from "react-reudx"

export const Sorting = () => {
   const {data ,state } = useSelector((state)=> state);
   const [state , setState]=useState()
  const sortBY ={
       ascendingbyLETTER:((a,b)=> a.title - b.title),
       decendingbyLETTER: ((a,b)=> a.date - b.date),
       ascendingbyDATAE:((a,b)=> a.title - b.title),
       decendingbyDATAE: ((a,b)=> a.date - b.date)
  }
  return (
    <div>  
      <Box border="1px solid black">
         <Select placeholder='Sort By' w="sm" m="auto"  onChange ={(e)=> setState(e.target.value)}>
            <option value='ascendingbyLETTER'> New task First</option>
            <option value='decendingbyLETTER'> Old task First</option>
             <option value='ascendingbyDATAE'> Old task First</option>
             <option value='decendingbyDATAE'> Old task First</option>
          </Select>
<br />
               {
               data.sort(sortBY[state]).map((elem)=>(
                 <div></div>
               ))
             }
      </Box>
    </div>
  )
}
