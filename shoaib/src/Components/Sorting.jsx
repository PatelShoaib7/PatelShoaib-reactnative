import { Box, Input, Select, SelectField } from '@chakra-ui/react'
import React from 'react'

export const Sorting = () => {
  return (
    <div>  
      <Box border="1px solid black">
         <Select placeholder='Sort By' w="sm" m="auto">
            <option value=''> New task First</option>
            <option value='option3'> Old task First</option>
          </Select>
      </Box>
    </div>
  )
}
