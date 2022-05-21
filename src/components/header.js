import twitterLogo from "../assets/twitter-logo.svg";
import pic from "../public/web3.png"
import icon_a from "../public/icon-account.png"
import icon_w from "../public/icon-wallet.png"
import logo from "../public/logo.png"
import gif from "../public/dog.gif"
import ham from "../public/icon-ham.png"
import boar from "../public/NFTticket boar.png"
import deer from "../public/NFTticket deer.png" 
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Wallet from './wallet'


const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
    };

    const Wallet = () => {
        document.location.href = "/wallet";
    }

    const Account = () => {
        document.location.href = "/account";
    }

    const Home = () => {
        document.location.href = "/"
    }
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
                <p className="Title"><img className="Logo" src={logo} alt="logo" onClick={Home} /></p>
                <div className="header-Icon">
                    <p><img className="icon-account" src={icon_a} alt="icon_account" onClick = {Account}/></p>
                    <p><img className="icon-wallet" src={icon_w} alt="icon_wallet" onClick = {Wallet} /></p>
                    <p><img className="icon-ham" src={ham} alt="icon_ham" onClick={handleDrawerToggle} /></p>
                </div>
            </div>
        </div>
    );
}

export default Header;