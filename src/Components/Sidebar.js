import React, { useEffect, useState } from "react";
import "./../Components/myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from 'axios';
const route="http://localhost:5000"
const userId=JSON.parse(localStorage.getItem('data'))
function Sidebar() {
  //const [lightTheme,setLightTheme]=useState(true)
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();

  const fetchConvesation= async()=>{
    try{
      const response=await axios.get(`${route}/chat/loadChatSessions?userId=${userId._id}`)
      console.log('response conversations data',response)
      setConversations(response.data.allChatList)
    }catch(e){
      console.log("side bar conversation error",e)
    }
  }
  useEffect(()=>{
    console.log('Updated conversations:', conversations);
    fetchConvesation();
  },[]);
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon
              className={"icons" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icons" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupIcon className={"icons" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-group");
            }}
          >
            <AddCircleIcon className={"icons" + (lightTheme ? "" : " dark")} />
          </IconButton>
          {/* <IconButton>
                <AccountCircleIcon/>
                </IconButton> */}

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <ModeNightIcon
                className={"icons" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon
                className={"icons" + (lightTheme ? "" : " dark")}
              />
            )}
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder="Search" className="searchBox" />
      </div>
      <div className="sb-conversation">
        {conversations.map((cv) => {
          return <ConversationsItem props={cv} key={cv.name} />;
        })}
      </div>
    </div>
  );
}
export default Sidebar;
