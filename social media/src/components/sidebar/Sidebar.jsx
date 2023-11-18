// Sidebar.jsx

import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi'
import { MdOutlineWatchLater, MdGroups, MdNewspaper, MdOutlineRssFeed, MdSettingsSuggest } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';
import classes from './sidebar.module.css';

const Sidebar = () => {
  // Define sidebar data with text and corresponding icon components
  const sidebarData = [
    { text: 'Watch', icon: FiMonitor },
    { text: 'Latest News', icon: MdNewspaper },
    { text: 'Friends', icon: FaUserFriends },
    { text: 'Groups', icon: MdGroups },
    { text: 'Feed', icon: MdOutlineRssFeed },
    { text: 'Pages', icon: RiPagesFill },
    { text: 'Suggested', icon: MdSettingsSuggest }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {sidebarData.map((data, index) => {
          const Icon = data.icon; // Retrieve icon component from data
          return (
            <div key={index} className={classes.item}>
              <Icon />
              <span className={classes.text}>{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
