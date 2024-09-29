import React from 'react'
import "./myStyles.css"
import logo from "./../images/Hello-Transparent.png"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
function Users_Groups({props}) {
  return (
    <div className='list-container'>
        <div className='sb-header'>
            <img src={logo} style={{
                height:"2rem",
                width:"2rem"
            }}/>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='Search' className='search'/>
        </div>
        <div className='ug-list'>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test user</p>
            </div>
        </div>
    </div>
  )
}

export default Users_Groups