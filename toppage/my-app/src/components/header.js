import icon_a from "../public/icon-account.png"
import icon_w from "../public/icon-wallet.png"
import logo from "../public/logo.png"
import ham from "../public/icon-ham.png"
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';


const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
    };

    return (
        <div className="header-above">
            <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" secondary="hogehoge" />
                    </ListItem>
                </List>
            </Drawer>
            <div className="header-Ticketme">
                <p className="Title"><Link to="/"><img className="Logo" src={logo} alt="logo"/></Link></p>
                <div className="header-Icon">
                    <p><Link to="/account"><img className="icon-account" src={icon_a} alt="icon_account"/></Link></p>
                    <p><Link to="/wallet"><img className="icon-wallet" src={icon_w} alt="icon_wallet"/></Link></p>
                    <p><img className="icon-ham" src={ham} alt="icon_ham" onClick={handleDrawerToggle} /></p>
                </div>
            </div>
        </div>
    );
}

export default Header;