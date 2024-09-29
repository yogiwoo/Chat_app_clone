import React, { useState } from "react";
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
function Sidebar() {
  //const [lightTheme,setLightTheme]=useState(true)
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last message 1",
      timeStamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "Last message 2",
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "Last message 3",
      timeStamp: "today",
    },
  ]);
  const navigate = useNavigate();
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
