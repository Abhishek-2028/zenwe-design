
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  Grid,
  Stack,
  Divider,
  Badge,
  Avatar,
  Link,
  Paper,
  Menu,
  MenuItem
} from '@mui/material'
import logo2 from '../img-zenwe/logo2.png'
import jobsearch from '../img-zenwe/jobsearch.png'
import jb2 from '../img-zenwe/jb2.png'
import jb3 from '../img-zenwe/jb3.png'
import jb4 from '../img-zenwe/jb4.png'
import line from '../img-zenwe/line.png'
import zero from '../img-zenwe/zero.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import group from '../img-zenwe/group.png'
import one from '../img-zenwe/1.png'
import two from '../img-zenwe/2.png'
import mp1 from '../img-zenwe/mp1.png'
import mp2 from '../img-zenwe/mp2.png'
import mp3 from '../img-zenwe/mp3.png'
import mp4 from '../img-zenwe/mp4.png'
import ma1 from '../img-zenwe/ma1.png'
import ac1 from '../img-zenwe/ac1.png'
import ac2 from '../img-zenwe/ac2.png'
import ac3 from '../img-zenwe/ac3.png'
import ac4 from '../img-zenwe/ac4.png'
import ac5 from '../img-zenwe/ac5.png'
import gl from '../img-zenwe/gl.png'
import timer from '../img-zenwe/gis_timer.png'
import person from '../img-zenwe/person.png'
import calendar from '../img-zenwe/calendar.png'
import menuimg from '../img-zenwe/menuimg.png'
import scr from '../img-zenwe/scr.png'
import gift from '../img-zenwe/gift.png'
import monitar from '../img-zenwe/monitar.png'
import speak from '../img-zenwe/speak.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import avtar from '../img-zenwe/avtar.png'
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CircleIcon from '@mui/icons-material/Circle';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { FiLogOut } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'



