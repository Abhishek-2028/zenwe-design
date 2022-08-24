import { Typography, Grid, Stack, Button, Avatar,Link,Box,Divider,Dialog,IconButton,TextField, } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import menuimg from '../img-zenwe/menuimg.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveIcon from '@mui/icons-material/Save';

import React from 'react'


const Teams = () => {

    const [pop, setPop] = React.useState(false);

    const handelopen = () => setPop(true);

    const handelclose = () => setPop(false);

  return (
      <>


          <Dialog open={pop} maxWidth='md' >

              <Box component='div' sx={{ mt: '40px', ml: '50px', mr: '48px' }}>
                  <Stack direction='row' >
                      <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                          Teams
                      </Typography>

                      <IconButton sx={{ ml: '527px', mt: -1.5 }} onClick={handelclose} >
                          <CancelOutlinedIcon sx={{ height: '38px', width: '38px', color: '#1A344B' }} />
                      </IconButton>

                  </Stack>
                  <Typography sx={{ mt: '22px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                      Manage the teams Josh Bass is associated with. You can associate<br/>
                      these teams with positions & candidate pools for easier administration.
                  </Typography>
              </Box>

              <Box component='div' sx={{ ml: '50px', mt: '32px', mr: '48px', borderRadius: '6px' }} style={{ backgroundColor: '#F0F0F0' }}>
                  <Stack sx={{ width: '621px', ml: '20px', mt: '29px', mr: '20px', mb: '30px' }}>
                      <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                          Add Teams
                      </Typography>

                      
                      <Stack direction='row'>
                      <Box component='div' sx={{ mt: '18px', border: '1px solid #C4C4C4', width: '310px', height: '52px', borderRadius: '4px' }} style={{ backgroundColor: 'white' }}>
                          <Stack direction='row'>
                              <Typography sx={{ mt: '17px', ml: '20px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '14px', color: '#000000' }} >
                                  Add To This Role
                              </Typography>
                              <ArrowDropDownIcon sx={{ ml: '125px', mt: '15px', height: '25px', width: '25px' }} />
                          </Stack>
                      </Box>

                          <Button variant='contained' startIcon={<AddRoundedIcon sx={{ color: 'white', height: '24px', width: '24px' }} />} style={{ backgroundColor: '#1A344B' }} sx={{height:'38px',width:'104px',mt:'25px',ml:'25px'}}>
                              <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: 200, fontFamily: 'Montserrat', color: 'white' }}>
                                  Add 
                              </Typography>
                          </Button>
                      
                      </Stack>

                  </Stack>
              </Box>

              <Typography sx={{ ml: '50px', mt: '41px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                  Team Membership
              </Typography>

              <TextField label="All Members" variant="outlined" disabled sx={{ mt: '22px', ml: '50px', mr: '44px', borderRadius: '4px' }} style={{ backgroundColor: '#F0F0F0' }} />


              <Box component='div' sx={{ mt: '40px', mb: '50px', ml: '365px' }}>
                  <Button variant='contained' style={{ backgroundColor: '#DADADA', width: '126px' }}>
                      <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: '#1A344B' }}>
                          Cancel
                      </Typography>
                  </Button>
                  <Button variant='contained' sx={{ width: '198px', height: '38px', ml: '30px' }} style={{ backgroundColor: '#1A344B' }} startIcon={<SaveIcon sx={{ height: '24px', width: '24px', color: 'white' }} />}>
                      <Typography sx={{ textTransform: 'capitalize', ml: '2px', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#FFFFFF', border: 'none' }} >
                          Save Changes
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


          <Grid >
              <Stack direction='row'>
                  <Grid item lg={2}>
                      <Stack direction='column' sx={{ mt: '80px', ml: '113px' }}>


                          <Stack direction='row'>
                              <Avatar sx={{ bgcolor: '#1A344B',  opacity: 0.7 }}>
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
                              <Avatar sx={{ bgcolor: '#1A344B',  opacity: 0.7 }}>
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
                              <Avatar sx={{ bgcolor: '#1A344B' }}>
                                  <GroupsOutlinedIcon />
                              </Avatar>
                              <Link href='/team' underline='none'>
                                  <Button>
                                      <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B' }}>
                                          Teams
                                      </Typography>
                                  </Button>
                              </Link>
                          </Stack>



                          <Stack direction='row' sx={{ mt: '26px' }}>
                              <Avatar sx={{ bgcolor: '#1A344B',  opacity: 0.7 }}>
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

                          <Box componenet='div' sx={{ mt: '30px', ml: '55px' }}>
                              <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B',opacity:0.7 }}>
                                  Organize members into Hiring Teams for easier management.
                              </Typography>
                          </Box>

                          <Stack direction='row' sx={{  ml: '55px' }}>
                              <Typography sx={{ mt:'60px',fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B'}}>
                                  Teams
                              </Typography>

                              <Button onClick={handelopen} variant='contained' startIcon={<AddRoundedIcon sx={{color:'white',height:'24px',width:'24px'}} />} style={{ backgroundColor: '#1A344B' }} sx={{ mt: '55px',ml:'830px' }}>
                                  <Typography sx={{textTransform:'capitalize',fontSize: '18px', fontWeight: 200, fontFamily: 'Montserrat', color: 'white' }}>
                                      Add Teams
                                  </Typography>
                              </Button>
                          </Stack>

                          <Box component='div' sx={{ ml:'55px',mt: '18px', height: '68px', width: '1051px', borderRadius: '4px', border: '1px solid #C4C4C4' }} style={{ backgroundColor: '#F6F2F2' }}>
                            <Stack sx={{ml:'20px',mt:'11px'}}>
                                  <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                      All Members
                                  </Typography>
                                  <Avatar src={menuimg} sx={{height:'23px',width:'23px',mb:'11px'}}/>

                            </Stack>
                          </Box>

                          <Divider sx={{mt:'113px',mb:'90px'}}/>
                        </Box>
                  </Grid>
              </Stack>
          </Grid>



      </>
  )
}

export default Teams
