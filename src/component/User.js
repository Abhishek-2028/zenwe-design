import { Typography, Grid, Stack, Button, Avatar, Link, Box, Divider,Dialog,IconButton,TextField } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import menuimg from '../img-zenwe/menuimg.png'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import React from 'react'



const User = () => {

    const [pop, setPop] = React.useState(false);

    const handelopen = () => setPop(true);

    const handelclose = () => setPop(false);

    return (
        <>

            <Dialog open={pop} maxWidth='md' >

                <Box component='div' sx={{ mt: '40px', ml: '50px', mr: '48px' }}>
                    <Stack direction='row' >
                        <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                            Invite Users
                        </Typography>

                        <IconButton sx={{ ml: '483px',mt:-1.5 }} onClick={handelclose} >
                            <CancelOutlinedIcon sx={{ height: '38px', width: '38px', color: '#1A344B' }} />
                        </IconButton>

                    </Stack>
                    <Typography sx={{ mt: '22px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                        Invite new users by email address. <Box component='span' sx={{ color:'#4CABCD'}}>Learn More</Box> 
                    </Typography>
                </Box>

                <Box component='div' sx={{ ml: '50px', mt: '32px', mr: '48px', borderRadius: '6px' }} style={{backgroundColor:'#F0F0F0'}}>
                    <Stack sx={{width:'621px',ml:'20px',mt:'29px',mr:'20px',mb:'30px'}}>
                        <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                            Invite by Email
                        </Typography>

                        <TextField label="Type Here..." variant="outlined" fullWidth disabled sx={{ mt: '18px' }} style={{ backgroundColor: 'white' }} />

                        <Box component='div' sx={{ mt:'18px',border: '1px solid #C4C4C4',width:'310px',height:'52px',borderRadius:'4px'}} style={{backgroundColor:'white'}}>
                            <Stack direction='row'>
                            <Typography sx={{ mt: '17px',ml:'20px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '14px', color: '#000000' }} >
                            Add To This Role
                            </Typography>
                            <ArrowDropDownIcon sx={{ml:'125px',mt:'15px',height:'25px',width:'25px'}}/>
                            </Stack>
                        </Box>

                    </Stack>
                </Box>

                <Typography sx={{ ml:'50px',mt:'41px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                    Invite by Email
                </Typography>

                <TextField label="No Teams Available " variant="outlined"  disabled sx={{ mt: '22px',ml:'50px',mr:'44px',borderRadius:'4px' }} style={{backgroundColor:'#F0F0F0'}} />


                <Box component='div' sx={{ mt: '40px', mb: '50px', ml: '380px' }}>
                    <Button variant='contained' style={{ backgroundColor: '#DADADA',width:'126px' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: '#1A344B' }}>
                            Cancel
                        </Typography>
                    </Button>
                    <Button variant='contained' sx={{ ml:'30px' }} startIcon={<EmailRoundedIcon sx={{ width: '19px', height: '19px', color: 'white' }} />} style={{ backgroundColor: '#1A344B' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: 200, fontFamily: 'Montserrat', color: 'white' }}>
                            invite Users
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


            <Grid sx={{mb:10}}>
                <Stack direction='row'>
                    <Grid item lg={2}>
                        <Stack direction='column' sx={{ mt: '80px', ml: '113px' }}>


                            <Stack direction='row'>
                                <Avatar sx={{ bgcolor: '#1A344B', opacity: 0.7 }}>
                                    <SettingsOutlinedIcon />
                                </Avatar>
                                <Link href='/comset' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B', opacity: 0.7 }}>
                                            General
                                        </Typography>
                                    </Button>
                                </Link>
                            </Stack>



                            <Stack direction='row' sx={{ mt: '26px' }}>
                                <Avatar sx={{ bgcolor: '#1A344B' }}>
                                    <PersonOutlineOutlinedIcon />
                                </Avatar>
                                <Link href='/user' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B' }}>
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
                                    Manage Members
                                </Typography>
                            </Box>

                            <Divider sx={{ mt: '30px' }} />

                            <Box component='div' sx={{ mt: '30px', ml: '55px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.7 }}>
                                    Manage the team who's involved in the hiring effort at plenty.
                                </Typography>
                                <Button onClick={handelopen} sx={{ mt: '28px' }} startIcon={<EmailRoundedIcon sx={{ width: '19px', height: '19px', color: 'white' }} />} style={{ backgroundColor: '#1A344B' }}>
                                    <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: 200, fontFamily: 'Montserrat', color: 'white' }}>
                                        invite Members
                                    </Typography>
                                </Button>
                            </Box>


                            <Box component='div' sx={{ mt: '60px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Pending Invitations
                                </Typography>

                                <Box component='div' sx={{ mt: '18px', height: '68px', width: '1051px', borderRadius: '4px', border: '1px solid #C4C4C4' }} style={{ backgroundColor: '#F6F2F2' }} >
                                    <Stack direction='row'>
                                        <Avatar src={menuimg} sx={{ ml: '20px', mt: '12px', height: '43px', width: '43px' }} />

                                        <Stack direction='column' sx={{ mt: '15px', ml: '16px' }}>
                                            <Typography sx={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                ron swanson
                                            </Typography>
                                            <Typography sx={{ mt: '4px', textTransform: 'capitalize', fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.8 }}>
                                                Invited by Josh Bass 6d Ago
                                            </Typography>
                                        </Stack>
                                        <CloseRoundedIcon sx={{ ml: '744px', mt: '20px' }} />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box component='div' sx={{ mt: '60px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Members
                                </Typography>

                                <Box component='div' sx={{ mt: '18px', height: '68px', width: '1051px', borderRadius: '4px', border: '1px solid #C4C4C4' }} style={{ backgroundColor: '#F6F2F2' }} >
                                    <Stack direction='row'>
                                        <Avatar src={menuimg} sx={{ ml: '20px', mt: '12px', height: '43px', width: '43px' }} />

                                        <Stack direction='column' sx={{ mt: '15px', ml: '16px' }}>
                                            <Typography sx={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                ron swanson
                                            </Typography>
                                            <Typography sx={{ mt: '4px', textTransform: 'capitalize', fontSize: '12px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', opacity: 0.8 }}>
                                                jbass@plenty.ag
                                            </Typography>
                                        </Stack>

                                        <Stack direction='row' sx={{mt:'23px',ml:'553px'}}>
                                            <Typography sx={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                Administrator
                                            </Typography>
                                            <ArrowDropDownIcon sx={{mt:-0.2}}/>
                                        </Stack>

                                        <Stack direction='row' sx={{ ml: '60px', mt: '23px'}}>
                                            <GroupsOutlinedIcon sx={{mt:-0.2}}/>
                                            <Typography sx={{ ml:'8px',textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                                Teams
                                            </Typography>
                                        </Stack>
                                        
                                    </Stack>
                                </Box>
                            </Box>


                            <Divider sx={{mt:'80px',mb:'106px'}}/>



                        </Box>

                    </Grid>
                </Stack>
            </Grid>



        </>
    )
}

export default User
