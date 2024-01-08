import React from 'react';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import CreateIcon from '@mui/icons-material/Create';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import './MenuBar.css'; // Import your CSS file for styling
import { UserButton } from "@clerk/nextjs"; // Import UserButton from Clerk


const MenuBar = () => {
  return (
    <nav className="menubar">
      <Stack direction="column" spacing={2}>
        <Link href="/friends" className="menu-link">
          <IconButton color="inherit">
            <PeopleAltIcon />
          </IconButton>
          <Typography variant="body2">Friends</Typography>
        </Link>

        <Link href="/messages" className="menu-link">
          <IconButton color="inherit">
            <ChatIcon />
          </IconButton>
          <Typography variant="body2">Messaging</Typography>
        </Link>

        <Link href="/post-creator" className="menu-link">
          <IconButton color="inherit">
            <CreateIcon />
          </IconButton>
          <Typography variant="body2">Post Creator</Typography>
        </Link>

        <Link href="/post-analytics" className="menu-link">
          <IconButton color="inherit">
            <BarChartIcon />
          </IconButton>
          <Typography variant="body2">Post Analytics</Typography>
        </Link>

        <Link href="/BlogFileCreator" className="menu-link">
          <IconButton color="inherit">
            <DescriptionIcon />
          </IconButton>
          <Typography variant="body2">Blog File Creator</Typography>
        </Link>
       
          <UserButton />
      </Stack>
    </nav>
  );
};

export default MenuBar;