const Dashboard = () => {

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
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ ml: -1 }}>
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

                <MenuItem sx={{ mt: 1.3 }} >
                  <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                    <FaBuilding style={{ color: '#1A344B', height: "20px", width: '20px' }} />
                    <Typography sx={{ ml: 2, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                      Company Settings
                    </Typography>
                  </Stack>
                </MenuItem>

                <MenuItem>
                  <Stack direction='row' sx={{ ml: 2.7, my: 0.5 }}>
                    <SettingsSuggestIcon sx={{ color: '#1A344B' }} />
                    <Typography sx={{ ml: 1.7, mt: 0.2, textTransform: 'capitalize', fontFamily: 'Montserrat', color: '#1A344B', fontSize: '14px', fontWeight: 600 }}>
                      Recruiting Preferences
                    </Typography>
                    <ArrowRightIcon sx={{ color: '#1A344B', height: 28, width: 28, ml: 3 }} />
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
                      backgroundColor: 'white',
                      color: '#1A344B',
                      padding: '9px',
                      fontStyle: 'normal',
                      borderRadius: "16px 0px 0px 16px",
                      textTransform: 'capitalize',
                      marginLeft: '33px'
                    }}
                  ><HomeRoundedIcon sx={{ height: 40, width: 40, ml: -8, my: -2 }} />
                    <Box component='span' sx={{ ml: 2.5, fontWeight: 600, fontSize: '19.44px', fontFamily: 'Montserrat' }}>
                      Dashboard
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

                  {/* style={{
                    backgroundColor: 'white',
                    color: '#1A344B',
                    padding: '9px',
                    fontStyle: 'normal',
                    borderRadius: "16px 0px 0px 16px",
                    fontSize: '11.44px',
                    textTransform: 'capitalize',

                  }} */}

                </Stack>

              </Box>
            </Grid>
            <Divider sx={{ height: 2 }} />
            <Grid item xl={4} sx={{ bgcolor: '#1A344B' }}>
              <Box component='div' sx={{ my: 9.5 }}>

                <Stack spacing={4}>


                  <Button style={{
                    color: 'white',
                    padding: '9px',
                    fontStyle: 'normal',
                    borderRadius: "16px 0px 0px 16px",
                    fontSize: '11.44px',
                    textTransform: 'capitalize',
                  }}
                  >
                    <BusinessCenterIcon sx={{ height: 32, width: 32, ml: 3 }} />
                    <Link href='/position' underline='none'>
                      <Box component='span' sx={{ fontSize: 19.44, fontFamily: 'Montserrat', ml: 3, color: 'white' }}> Positions </Box>
                    </Link>
                    <AddCircleRoundedIcon sx={{ ml: 5, mt: 0.4, color: '#84AC04' }} />
                  </Button>


                  <Button style={{
                    color: 'white',
                    padding: '9px',
                    fontStyle: 'normal',
                    borderRadius: "16px 0px 0px 16px",
                    fontSize: '11.44px',
                    textTransform: 'capitalize',
                    marginBottom: "40px"
                  }}

                  >
                    <PersonRoundedIcon sx={{ height: 30, width: 30, ml: 2.5 }} />
                    <Box component='span' sx={{ fontSize: 19.44, fontFamily: 'Montserrat', ml: 2.5 }}> Candidates </Box>
                    <AddCircleRoundedIcon sx={{ ml: 2.5, mt: 0.4, color: '#84AC04' }} />
                  </Button>

                </Stack>
              </Box>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xl={10}>
          <Grid>
            <Grid item>
              <AppBar position="static" sx={{ bgcolor: 'white', height: 90 }} elevation={1}>
                <Toolbar>
                  <Typography sx={{ color: "#1A344B", fontSize: 28, fontWeight: 600, fontFamily: 'Montserrat', mt: 3 }}>
                    Dashboard
                  </Typography>


                  <Stack direction='row' sx={{ ml: 115 }}>

                    <Badge badgeContent={3} color="success" sx={{ mr: 2, mt: 3.5 }}>
                      <NotificationsIcon sx={{ fontSize: 33, color: '#1A344B', my: -0.5, mx: -1 }} />
                    </Badge>

                    <IconButton sx={{ mt: 2, mr: 3.5 }}>
                      <HelpIcon sx={{ fontSize: 30, color: '#1A344B' }} />
                    </IconButton>

                    <Avatar alt="Avtar" src={avtar} sx={{ mt: 3 }} />

                    <Typography sx={{ color: "black", ml: 2.5, mt: 4.5, fontFamily: 'Montserrat', fontWeight: 600, fontSize: 15 }} component="div" >
                      Joshua<span style={{ marginLeft: "3px" }} >Bass</span>
                    </Typography>
                  </Stack>
                </Toolbar>
              </AppBar>
            </Grid>

            <Grid item sx={{ bgcolor: '#F0F0F0' }}>
              <Box component='div' sx={{ p: 2.5 }}>
                <Grid direction='column'>
                  <Grid item sx={{ mt: 2 }}>

                    <Stack direction='row' spacing={1.5}>
                      <Paper sx={{ height: 128, width: 352, borderRadius: 2.5 }} elevation={3}>
                        <Box component='img' src={group} alt='...' sx={{ ml: 37.5, mt: 1 }} />
                        <Stack direction='row' >
                          <Box component='img' sx={{ ml: 3, mt: -1, height: 75, width: 75, position: 'sticky' }} src={jobsearch} alt='....' />
                          <Box component='img' sx={{ mt: -2.6, ml: 3, width: 0.001, height: 110, position: 'sticky' }} src={line} alt='....' />
                          <Stack>
                            <Box component='img' src={zero} sx={{ width: 35, ml: 7, mt: -2, position: 'sticky' }} alt='...' />
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 5.3, mt: 0.8 }}>
                              Position
                            </Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 4.6 }}>
                              Activated
                            </Typography>
                          </Stack>
                        </Stack>
                      </Paper>

                      <Paper sx={{ height: 128, width: 352, borderRadius: 2.5 }} elevation={3}>
                        <Box component='img' src={group} alt='...' sx={{ ml: 37.5, mt: 1 }} />
                        <Stack direction='row' >
                          <Box component='img' sx={{ ml: 3, mt: -1, height: 75, width: 75, position: 'sticky' }} src={jb2} alt='....' />
                          <Box component='img' sx={{ mt: -2.6, ml: 3, width: 0.001, height: 110, position: 'sticky' }} src={line} alt='....' />
                          <Stack>
                            <Box component='img' src={one} sx={{ width: 17, ml: 7, mt: -2, position: 'sticky' }} alt='...' />
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 6.3, mt: 0.8 }}>
                              New
                            </Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 2.6 }}>
                              Candidates
                            </Typography>
                          </Stack>
                        </Stack>
                      </Paper>

                      <Paper sx={{ height: 128, width: 352, borderRadius: 2.5 }} elevation={3}>
                        <Box component='img' src={group} alt='...' sx={{ ml: 37.5, mt: 1 }} />
                        <Stack direction='row' >
                          <Box component='img' sx={{ ml: 3, mt: -1, height: 75, width: 75, position: 'sticky' }} src={jb3} alt='....' />
                          <Box component='img' sx={{ mt: -2.6, ml: 3, width: 0.001, height: 110, position: 'sticky' }} src={line} alt='....' />
                          <Stack>
                            <Box component='img' src={two} sx={{ width: 35, ml: 7, mt: -2, position: 'sticky' }} alt='...' />
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 3.5, mt: 0.8 }}>
                              Candidates
                            </Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 3.5 }}>
                              Progressing
                            </Typography>
                          </Stack>
                        </Stack>
                      </Paper>


                      <Paper sx={{ height: 128, width: 352, borderRadius: 2.5 }} elevation={3}>
                        <Box component='img' src={group} alt='...' sx={{ ml: 37.5, mt: 1 }} />
                        <Stack direction='row' >
                          <Box component='img' sx={{ ml: 3, mt: -1, height: 75, width: 75, position: 'sticky' }} src={jb4} alt='....' />
                          <Box component='img' sx={{ mt: -2.6, ml: 3, width: 0.001, height: 110, position: 'sticky' }} src={line} alt='....' />
                          <Stack>
                            <Box component='img' src={zero} sx={{ width: 35, ml: 7, mt: -2, position: 'sticky' }} alt='...' />
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 3.5, mt: 0.8 }}>
                              Candidates
                            </Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 6.2 }}>
                              Hired
                            </Typography>
                          </Stack>
                        </Stack>
                      </Paper>

                    </Stack>

                  </Grid>

                  <Grid item>
                    <Box component='div' sx={{ mt: 3 }}>
                      <Stack direction='row' spacing={2.5}>

                        <Box component='div'>
                          <Paper sx={{ borderRadius: "12px 12px 0px 0px", bgcolor: '#F7F2F2' }} elevation={4}>
                            <Stack direction='row'>
                              <BusinessCenterIcon sx={{ color: '#1A344B', ml: 2, mt: 2 }} />
                              <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 2, mt: 2 }}>
                                My Positions
                              </Typography>
                              <ArrowDropDownIcon sx={{ color: '#1A344B', mt: 2 }} />
                            </Stack>

                            <Box component='div' sx={{ p: 2.5 }}>
                              <Paper sx={{ p: 0.5, borderRadius: "12px 12px 0px 0px", mt: -1, mb: 5 }}>

                                <Box component='div' id='1'>
                                  <Stack direction='row' >
                                    <CircleIcon sx={{ height: 15, width: 15, color: '#84AC04', ml: 1, mt: 2 }} />
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '16', fontFamily: 'Montserrat', fontWeight: 600, mt: 1.3, ml: 2 }}>
                                      activities manager - pawnee
                                    </Typography>
                                    <Paper sx={{ height: 18, width: 72, bgcolor: '#84AC04', mt: 1.7, ml: 5.7 }}>
                                      <Stack direction='row'>
                                        <VolumeMuteIcon sx={{ height: 13, width: 13, color: 'white', mt: 0.4 }} />
                                        <Typography sx={{ fontSize: 11.71, color: 'white', ml: 1 }}>
                                          Promote
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                    <Paper sx={{ width: 25, height: 18, bgcolor: '#84AC04', mt: 1.7, ml: 1, mr: 1 }}>
                                      < SettingsIcon sx={{ height: 13, width: 13, color: 'white', ml: 0.7, mb: 0.1 }} />
                                    </Paper>
                                  </Stack>
                                  <Stack direction='row'>
                                    <Box component='div' sx={{ ml: 1, mt: 1.5 }}>
                                      <Stack direction='column'>
                                        <Stack direction='row'>
                                          <LocationOnIcon sx={{ height: 13, width: 13, color: '#000000' }} />
                                          <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 1.8 }}>
                                            Remote
                                          </Typography>
                                        </Stack>

                                        <Box component='div' sx={{ mt: 1.7, mb: 1 }}>
                                          <Stack direction='row' spacing={1}>
                                            <Box component='img' src={mp1} alt='...' />
                                            <Box component='img' src={mp2} alt='...' />
                                            <Box component='img' src={mp3} alt='...' />
                                            <Box component='img' src={mp4} alt='...' />
                                            <Box component='div' sx={{ mb: 25 }}>
                                              <AddIcon sx={{ height: 12, width: 12 }} />

                                            </Box>

                                          </Stack>
                                        </Box>


                                      </Stack>


                                    </Box>

                                    <Box component='div' sx={{ ml: 16, mt: 3 }}>
                                      <Stack direction='row'>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600 }}>
                                          Pipeline
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 2 }} >
                                          Candidates
                                        </Typography>

                                      </Stack>
                                    </Box>

                                  </Stack>

                                </Box>

                                <Divider />


                                <Box component='div' id='2'>
                                  <Stack direction='row' >
                                    <CircleIcon sx={{ height: 15, width: 15, color: '#84AC04', ml: 1, mt: 2 }} />
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '16', fontFamily: 'Montserrat', fontWeight: 600, mt: 1.3, ml: 2 }}>
                                      director of parks & recreation
                                    </Typography>
                                    <Paper sx={{ height: 18, width: 72, bgcolor: '#84AC04', mt: 1.7, ml: 4 }}>
                                      <Stack direction='row'>
                                        <VolumeMuteIcon sx={{ height: 13, width: 13, color: 'white', mt: 0.4 }} />
                                        <Typography sx={{ fontSize: 11.71, color: 'white', ml: 1 }}>
                                          Promote
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                    <Paper sx={{ width: 25, height: 18, bgcolor: '#84AC04', mt: 1.7, ml: 1, mr: 1 }}>
                                      < SettingsIcon sx={{ height: 13, width: 13, color: 'white', ml: 0.7, mb: 0.1 }} />
                                    </Paper>
                                  </Stack>
                                  <Stack direction='row'>
                                    <Box component='div' sx={{ ml: 1, mt: 1.5 }}>
                                      <Stack direction='column'>
                                        <Stack direction='row'>
                                          <LocationOnIcon sx={{ height: 13, width: 13, color: '#000000' }} />
                                          <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 1.8 }}>
                                            Pawnee, IN
                                          </Typography>
                                        </Stack>

                                        <Box component='div' sx={{ mt: 1.7, mb: 1 }}>
                                          <Stack direction='row' spacing={1}>
                                            <Box component='img' src={mp1} alt='...' />
                                            <Box component='img' src={mp2} alt='...' />
                                            <Box component='img' src={mp3} alt='...' />
                                            <Box component='img' src={mp4} alt='...' />
                                            <Box component='div' sx={{ mb: 25 }}>
                                              <AddIcon sx={{ height: 12, width: 12 }} />

                                            </Box>

                                          </Stack>
                                        </Box>


                                      </Stack>


                                    </Box>

                                    <Box component='div' sx={{ ml: 16, mt: 3 }}>
                                      <Stack direction='row'>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600 }}>
                                          Pipeline
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 2 }} >
                                          Candidates
                                        </Typography>

                                      </Stack>
                                    </Box>

                                  </Stack>

                                </Box>

                                <Divider />


                                <Box component='div' id='3'>
                                  <Stack direction='row' >
                                    <CircleIcon sx={{ height: 15, width: 15, color: '#84AC04', ml: 1, mt: 2 }} />
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '16', fontFamily: 'Montserrat', fontWeight: 600, mt: 1.3, ml: 1.6 }}>
                                      talent to consider for director
                                    </Typography>
                                    <Paper sx={{ height: 18, width: 72, bgcolor: '#84AC04', mt: 1.7, ml: 3.8 }}>
                                      <Stack direction='row'>
                                        <VolumeMuteIcon sx={{ height: 13, width: 13, color: 'white', mt: 0.4 }} />
                                        <Typography sx={{ fontSize: 11.71, color: 'white', ml: 1 }}>
                                          Promote
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                    <Paper sx={{ width: 25, height: 18, bgcolor: '#84AC04', mt: 1.7, ml: 1, mr: 1 }}>
                                      < SettingsIcon sx={{ height: 13, width: 13, color: 'white', ml: 0.7, mb: 0.1 }} />
                                    </Paper>
                                  </Stack>
                                  <Stack direction='row'>
                                    <Box component='div' sx={{ ml: 1, mt: 1.5 }}>
                                      <Stack direction='column'>
                                        <Stack direction='row'>
                                          <PersonRoundedIcon sx={{ height: 13, width: 13, color: '#000000' }} />
                                          <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 1.8 }}>
                                            Candidate pool
                                          </Typography>
                                        </Stack>

                                        <Box component='div' sx={{ mt: 1.7, mb: 1 }}>
                                          <Stack direction='row' spacing={1}>
                                            <Box component='img' src={mp1} alt='...' />
                                            <Box component='img' src={mp2} alt='...' />
                                            <Box component='img' src={mp3} alt='...' />
                                            <Box component='img' src={mp4} alt='...' />
                                            <Box component='div' sx={{ mb: 25 }}>
                                              <AddIcon sx={{ height: 12, width: 12 }} />

                                            </Box>

                                          </Stack>
                                        </Box>


                                      </Stack>


                                    </Box>

                                    <Box component='div' sx={{ ml: 16, mt: 3 }}>
                                      <Stack direction='row'>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600 }}>
                                          Pipeline
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 2 }} >
                                          Candidates
                                        </Typography>

                                      </Stack>
                                    </Box>

                                  </Stack>

                                </Box>


                                <Divider />


                                <Box component='div' id='4'>
                                  <Stack direction='row' >
                                    <CircleIcon sx={{ height: 15, width: 15, color: '#84AC04', ml: 1, mt: 2 }} />
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '16', fontFamily: 'Montserrat', fontWeight: 600, mt: 1.3, ml: 2 }}>
                                      Deputy Director of parks and<br />
                                      Recreation
                                    </Typography>
                                    <Paper sx={{ height: 18, width: 72, bgcolor: '#84AC04', mt: 1.7, ml: 4.7 }}>
                                      <Stack direction='row'>
                                        <VolumeMuteIcon sx={{ height: 13, width: 13, color: 'white', mt: 0.4 }} />
                                        <Typography sx={{ fontSize: 11.71, color: 'white', ml: 1 }}>
                                          Promote
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                    <Paper sx={{ width: 25, height: 18, bgcolor: '#84AC04', mt: 1.7, ml: 1, mr: 1 }}>
                                      < SettingsIcon sx={{ height: 13, width: 13, color: 'white', ml: 0.7, mb: 0.1 }} />
                                    </Paper>
                                  </Stack>
                                  <Stack direction='row'>
                                    <Box component='div' sx={{ ml: 1, mt: 1.5 }}>
                                      <Stack direction='column'>
                                        <Stack direction='row'>
                                          <LocationOnIcon sx={{ height: 13, width: 13, color: '#000000' }} />
                                          <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 1.8 }}>
                                            Pawnee,IN
                                          </Typography>
                                        </Stack>

                                        <Box component='div' sx={{ mt: 1.7, mb: 1 }}>
                                          <Stack direction='row' spacing={1}>
                                            <Box component='img' src={mp1} alt='...' />
                                            <Box component='img' src={mp2} alt='...' />
                                            <Box component='img' src={mp3} alt='...' />
                                            <Box component='img' src={mp4} alt='...' />
                                            <Box component='div' sx={{ mb: 25 }}>
                                              <AddIcon sx={{ height: 12, width: 12 }} />

                                            </Box>

                                          </Stack>
                                        </Box>


                                      </Stack>


                                    </Box>

                                    <Box component='div' sx={{ ml: 16, mt: 3 }}>
                                      <Stack direction='row'>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600 }}>
                                          Pipeline
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 2 }} >
                                          Candidates
                                        </Typography>

                                      </Stack>
                                    </Box>

                                  </Stack>

                                </Box>


                                <Divider />


                                <Box component='div' id='5'>
                                  <Stack direction='row' >
                                    <CircleIcon sx={{ height: 15, width: 15, color: '#84AC04', ml: 1, mt: 2 }} />
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '16', fontFamily: 'Montserrat', fontWeight: 600, mt: 1.3, ml: 2 }}>
                                      paid Intern
                                    </Typography>
                                    <Paper sx={{ height: 18, width: 72, bgcolor: '#84AC04', mt: 1.7, ml: 23.6 }}>
                                      <Stack direction='row'>
                                        <VolumeMuteIcon sx={{ height: 13, width: 13, color: 'white', mt: 0.4 }} />
                                        <Typography sx={{ fontSize: 11.71, color: 'white', ml: 1 }}>
                                          Promote
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                    <Paper sx={{ width: 25, height: 18, bgcolor: '#84AC04', mt: 1.7, ml: 1, mr: 1 }}>
                                      < SettingsIcon sx={{ height: 13, width: 13, color: 'white', ml: 0.7, mb: 0.1 }} />
                                    </Paper>
                                  </Stack>
                                  <Stack direction='row'>
                                    <Box component='div' sx={{ ml: 1, mt: 1.5 }}>
                                      <Stack direction='column'>
                                        <Stack direction='row'>
                                          <LocationOnIcon sx={{ height: 13, width: 13, color: '#000000' }} />
                                          <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 1.8 }}>
                                            Pawnee,IN
                                          </Typography>
                                        </Stack>

                                        <Box component='div' sx={{ mt: 1.7, mb: 4 }}>
                                          <Stack direction='row' spacing={1}>
                                            <Box component='img' src={mp1} alt='...' />
                                            <Box component='img' src={mp2} alt='...' />
                                            <Box component='img' src={mp3} alt='...' />
                                            <Box component='img' src={mp4} alt='...' />
                                            <Box component='div' sx={{ mb: 25 }}>
                                              <AddIcon sx={{ height: 12, width: 12 }} />

                                            </Box>

                                          </Stack>
                                        </Box>


                                      </Stack>


                                    </Box>

                                    <Box component='div' sx={{ ml: 16, mt: 3 }}>
                                      <Stack direction='row'>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600 }}>
                                          Pipeline
                                        </Typography>
                                        <Typography sx={{ fontSize: 11.71, color: '#000000', fontFamily: 'Montserrat', fontWeight: 600, ml: 2 }} >
                                          Candidates
                                        </Typography>

                                      </Stack>
                                    </Box>
                                  </Stack>
                                </Box>
                              </Paper>
                            </Box>
                          </Paper>
                        </Box>

                        <Box component='div'>
                          <Stack direction='column' spacing={1}>
                            <Paper sx={{ borderRadius: "12px 12px 0px 0px", bgcolor: '#F7F2F2' }} elevation={4} id='1'>
                              <Stack direction='row'>
                                <BusinessCenterIcon sx={{ color: '#1A344B', ml: 2, mt: 2 }} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 2, mt: 2 }}>
                                  New Candidates
                                </Typography>
                                <ArrowDropDownIcon sx={{ color: '#1A344B', mt: 2 }} />
                              </Stack>

                              <Box component='div' sx={{ p: 2.5, mb: 9 }}>
                                <Paper sx={{ p: 0.5, borderRadius: "12px 12px 0px 0px", mt: -1, width: 378 }} elevation={0}>
                                  <Box component='div' sx={{ p: 1 }} id="1">
                                    <Stack direction='row' sx={{ mt: 2 }}>
                                      <Box component='div'>
                                        <Avatar sx={{ bgcolor: '#1A344B', fontFamily: 'Montserrat', fontWeight: 600 }}>K</Avatar>
                                      </Box>

                                      <Box component='div' sx={{ ml: 1.5 }}>
                                        <Stack direction='column'>
                                          <Typography sx={{ color: '#1A344B', fontSize: '16', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                            Kyle May
                                          </Typography>
                                          <Stack direction='row' sx={{ mt: 0.5 }} >
                                            <Box component='div'>
                                              <BusinessCenterIcon sx={{ color: '#1A344B', height: 13, width: 13 }} />
                                            </Box>
                                            <Typography sx={{ ml: 0.5, textTransform: 'capitalize', color: '#1A344B', fontSize: 12, fontWeight: 200, fontFamily: 'Montserrat' }}>
                                              deputy director of parks and<br />recre.....
                                            </Typography>
                                          </Stack>
                                        </Stack>
                                      </Box>
                                    </Stack>
                                  </Box>
                                  <Divider sx={{ height: 1 }} />

                                  <Box component='div' sx={{ p: 1 }} id='2'>
                                    <Stack direction='row' sx={{ mt: 2 }}>
                                      <Box component='div'>
                                        <Avatar sx={{ bgcolor: '#1A344B', fontFamily: 'Montserrat', fontWeight: 600 }}>S</Avatar>
                                      </Box>

                                      <Box component='div' sx={{ ml: 1.5 }}>
                                        <Stack direction='column'>
                                          <Typography sx={{ color: '#1A344B', fontSize: '16', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                            Syed Samiur Rahman
                                          </Typography>
                                          <Typography sx={{ textTransform: 'capitalize', color: '#1A344B', fontSize: 12, fontWeight: 200, fontFamily: 'Montserrat' }}>
                                            head of sales learner nation
                                          </Typography>
                                          <Stack direction='row' sx={{ mt: 0.5 }} >
                                            <Box component='div'>
                                              <BusinessCenterIcon sx={{ color: '#1A344B', height: 13, width: 13 }} />
                                            </Box>

                                            <Typography sx={{ ml: 0.5, textTransform: 'capitalize', color: '#1A344B', fontSize: 12, fontWeight: 200, fontFamily: 'Montserrat' }}>
                                              deputy director of parks and<br />recre.....
                                            </Typography>
                                          </Stack>
                                        </Stack>
                                      </Box>
                                    </Stack>
                                  </Box>


                                </Paper>

                              </Box>
                            </Paper>


                            <Paper sx={{ borderRadius: "12px 12px 0px 0px", bgcolor: '#F7F2F2' }} elevation={4} id='1'>

                              <Stack direction='row'>
                                <CheckBoxIcon sx={{ color: '#1A344B', ml: 2, mt: 2.5, height: 14.5, width: 14.5 }} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 1, mt: 2 }}>
                                  My Tasks
                                </Typography>
                              </Stack>

                              <Box component='div' sx={{ p: 2.5, mb: 18 }}>
                                <Paper sx={{ p: 0.5, borderRadius: "12px 12px 0px 0px", mt: -1 }} elevation={0}>
                                  <Box component='div' sx={{ p: 1.5, ml: 0.5, mb: 4 }}>
                                    <Stack direction='column'>
                                      <Box component='div'>
                                        <Stack direction='row'>
                                          <CheckCircleOutlineRoundedIcon sx={{ height: 23, mt: 0.4 }} />
                                          <Typography sx={{ ml: 1, textTransform: 'capitalize', color: '#1A344B', fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: 600 }}>
                                            follow up with keysha
                                          </Typography>
                                        </Stack>

                                      </Box>
                                      <Box component='div' sx={{ ml: 3.8, mt: 1.8 }}>
                                        <Stack direction='row'>
                                          <Box component='img' src={timer} alt='...' sx={{ height: 15 }} />
                                          <Typography sx={{ ml: 1, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600, color: '#1A344B' }}>
                                            Due Tomorrow
                                          </Typography>
                                          <Box component='div' sx={{ ml: 1.5 }}>
                                            <Stack direction='row'>
                                              <Box component='img' src={person} alt='...' sx={{ height: 13, mt: 0.3 }} />
                                              <Typography sx={{ ml: 0.5, fontSize: 10, fontFamily: 'Montserrat', fontWeight: 600, color: '#1A344B' }}>
                                                You
                                              </Typography>

                                            </Stack>
                                          </Box>

                                        </Stack>
                                      </Box>

                                    </Stack>
                                  </Box>
                                </Paper>

                              </Box>

                            </Paper>
                          </Stack>
                        </Box>

                        <Box component='div'>
                          <Stack direction='column' spacing={1}>
                            <Paper id='1' sx={{ bgcolor: '#F6F2F2', borderRadius: '12px 12px 0px 0px', width: 400, height: 179.2 }} elevation={3}>
                              <Box component='div' sx={{ p: 1, pl: 2 }}>

                                <Stack direction='column'>
                                  <Box component='div'>
                                    <Stack direction='row'>
                                      <Box component='img' src={calendar} alt='...' sx={{ height: 15, width: 15, mt: 0.5 }} />
                                      <Typography sx={{ ml: 1, fontSize: 16.21, fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                        My Agenda
                                      </Typography>
                                    </Stack>
                                  </Box>

                                  <Box component='div' sx={{ ml: 3, mt: 1.5 }}>
                                    <Typography sx={{ fontSize: 16.21, fontWeight: 200, fontFamily: 'Montserrat', color: '#1A344B', textTransform: 'capitalize' }}>
                                      syed samiur rahman meeting (deputy<br />director of parks and recreation)
                                    </Typography>
                                    <Stack direction='row' sx={{ mt: 1 }}>
                                      <Box component='img' src={timer} alt='...' sx={{ height: 13.51, width: 13.51, mt: 0.4 }} />
                                      <Typography sx={{ fontSize: 13, fontFamily: 'Montserrat', fontWeight: 200, color: '#1A344B', ml: 1 }}>
                                        12:15 PM (EDT)
                                      </Typography>
                                    </Stack>
                                  </Box>

                                  <Box component='img' src={ma1} alt='...' sx={{ width: 36, mt: 1.2 }} />

                                </Stack>
                              </Box>

                            </Paper>

                            <Paper id='2' sx={{ bgcolor: '#F6F2F2', borderRadius: '12px 12px 0px 0px' }} elevation={3}>
                              <Stack direction='row'>
                                <MailRoundedIcon sx={{ color: '#1A344B', ml: 2, mt: 2.3, height: 16.5, width: 16.5 }} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: '#1A344B', ml: 1.5, mt: 2 }}>
                                  All Conversation
                                </Typography>
                                <ArrowDropDownIcon sx={{ color: '#1A344B', mt: 2 }} />
                              </Stack>

                              <Box component='div' sx={{ p: 2, mt: -1 }}>

                                <Paper sx={{ borderRadius: '12px 12px 0px 0px' }}>
                                  <Box component='div' id='1' >
                                    <Stack direction='row' >

                                      <Box component='div' sx={{ mb: 1 }}>
                                        <Stack direction='row'>
                                          <Box component='img' src={ac1} alt='...' sx={{ height: 35, width: 35, ml: 1.5, mt: 1 }} />

                                          <Box component='div' sx={{ ml: 1.5, mt: 1 }}>
                                            <Stack direction='column'>
                                              <Typography sx={{ fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                Ron Swanson
                                              </Typography>
                                              <Typography sx={{ mt: 0.8, fontSize: 10.81, textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                agreed. why would anybody ever eat anything <br />besides
                                              </Typography>

                                            </Stack>
                                          </Box>
                                        </Stack>
                                      </Box>

                                      <Box component='div'>
                                        <Typography sx={{ fontSize: 10.81, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B', mt: 1.5, ml: -1 }}>
                                          28d ago
                                        </Typography>
                                      </Box>

                                    </Stack>
                                  </Box>

                                  <Divider sx={{ bgcolor: 'black' }} />

                                  <Box component='div' id='2' >
                                    <Stack direction='row' >

                                      <Box component='div' sx={{ mb: 1.5 }}>
                                        <Stack direction='row'>
                                          <Box component='img' src={ac2} alt='...' sx={{ height: 35, width: 35, ml: 1.5, mt: 1 }} />

                                          <Box component='div' sx={{ ml: 1.5, mt: 1 }}>
                                            <Stack direction='column'>
                                              <Typography sx={{ textTransform: 'capitalize', fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                sandra sosa
                                              </Typography>
                                              <Typography sx={{ mt: 0.8, fontSize: 10.81, textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                test sandra sosa lorem ipsum is a dummy
                                              </Typography>

                                            </Stack>
                                          </Box>
                                        </Stack>
                                      </Box>

                                      <Box component='div'>
                                        <Typography sx={{ fontSize: 10.81, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B', mt: 1.5, ml: 1.8 }}>
                                          1mo ago
                                        </Typography>
                                      </Box>

                                    </Stack>
                                  </Box>

                                  <Divider sx={{ bgcolor: 'black' }} />

                                  <Box component='div'>
                                    <Stack direction='column'>

                                      <Box component='div' id='2' >
                                        <Stack direction='row' >

                                          <Box component='div' >
                                            <Stack direction='row'>
                                              <Box component='img' src={ac3} alt='...' sx={{ height: 35, width: 35, ml: 1.5, mt: 1 }} />

                                              <Box component='div' sx={{ ml: 1.5, mt: 1 }}>
                                                <Stack direction='column'>
                                                  <Typography sx={{ textTransform: 'capitalize', fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    Syed Saimur Rahman
                                                  </Typography>
                                                  <Typography sx={{ mt: 0.8, fontSize: 10.81, textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    Head of Sales learner nation
                                                  </Typography>

                                                </Stack>
                                              </Box>
                                            </Stack>
                                          </Box>

                                          <Box component='div'>
                                            <Typography sx={{ fontSize: 10.81, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B', mt: 1.5, ml: 10.3 }}>
                                              5h ago
                                            </Typography>
                                          </Box>

                                        </Stack>
                                      </Box>

                                      <Box component='div' sx={{ ml: 3, mb: 1.5, mt: 0.7 }}>
                                        <Stack direction='row'>
                                          <Box component='div'>
                                            <Avatar sx={{ bgcolor: '#1A344B', height: 18, width: 18, fontSize: 12, mt: 0.3 }}>L</Avatar>
                                          </Box>
                                          <Box component='div'>
                                            <Stack direction='row'>
                                              <Box component='img' src={gl} alt='...' sx={{ ml: 1.4, height: 1, mt: 0.5 }} />

                                              <Typography sx={{ textTransform: 'capitalize', fontSize: 10, ml: 0.4 }}>
                                                hi, syed, you re confirmed for the following<br />inter....
                                              </Typography>

                                            </Stack>
                                          </Box>
                                        </Stack>

                                      </Box>
                                    </Stack>
                                  </Box>

                                  <Divider sx={{ bgcolor: 'black' }} />

                                  <Box component='div'>
                                    <Stack direction='column'>

                                      <Box component='div' id='2' >
                                        <Stack direction='row' >

                                          <Box component='div' >
                                            <Stack direction='row'>
                                              <Box component='img' src={ac4} alt='...' sx={{ height: 35, width: 35, ml: 1.5, mt: 1 }} />

                                              <Box component='div' sx={{ ml: 1.5, mt: 1 }}>
                                                <Stack direction='column'>
                                                  <Typography sx={{ textTransform: 'capitalize', fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    lindsay Fernadez
                                                  </Typography>
                                                  <Typography sx={{ mt: 0.8, fontSize: 10.81, textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    senior project manager vizergy
                                                  </Typography>

                                                </Stack>
                                              </Box>
                                            </Stack>
                                          </Box>

                                          <Box component='div'>
                                            <Typography sx={{ fontSize: 10.81, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B', mt: 1.5, ml: 10.3 }}>
                                              5h ago
                                            </Typography>
                                          </Box>

                                        </Stack>
                                      </Box>

                                      <Box component='div' sx={{ ml: 3, mb: 1.5, mt: 0.7 }}>
                                        <Stack direction='row'>
                                          <Box component='div'>
                                            <Avatar sx={{ bgcolor: '#1A344B', height: 18, width: 18, fontSize: 12, mt: 0.3 }}>K</Avatar>
                                          </Box>
                                          <Box component='div'>
                                            <Stack direction='row'>
                                              <Box component='img' src={gl} alt='...' sx={{ ml: 1.4, mt: 0.5 }} />

                                              <Typography sx={{ textTransform: 'capitalize', fontSize: 10, ml: 0.4, mt: 0.5 }}>
                                                hi, lindsey please sign.
                                              </Typography>

                                            </Stack>
                                          </Box>
                                        </Stack>

                                      </Box>
                                    </Stack>
                                  </Box>

                                  <Divider sx={{ bgcolor: 'black' }} />

                                  <Box component='div'>
                                    <Stack direction='column'>

                                      <Box component='div' id='2' >
                                        <Stack direction='row' >

                                          <Box component='div' >
                                            <Stack direction='row'>
                                              <Box component='img' src={ac5} alt='...' sx={{ height: 35, width: 35, ml: 1.5, mt: 1 }} />

                                              <Box component='div' sx={{ ml: 1.5, mt: 1 }}>
                                                <Stack direction='column'>
                                                  <Typography sx={{ textTransform: 'capitalize', fontSize: 16.21, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    keysha Rolon
                                                  </Typography>
                                                  <Typography sx={{ mt: 0.8, fontSize: 10.81, textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B' }}>
                                                    USA West Markets sales executive xYZCO
                                                  </Typography>

                                                </Stack>
                                              </Box>
                                            </Stack>
                                          </Box>

                                          <Box component='div'>
                                            <Typography sx={{ fontSize: 10.81, fontFamily: 'Montserrat', fontWeight: '600', color: '#1A344B', mt: 1.5, ml: 3.5 }}>
                                              5h ago
                                            </Typography>
                                          </Box>

                                        </Stack>
                                      </Box>

                                      <Box component='div' sx={{ ml: 3, mb: 1.5, mt: 0.7 }}>
                                        <Stack direction='row'>
                                          <Box component='div'>
                                            <Avatar sx={{ bgcolor: '#1A344B', height: 18, width: 18, fontSize: 12, mt: 0.3 }}>S</Avatar>
                                          </Box>
                                          <Box component='div'>
                                            <Stack direction='row'>
                                              <Box component='img' src={gl} alt='...' sx={{ ml: 1.4, mt: 0.5 }} />

                                              <Typography sx={{ textTransform: 'capitalize', fontSize: 10, ml: 0.4, mt: 0.5 }}>
                                                hi, keysha. we’d like to ask you a few more<br /> que....
                                              </Typography>

                                            </Stack>
                                          </Box>
                                        </Stack>

                                      </Box>
                                    </Stack>
                                  </Box>

                                </Paper>

                              </Box>

                            </Paper>



                          </Stack>



                        </Box>

                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

          </Grid>



        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
