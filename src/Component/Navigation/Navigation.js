import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typical from 'react-typical'

const Navigation = () => {
    const theme = useTheme()
    const useStyles = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none',
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            },
        },
        bg: {
            background: '#000 !important'
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }
    })
    const { navItem, navIcon, navItemContainer, bg, navLogo, mobileNavItem } = useStyles()

    // for navbar drawar
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to="/">Resume</Link></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to="/">Projects</Link></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to="/">Contact</Link></ListItemText>
                </ListItem>
                <Divider />
            </List>

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={bg} position="sticky">
                    <Container>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography style={{ textAlign: 'left' }} className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Typical
                                    steps={[
                                        'HASIBUR😍', 1000,
                                        'HASIBUR😍', 1000,
                                        'HASIBUR😍', 1000,

                                    ]}
                                    loop={Infinity}
                                />
                            </Typography>
                            <Box className={navItemContainer}>
                                <Link className={navItem} href="Resume.pdf" download="Hasib's Resume.pdf" to="/"><Button color="inherit">Resume</Button></Link>
                                <Link className={navItem} to="/"><Button color="inherit">Projects</Button></Link>
                                <Link className={navItem} to="/"><Button color="inherit">Testimonial</Button></Link>
                                <Link className={navItem} to="/"><Button color="inherit">Contact</Button></Link>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    {/* <Button onClick={()=>setState(true)}>click</Button> */}
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;