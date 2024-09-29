import React from 'react'
import {IconButton} from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
function CreateGroups() {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter group name' className='search-box'/>
      <IconButton>
        <AddBoxIcon/>
      </IconButton>
    </div>
  )
}

export default CreateGroups