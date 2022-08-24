import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import logo2 from '../img-zenwe/logo2.png'
import pg1 from '../img-zenwe/pg1.png'
import pg2 from '../img-zenwe/pg2.png'
import pg3 from '../img-zenwe/pg3.png';
import dbin from '../img-zenwe/dbin.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import avtar from '../img-zenwe/avtar.png'
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { FiLogOut } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import menuimg from '../img-zenwe/menuimg.png'
import scr from '../img-zenwe/scr.png'
import gift from '../img-zenwe/gift.png'
import monitar from '../img-zenwe/monitar.png'
import speak from '../img-zenwe/speak.png'
import CircleIcon from '@mui/icons-material/Circle';




import { AppBar,
     Toolbar, 
     Box, 
     IconButton, 
     Typography, 
     Button, 
     Grid, 
     Stack, 
     Divider, 
     Paper, 
     Avatar,
     Link, 
     Chip, 
     Menu, 
     MenuItem 
    } from '@mui/material'



const Position = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <Grid container direction='row'>
                <Grid item xl={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" sx={{ bgcolor: '#F0F0F0' }} elevation={1}>
                            <Toolbar>
                                <Box component='img' src={logo2} sx={{ height: 90, ml: -2 }} alt='...' />
                                <IconButton sx={{ ml: -1 }}
                                    onClick={handleClick}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <SettingsIcon sx={{ fontSize: 28, color: '#1A344B' }} />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1,
                                width: '306px',
                                height: '825px',
                                '& .MuiAvatar-root': {
                                    width: "43px",
                                    height: "43px",
                                    ml: 1,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 13,
                                    height: 13,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) translateX(-29vh) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    >
                        <Box component='div'>
                            <Stack direction='column'>

                                <Box component='div' sx={{ mt: 3, ml: 4 }}>
                                    <Stack direction='row'>
                                        <Box component='img' src={menuimg} alt='...' />
                                        <Box component='div' sx={{ ml: "16px" }}>
                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '16.21px', fontWeight: 600 }}>
                                                ron swanson
                                            </Typography>
                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '12.61px', fontWeight: 300 }}>
                                                jbass@lenty.ag
                                            </Typography>
                                        </Box>

                                    </Stack>
                                </Box>

                                <MenuItem sx={{ mt: 1.3 }}>
                                    <Stack direction='row' sx={{ ml: 2.5, my: 0.5 }}>
                                        <PersonRoundedIcon sx={{ color: '#1A344B' }} />
                                        <Typography sx={{ ml: 1.5, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            User Settings
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.5, my: 0.5 }}>
                                        <HelpIcon sx={{ color: '#1A344B' }} />
                                        <Typography sx={{ ml: 1.5, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Help & Documentation
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.5, my: 0.5 }}>
                                        <KeyboardIcon sx={{ color: '#1A344B' }} />
                                        <Typography sx={{ ml: 1.5, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Keyboard Shortcuts
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <FiLogOut style={{ color: '#1A344B', height: "20px", width: '20px' }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Sign Out
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <Divider />

                                <Box component='div' sx={{ mt: 1, ml: 4 }}>
                                    <Stack direction='row'>
                                        <Box component='img' src={menuimg} alt='...' />
                                        <Box component='div' sx={{ ml: "16px" }}>
                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '16.21px', fontWeight: 600 }}>
                                                Plenty
                                            </Typography>
                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '12.61px', fontWeight: 300 }}>
                                                https://zenwe.breezy.hr/
                                            </Typography>
                                        </Box>

                                    </Stack>
                                </Box>

                                <Link href='/comset' underline='none'><MenuItem sx={{ mt: 1.3 }} >
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <FaBuilding style={{ color: '#1A344B', height: "20px", width: '20px' }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Company Settings
                                        </Typography>
                                    </Stack>
                                </MenuItem>
                                </Link>


                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <SettingsSuggestIcon sx={{ color: '#1A344B' }} />
                                        <Typography sx={{ ml: 1.7, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            SettingsSuggestIcon
                                        </Typography>
                                        <ArrowRightIcon sx={{ color: '#1A344B', height: 28, width: 28, ml: 5 }} />
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <MailRoundedIcon sx={{ color: '#1A344B', height: 20, width: 20 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Invite Members
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <CreditCardIcon sx={{ color: '#1A344B', height: 20, width: 20 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Billing Details
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <Box component='img' src={scr} alt='...' sx={{ height: 14, ml: 0.3, mt: 0.5 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Manage Subscriptions
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <Divider />

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <Box component='img' src={gift} alt='...' sx={{ height: 14, ml: 0.3, mt: 0.5 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Feature Requests
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <Box component='img' src={monitar} alt='...' sx={{ height: 14, ml: 0.3, mt: 0.5 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Live Demo
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <Box component='img' src={speak} alt='...' sx={{ height: 14, ml: 0.3, mt: 0.5 }} />
                                        <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Product Updates
                                        </Typography>
                                    </Stack>
                                </MenuItem>

                                <MenuItem>
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <FavoriteIcon sx={{ color: '#1A344B', height: 20, width: 20 }} />
                                        <Typography sx={{ ml: 1.8, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Refer a friend
                                        </Typography>
                                        <ArrowRightIcon sx={{ color: '#1A344B', height: 28, width: 28, ml: 11.2 }} />
                                    </Stack>
                                </MenuItem>

                                <Divider />

                                <MenuItem >
                                    <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                                        <AddIcon sx={{ color: '#1A344B', height: 22, width: 22 }} />
                                        <Typography sx={{ ml: 1.5, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                                            Add Company
                                        </Typography>

                                    </Stack>
                                </MenuItem>

                            </Stack>
                        </Box>
                    </Menu>

                    <Grid container direction='column' >
                        <Grid item sx={{ bgcolor: '#1A344B' }} >
                            <Box component='div' sx={{ my: 9 }}>
                                <Stack spacing={5}>


                                    <Button
                                        style={{
                                            color: 'white',
                                            padding: '9px',
                                            fontStyle: 'normal',
                                            textTransform: 'capitalize',
                                            marginLeft: '33px'
                                        }}
                                    ><HomeRoundedIcon sx={{ height: 40, width: 40, ml: -8, my: -2 }} />
                                        <Link href='/' underline='none'>
                                            <Box component='span' sx={{ ml: 2.5, fontWeight: 400, fontSize: '19.44px', fontFamily: 'Montserrat', color: 'white' }}>
                                                Dashboard
                                            </Box>
                                        </Link>
                                    </Button>



                                    <Button
                                        style={{
                                            color: 'white',
                                            padding: '9px',
                                            fontStyle: 'normal',
                                            textTransform: 'capitalize',
                                            marginLeft: '33px'
                                        }}
                                    ><MailRoundedIcon sx={{ height: 30, width: 30, ml: -14, my: -2 }} />
                                        <Box component='span' sx={{ ml: 3.5, fontWeight: 400, fontSize: '19.44px', fontFamily: 'Montserrat' }}>
                                            inbox
                                        </Box>
                                    </Button>


                                    <Button
                                        style={{
                                            color: 'white',
                                            padding: '9px',
                                            fontStyle: 'normal',
                                            textTransform: 'capitalize',
                                            marginLeft: '33px'
                                        }}
                                    ><AssignmentTurnedInRoundedIcon sx={{ height: 30, width: 30, ml: -15, my: -2 }} />
                                        <Box component='span' sx={{ ml: 3, fontWeight: 400, fontSize: '19.44px', fontFamily: 'Montserrat' }}>
                                            Tasks
                                        </Box>
                                    </Button>


                                    <Button
                                        style={{
                                            color: 'white',
                                            padding: '9px',
                                            fontStyle: 'normal',
                                            textTransform: 'capitalize',
                                            marginLeft: '33px'
                                        }}
                                    ><CalendarTodayRoundedIcon sx={{ height: 30, width: 30, ml: -10, my: -2 }} />
                                        <Box component='span' sx={{ ml: 3, fontWeight: 400, fontSize: '19.44px', fontFamily: 'Montserrat' }}>
                                            Calender
                                        </Box>
                                    </Button>


                                    <Button
                                        style={{
                                            color: 'white',
                                            padding: '9px',
                                            fontStyle: 'normal',
                                            textTransform: 'capitalize',
                                            marginLeft: '33px'
                                        }}
                                    ><SignalCellularAltOutlinedIcon sx={{ height: 30, width: 30, ml: -12, my: -2 }} />
                                        <Box component='span' sx={{ ml: 2.5, fontWeight: 400, fontSize: '19.44px', fontFamily: 'Montserrat' }}>
                                            Reports
                                        </Box>
                                    </Button>

                                </Stack>

                            </Box>
                        </Grid>
                        <Divider sx={{ height: 2 }} />

                        <Grid item xl={4} sx={{ bgcolor: '#1A344B' }}>
                            <Box component='div' sx={{ my: 9 }}>
                                <Stack spacing={4}>


                                    <Button style={{

                                        backgroundColor: 'white',
                                        color: '#1A344B',
                                        padding: '9px',
                                        fontStyle: 'normal',
                                        borderRadius: "16px 0px 0px 16px",
                                        textTransform: 'capitalize',
                                        marginLeft: '33px'
                                    }}
                                    >
                                        <BusinessCenterIcon sx={{ height: 32, width: 32, ml: 0 }} />
                                        <Box component='span' sx={{ fontSize: 19.44, fontFamily: 'Montserrat', ml: 3, fontWeight: 600 }}> Positions </Box>
                                        <AddCircleRoundedIcon sx={{ ml: 5, mt: 0.4, color: '#84AC04' }} />
                                    </Button>


                                    <Button style={{
                                        color: 'white',
                                        padding: '9px',
                                        fontStyle: 'normal',
                                        borderRadius: "16px 0px 0px 16px",
                                        fontSize: '11.44px',
                                        textTransform: 'capitalize',
                                    }}
                                    >
                                        <PersonRoundedIcon sx={{ height: 30, width: 30, ml: 3 }} />
                                        <Box component='span' sx={{ fontSize: 19.44, fontFamily: 'Montserrat', ml: 2.5 }}> Candidates </Box>
                                        <AddCircleRoundedIcon sx={{ ml: 3.5, mt: 0.4, color: '#84AC04' }} />
                                    </Button>

                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xl={10}>

                    <AppBar position="static" sx={{ bgcolor: 'white', height: 90 }} elevation={1}>
                        <Toolbar>
                            <Typography sx={{ color: "#1A344B", fontSize: 28, fontFamily: 'Montserrat', mt: 3 }}>
                                <span style={{ fontWeight: 800 }}>POSITIONS/GROUPS</span>
                            </Typography>


                            <Stack direction='row' sx={{ ml: 98.5 }}>

                                {/* <Badge badgeContent={3} color="success" sx={{ mr: 2, mt: 3.5 }}>
                              </Badge> */}
                                <NotificationsIcon sx={{ fontSize: 33, color: '#1A344B', mt: 3, ml: -2 }} />

                                <IconButton sx={{ mt: 2, mr: 3.5 }}>
                                    <HelpIcon sx={{ fontSize: 30, color: '#1A344B' }} />
                                </IconButton>

                                <Avatar alt="Avtar" src={avtar} sx={{ mt: 3 }} />

                                <Typography sx={{ color: "black", ml: 2, mt: 4.5, fontFamily: 'Montserrat', fontWeight: 600, fontSize: 15 }} component="div" >
                                    Joshua<span style={{ marginLeft: "3px" }} >Bass</span>
                                </Typography>
                            </Stack>
                        </Toolbar>
                    </AppBar>

                    <Box component='div' sx={{ bgcolor: '#E4E3E3', p: 2 }}>
                        <Paper elevation={0} sx={{ borderRadius: '25px 25px 0px 0px', height: '850px' }}>
                            <Paper sx={{ bgcolor: '#1A344B', borderRadius: '25px 25px 0px 0px' }}>
                                <Box component='div' sx={{ p: 1, ml: 2 }}>
                                    <Stack direction='row'>
                                        <Stack direction='row'>
                                            <Chip label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 14 }}>Filter</Typography>} variant="outlined"
                                                sx={{ height: 29, width: 105, bgcolor: '#84AC04', color: 'white' }} />

                                            <Chip label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 14 }}>All Position</Typography>} variant="outlined"
                                                sx={{ height: 29, width: 105, bgcolor: 'white', ml: 1.5 }} />

                                        </Stack>
                                        <Stack direction='row' sx={{ ml: 90 }}>
                                            <Chip label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 14 }}>Add Position</Typography>} variant="outlined"
                                                sx={{ height: 29, width: 112, bgcolor: '#84AC04', color: 'white', ml: 2 }} />
                                            <Chip label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 14 }}>Add Groups</Typography>} variant="outlined"
                                                sx={{ height: 29, width: 105, bgcolor: '#84AC04', color: 'white', ml: 2 }} />
                                            <Chip label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 14 }}>Export CSV</Typography>} variant="outlined"
                                                sx={{ height: 29, width: 105, bgcolor: '#84AC04', color: 'white', ml: 2 }} />
                                        </Stack>
                                    </Stack>
                                </Box>

                            </Paper>
                            <Box component='div' sx={{ p: 1, bgcolor: '#D4D3D3' }}>
                                <Stack direction='row'>

                                    <CircleIcon sx={{ color: '#848383', height: '17px', width: '17px', ml: '80px' }} />
                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '21px' }}>
                                        hiring team
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "90px" }} flexItem />

                                    <Typography sx={{ width: '98px', fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '68px' }}>
                                        name
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "48px" }} flexItem />

                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '60px' }}>
                                        location
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "59px" }} flexItem />

                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '49px' }}>
                                        type
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "60px" }} flexItem />

                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '35px' }}>
                                        candidates
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "29px" }} flexItem />

                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '33px' }}>
                                        Age
                                    </Typography>

                                    <Divider orientation="vertical" sx={{ bgcolor: 'black', ml: "42px" }} flexItem />

                                    <Typography sx={{ fontSize: "14px", fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'capitalize', ml: '46px' }}>
                                        work time
                                    </Typography>


                                </Stack>
                            </Box>

                            <Box component='div'>

                                <Paper sx={{ borderRadius: '12px', mt: '21px', ml: '12.5px', width: '1327px' }} elevation={4} id='1'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>

                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>

                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px' }} elevation={4} id='2'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>

                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>

                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px' }} elevation={4} id='3'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>



                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px', bgcolor: '#F0F0F0' }} elevation={4} id='4'>

                                    <Stack direction='row'>
                                        <Paper sx={{ p: 0.4, bgcolor: '#B9BBFD', borderRadius: '12px 0px 0px 12px' }} elevation={0}></Paper>
                                        <Stack direction='row' sx={{ p: 1.5 }}>

                                            <CircleIcon sx={{ color: '#B9BBFD', mt: 1.7, ml: '30px' }} />


                                            <Stack direction='row'>
                                                <Box component='img' src={pg1} alt='...' sx={{ ml: '15px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg2} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg3} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                            </Stack>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                activities manager - chicago
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                chicago-USA
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                                self
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                                13
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                                18y
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                                24h ago
                                            </Typography>

                                            <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12, filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />

                                        </Stack>
                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px', bgcolor: '#F0F0F0' }} elevation={4} id='5'>

                                    <Stack direction='row'>
                                        <Paper sx={{ p: 0.4, bgcolor: '#FC3F33', borderRadius: '12px 0px 0px 12px' }} elevation={0}></Paper>
                                        <Stack direction='row' sx={{ p: 1.5 }}>

                                            <CircleIcon sx={{ color: '#FC3F33', mt: 1.7, ml: '30px' }} />


                                            <Stack direction='row'>
                                                <Box component='img' src={pg1} alt='...' sx={{ ml: '15px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg2} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg3} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                            </Stack>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                activities manager - chicago
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                chicago-USA
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                                self
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                                13
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                                18y
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                                24h ago
                                            </Typography>

                                            <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12, filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />

                                        </Stack>
                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px', bgcolor: '#F0F0F0' }} elevation={4} id='6'>

                                    <Stack direction='row'>
                                        <Paper sx={{ p: 0.4, bgcolor: '#84AC04', borderRadius: '12px 0px 0px 12px' }} elevation={0}></Paper>
                                        <Stack direction='row' sx={{ p: 1.5 }}>

                                            <CircleIcon sx={{ color: '#84AC04', mt: 1.7, ml: '30px' }} />


                                            <Stack direction='row'>
                                                <Box component='img' src={pg1} alt='...' sx={{ ml: '15px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg2} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                                <Box component='img' src={pg3} alt='...' sx={{ ml: '4px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />
                                            </Stack>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                activities manager - chicago
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                                chicago-USA
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                                self
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                                13
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                                18y
                                            </Typography>

                                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                                24h ago
                                            </Typography>

                                            <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12, filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />

                                        </Stack>
                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px' }} elevation={4} id='7'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>

                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px' }} elevation={4} id='8'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>

                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>


                                <Paper sx={{ borderRadius: '12px', mt: '7px', ml: '12.5px', width: '1327px' }} elevation={4} id='9'>

                                    <Stack direction='row' sx={{ p: 1.5 }}>

                                        <Stack direction='row'>
                                            <Box component='img' src={pg1} alt='...' sx={{ ml: '79px' }} />
                                            <Box component='img' src={pg2} alt='...' sx={{ ml: '4px' }} />
                                            <Box component='img' src={pg3} alt='...' sx={{ ml: '4px' }} />
                                        </Stack>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            activities manager - chicago
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '49px', mt: '15px' }}>
                                            chicago-USA
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '96px', mt: '15px' }}>
                                            self
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '125px', mt: '15px' }}>
                                            13
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '111px', mt: '15px' }}>
                                            18y
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: "14px", ml: '100px', mt: '15px' }}>
                                            24h ago
                                        </Typography>

                                        <Box component='img' src={dbin} alt='...' sx={{ width: '24px', height: '25px', mt: '10px', ml: 12 }} />

                                    </Stack>

                                </Paper>


                            </Box>

                        </Paper>






                    </Box>

                </Grid>
            </Grid>

        </>
    )
}

export default Position
