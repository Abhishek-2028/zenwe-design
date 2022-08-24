import { Typography, Grid, Stack, Button, Avatar, Link, Divider, TextField, Dialog,  IconButton } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import React from 'react'
import { Box } from '@mui/system';
import link from '../img-zenwe/link.png'
import SaveIcon from '@mui/icons-material/Save';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';






const Comset = () => {

    const[pop,setPop]=React.useState(false);

    const handelopen=()=> setPop(true);

    const handelclose=()=> setPop(false);

    return (
        <>

            <Dialog open={pop}  maxWidth='md' >
         
                <Box component='div' sx={{ mt: '40px',ml:'50px',mr:'48px' }}>
                    <Stack direction='row' >
                        <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                            Google Apps Integration
                        </Typography>

                        <IconButton sx={{ ml: '324px' }}  onClick={handelclose} >
                        <CancelOutlinedIcon  sx={{height: '38px', width: '38px',color:'#1A344B' }}/>
                         </IconButton>

                    </Stack>
                    <Typography sx={{ mt:'22px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000',opacity:0.7 }}>
                        This feature isn't enabled on your current subscription plan.
                    </Typography>
                </Box>

                <Divider sx={{mt:'50px'}}/>

                <Box component='div' sx={{mt:'30px',mb:'30px',ml:'366px'}}>
                    <Button  variant='contained' startIcon={<CloseRoundedIcon sx={{height:'22px',width:'22px' ,color:'#1A344B'}}/>} style={{backgroundColor:'#DADADA'}}>
                        <Typography sx={{ textTransform:'capitalize',fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: '#1A344B' }}>
                        Dismiss
                        </Typography>
                    </Button>
                    <Button variant='contained' style={{backgroundColor:'#1A344B',marginLeft:'30px'}}>
                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 200, fontSize: '18px', color: 'white' }}>
                        Upgrade Plan
                        </Typography>
                    </Button>
                </Box>

            </Dialog>


            <Grid >
                <Grid item>
                    <Typography sx={{ mt: '60px', ml: '113px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '36px', color: '#1A344B' }}>
                        Company Settings
                        <Link href='/'><CancelOutlinedIcon sx={{ ml: '1118px', height: '38px', width: '38px', color: '#1A344B' }} /></Link>
                    </Typography>
                </Grid>
            </Grid>


            <Grid sx={{ mb: 10 }}>
                <Stack direction='row'>
                    <Grid item lg={2}>
                        <Stack direction='column' sx={{ mt: '80px', ml: '113px' }}>


                            <Stack direction='row'>
                                <Avatar sx={{ bgcolor: '#1A344B' }}>
                                    <SettingsOutlinedIcon />
                                </Avatar>
                                <Link href='/comset' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B' }}>
                                            General
                                        </Typography>
                                    </Button>
                                </Link>
                            </Stack>



                            <Stack direction='row' sx={{ mt: '26px' }}>
                                <Avatar sx={{ bgcolor: '#1A344B', opacity: 0.7 }}>
                                    <PersonOutlineOutlinedIcon />
                                </Avatar>
                                <Link href='/user' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B', opacity: 0.7 }}>
                                            Users
                                        </Typography>
                                    </Button>
                                </Link>
                            </Stack>



                            <Stack direction='row' sx={{ mt: '26px' }}>
                                <Avatar sx={{ bgcolor: '#1A344B', opacity: 0.2 }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Button disabled>
                                    <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px' }}>
                                        Permissions
                                    </Typography>
                                </Button>
                            </Stack>



                            <Stack direction='row' sx={{ mt: '26px' }}>
                                <Avatar sx={{ bgcolor: '#1A344B', opacity: 0.7 }}>
                                    <GroupsOutlinedIcon />
                                </Avatar>
                                <Link href='/team' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B', opacity: 0.7 }}>
                                            Teams
                                        </Typography>
                                    </Button>
                                </Link>
                            </Stack>



                            <Stack direction='row' sx={{ mt: '26px' }}>
                                <Avatar sx={{ bgcolor: '#1A344B', opacity: 0.7 }}>
                                    <DescriptionOutlinedIcon />
                                </Avatar>
                                <Link href='billing' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B', opacity: 0.7 }}>
                                            Billing
                                        </Typography>
                                    </Button>
                                </Link>
                            </Stack>


                        </Stack>

                    </Grid>

                    <Grid item lg={10}>
                        <Box component='div' sx={{ mt: '56px', ml: '86px', border: '1px solid #D3D3D3', borderRadius: '12px', width: '1199px' }}>
                            <Box component='div' sx={{ mt: '30px', ml: '55px' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    General
                                </Typography>
                            </Box>

                            <Divider sx={{ mt: '30px' }} />

                            <Box component='div' sx={{ mt: '30px', ml: '55px' }}>
                                <Stack direction='column'>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                        Company Name
                                    </Typography>
                                    <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', opacity: 0.7 }}>
                                        Keep it short and don't include things like "Inc", "LLC" etc.
                                    </Typography>
                                    <TextField label="Type Here..." variant="outlined" disabled sx={{ mt: '18px', width: '422px' }} />
                                </Stack>
                            </Box>

                            <Box component='div' sx={{ mt: '40px', ml: '55px' }}>
                                <Stack direction='column'>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                        Company Location
                                    </Typography>
                                    <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', opacity: 0.7 }}>
                                        Select the main location of your company. Breezy will use this to designate your primary<br />
                                        timezone for system emails.
                                    </Typography>
                                    <TextField label="Enter A Location" variant="outlined" disabled sx={{ mt: '18px', width: '422px' }} />
                                </Stack>
                            </Box>

                            <Box component='div' sx={{ mt: '40px', ml: '55px' }}>
                                <Stack direction='column'>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                        Single Sign-On (SSO)
                                    </Typography>
                                    <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', opacity: 0.7 }}>
                                        Require employees to sign in with your company’s SSO system.
                                    </Typography>

                                    <Box component='div' sx={{ mt: '25px' }}>
                                        <Stack direction='row'>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.5 }}>
                                                Google Apps
                                            </Typography>
                                            <Button onClick={handelopen} startIcon={<SettingsIcon sx={{ color: '#1A344B' }} />} style={{ marginLeft: "815px", backgroundColor: "#DADADA", color: '#1A344B', textTransform: 'capitalize', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                                Settings
                                            </Button>
                                        </Stack>

                                        <Divider sx={{ mt: '7px', mx: 12, ml: -0.5 }} />

                                        <Stack direction='row' sx={{ mt: '18px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.5 }}>
                                                Okta
                                            </Typography>
                                            <Button startIcon={<SettingsIcon sx={{ color: '#1A344B' }} />} style={{ marginLeft: "889px", backgroundColor: "#DADADA", color: '#1A344B', textTransform: 'capitalize', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                                Settings
                                            </Button>
                                        </Stack>

                                        <Divider sx={{ mt: '7px', mx: 12, ml: -0.5 }} />

                                        <Stack direction='row' sx={{ mt: '18px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.5 }}>
                                                OneLogin
                                            </Typography>
                                            <Button startIcon={<SettingsIcon sx={{ color: '#1A344B' }} />} style={{ marginLeft: "845px", backgroundColor: "#DADADA", color: '#1A344B', textTransform: 'capitalize', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                                Settings
                                            </Button>
                                        </Stack>

                                        <Divider sx={{ mt: '7px', mx: 12, ml: -0.5 }} />

                                        <Stack direction='row' sx={{ mt: '18px' }}>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.5 }}>
                                                SAML
                                            </Typography>
                                            <Button startIcon={<SettingsIcon sx={{ color: '#1A344B' }} />} style={{ marginLeft: "885px", backgroundColor: "#DADADA", color: '#1A344B', textTransform: 'capitalize', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                                Settings
                                            </Button>
                                        </Stack>

                                        <Divider sx={{ mt: '7px', mx: 12, ml: -0.5 }} />
                                    </Box>

                                    <Box component='div' sx={{ mt: '40px' }}>
                                        <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                            Employee Auto-Join
                                        </Typography>
                                        <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Let your employees use their company email address to automagically add themselves as members.
                                        </Typography>
                                        <Typography sx={{ mt: '18px', fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Employee Auto-Join
                                        </Typography>
                                        <Stack direction='row' sx={{ mt: '12px' }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                                Auto-Join URL:
                                            </Typography>

                                            <Box component='img' src={link} alt='...' sx={{ width: '16px', height: '16px', mt: 0.5, ml: 1 }} />

                                            <Typography sx={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat', color: '#4CABCD', ml: 1, opacity: 0.7 }}>
                                                http://app.breezy.hr/signup/zenwe
                                            </Typography>

                                            <Box component='div' sx={{ ml: '392px', mt: -1 }}>
                                                <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Enabled</Button>
                                                <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                            </Box>
                                        </Stack>
                                    </Box>

                                    <Box component='div' sx={{ mt: '40px' }}>
                                        <Stack direction='row'>
                                            <Box component='div'>
                                                <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                    Candidate Data
                                                </Typography>
                                                <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                    Social Discovery
                                                </Typography>
                                                <Typography sx={{ mt: '12px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                    Gather social data about candidates from their public profiles, such as social<br />
                                                    profiles and photos from Linkedin, Twitter, etc.
                                                </Typography>
                                            </Box>


                                            <Box component='div' sx={{ ml: '125px', mt: '98px' }}>
                                                <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Enabled</Button>
                                                <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                            </Box>


                                        </Stack>
                                    </Box>

                                    <Divider sx={{ mt: '25px', mx: 12, ml: -0.5 }} />

                                    <Stack direction='row'>
                                        <Box component='div'>

                                            <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                Aggregate/Combine/Collect Data
                                            </Typography>
                                            <Typography sx={{ mt: '12px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                When viewing a candidate, display information for them across multiple positions<br />
                                                or candidate pools (documents, assessments, discussion, etc.).
                                            </Typography>
                                        </Box>


                                        <Box component='div' sx={{ ml: '73px', mt: '65px' }}>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Enabled</Button>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                        </Box>


                                    </Stack>

                                    <Divider sx={{ mt: '25px', mx: 12, ml: -0.5 }} />

                                    <Stack direction='row'>
                                        <Box component='div' sx={{ mt: '40px' }}>

                                            <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                GDPR Compliance
                                            </Typography>
                                            <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                Use our simple GDPR features to help save you time and simplify compliance. <Box component='span' sx={{ color: '#4CABCD' }}>Learn More</Box>
                                            </Typography>
                                            <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                GDPR Features
                                            </Typography>
                                        </Box>


                                        <Box component='div' sx={{ ml: '4px', mt: '120px' }}>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Enabled</Button>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                        </Box>


                                    </Stack>

                                    <Divider sx={{ mt: '12px', mx: 12, ml: -0.5 }} />

                                    <Stack direction='row'>
                                        <Box component='div' sx={{ mt: '31px' }}>

                                            <Typography sx={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                EEOC Compliance
                                            </Typography>
                                            <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                Use our simple EEOC/OFCCP compliance functionality to take the pain out of candidate<br />
                                                surveys and compliance reporting.
                                            </Typography>
                                            <Typography sx={{ mt: '18px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                EEOC Survey
                                            </Typography>
                                        </Box>

                                        <Box component='div' sx={{ ml: '17px', mt: '140px' }}>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Enabled</Button>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                        </Box>

                                    </Stack>

                                    <Divider sx={{ mt: '12px', mx: 12, ml: -0.5 }} />

                                    <Stack direction='row'>
                                        <Box component='div' sx={{ mt: '21px' }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                                Dispositions
                                            </Typography>
                                        </Box>

                                        <Box component='div' sx={{ ml: '609px', mt: '18px' }}>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Required</Button>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', ml: -0.5, height: '39px', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA', borderLeft: '1px solid #C0C0C0', borderTop: '1px solid #C0C0C0', borderBottom: '1px solid #C0C0C0' }}>Optional</Button>
                                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Disabled</Button>
                                        </Box>

                                    </Stack>

                                    <Divider sx={{ mt: '9px', mx: 12, ml: -0.5 }} />






                                </Stack>
                            </Box>
                            <Divider sx={{ mt: '150px' }} />
                            <Button sx={{ width: '198px', height: '46px', mt: '30px', ml: '908px', mb: '30px' }} style={{ backgroundColor: '#1A344B' }} startIcon={<SaveIcon sx={{ height: '24px', width: '24px', color: 'white' }} />}>
                                <Typography sx={{ textTransform: 'capitalize', ml: '2px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#FFFFFF', border: 'none' }} >
                                    Save Changes
                                </Typography>
                            </Button>

                        </Box>
                    </Grid>
                </Stack>
            </Grid>



        </>
    )
}

export default Comset
