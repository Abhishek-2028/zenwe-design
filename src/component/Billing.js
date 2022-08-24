import { Typography, Grid, Stack, Button, Avatar, Link,Box,Divider,Dialog,IconButton,RadioGroup,FormControlLabel,Radio,Paper } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import tick from '../img-zenwe/tick.png'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


import React from 'react'



const Billing = () => {

    const [pop, setPop] = React.useState(false);
    const [pop1, setPop1] = React.useState(false);

    const handelopen = () => setPop(true);
    const handelopen1 = () => setPop1(true);

    const handelclose = () => setPop(false);
    const handelclose1 = () => setPop1(false);

    return (
        <>

            <Dialog open={pop1} maxWidth='xl'>
               
                    <Box component='div' sx={{ mt: '65px', ml: '47px', mr: '47px',mb:'64px',width:'1205px' }}>
                        <Stack direction='row' >
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                                SMS Messaging
                            </Typography>

                            <IconButton sx={{ ml: '950px', mt: -1 }} onClick={handelclose1} >
                                <CancelOutlinedIcon sx={{ height: '38px', width: '38px', color: '#1A344B' }} />
                            </IconButton>

                        </Stack>
                        <Typography sx={{ mt: '22px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                           Choose an SMS messaging subscription plan and interact with candidates the way they want you to.
                        </Typography>

                        <Box component='div' sx={{ ml: '620px', mt:'28px' }}>
                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', textTransform: 'capitalize' }} style={{ backgroundColor: '#DADADA' }}>Monthly</Button>
                            <Button size='small' sx={{ width: 120, fontSize: '18px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B', border: 'none', ml: -0.5, textTransform: 'capitalize' }} style={{ backgroundColor: '#76D691' }}>Annually</Button>
                        </Box>

                    <Typography sx={{ ml:'615px',mt: '28px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                        Save 15% with annual billing
                    </Typography>

                    <Stack direction='row' sx={{mt:'28px',ml:'370px'}}>
                        <Stack>
                            <Paper sx={{backgroundColor:'#4CABCD',height:'183px',width:'227px',borderRadius:'8px'}}>
                                <Box component='div' sx={{mt:'26px',mb:'26px',ml:'42px',mr:'41px'}}>
                                    <Typography sx={{fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: 'white' }}>
                                        US/Canada
                                    </Typography>
                                    <Stack direction='row'>
                                        <Typography sx={{ mt:'12px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '36px', color: 'white' }}>
                                            $127
                                        </Typography>
                                        <Typography sx={{ textTransform:'capitalize',mt:'30px',ml:'4px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '14px', color: 'white' }}>
                                            /mo
                                        </Typography>
                                    </Stack>
                                    <Typography sx={{ textTransform:'capitalize',mt:'12px',fontFamily: 'Montserrat', fontWeight: '400', fontSize: '18px', color: 'white' }}>
                                        billed annually
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper sx={{ mt:'30px',backgroundColor: '#4CABCD', height: '38px', width: '227px', borderRadius: '4px' }}>
                                <Typography sx={{ mt:'8px',mb:'7px',ml:'62px',mr:'62px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'white' }}>
                                    Select Plan
                                </Typography>
                            </Paper>
                        </Stack>

                        <Stack sx={{ml:'32px'}}>
                            <Paper sx={{ backgroundColor: '#76D691', height: '183px', width: '227px', borderRadius: '8px' }}>
                                <Box component='div' sx={{ mt: '26px', mb: '68px', ml: '34px', mr: '33px' }}>
                                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: 'white' }}>
                                        International
                                    </Typography>
                                    
                                    <Typography sx={{ textTransform: 'capitalize', mt: '12px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '36px', color: 'white' }}>
                                        Custom
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper sx={{mt: '30px', backgroundColor: '#76D691', height: '38px', width: '227px', borderRadius: '4px' }}>
                                <Typography sx={{ mt: '8px', mb: '7px', ml: '62px', mr: '62px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'white' }}>
                                    Contact Us
                                </Typography>
                            </Paper>
                        </Stack>

                        <Stack sx={{ ml: '32px' }}>
                            <Paper sx={{ backgroundColor: '#853DB1', height: '183px', width: '227px', borderRadius: '8px' }}>
                                <Box component='div' sx={{ mt: '26px', mb: '68px', ml: '34px', mr: '33px' }}>
                                    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: 'white' }}>
                                        International
                                    </Typography>

                                    <Typography sx={{ textTransform: 'capitalize', mt: '12px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '36px', color: 'white' }}>
                                        Custom
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper sx={{ mt: '30px', backgroundColor: '#853DB1', height: '38px', width: '227px', borderRadius: '4px' }}>
                                <Typography sx={{ mt: '8px', mb: '7px', ml: '62px', mr: '62px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'white' }}>
                                    Contact Us
                                </Typography>
                            </Paper>
                        </Stack>
                    </Stack>

                    <Divider sx={{ mt: '50px', mx: 8, ml: 0 }} />
                    <Stack direction='row'>

                    <Typography sx={{ mt:'18px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'black',opacity:'0.7' }}>
                        Send to US / Canadian numbers
                    </Typography>

                        <CheckCircleRoundedIcon sx={{height:'28px',width:'28px',color:'#4CABCD',mt:'19px',ml:'174px'}}/>
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#76D691', mt: '19px', ml: '234px' }} />
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#853DB1', mt: '19px', ml: '234px' }} />

                    </Stack>
                    <Divider sx={{ mt: '18px', mx: 8, ml: 0 }} />

                    <Stack direction='row'>

                    <Typography sx={{ mt:'18px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'black',opacity:'0.7' }}>
                        Send up to 5000 SMS messages/month
                    </Typography>

                        <CheckCircleRoundedIcon sx={{height:'28px',width:'28px',color:'#4CABCD',mt:'19px',ml:'107px'}}/>
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#76D691', mt: '19px', ml: '234px' }} />
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#853DB1', mt: '19px', ml: '234px' }} />

                    </Stack>
                    <Divider sx={{ mt: '18px', mx: 8, ml: 0 }} />

                    <Stack direction='row'>

                    <Typography sx={{ mt:'18px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'black',opacity:'0.7' }}>
                        Receive unlimited SMS messages
                    </Typography>

                        <CheckCircleRoundedIcon sx={{height:'28px',width:'28px',color:'#4CABCD',mt:'19px',ml:'160px'}}/>
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#76D691', mt: '19px', ml: '234px' }} />
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#853DB1', mt: '19px', ml: '234px' }} />

                    </Stack>
                    <Divider sx={{ mt: '18px', mx: 8, ml: 0 }} />

                    <Stack direction='row'>

                    <Typography sx={{ mt:'18px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'black',opacity:'0.7' }}>
                        Send to International numbers
                    </Typography>

                       
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#76D691', mt: '19px', ml: '448px' }} />
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#853DB1', mt: '19px', ml: '234px' }} />

                    </Stack>
                    <Divider sx={{ mt: '18px', mx: 8, ml: 0 }} />

                    <Stack direction='row'>

                    <Typography sx={{ mt:'18px',fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: 'black',opacity:'0.7' }}>
                        More than 5000 messages/month
                    </Typography>

                        
                        <CheckCircleRoundedIcon sx={{ height: '28px', width: '28px', color: '#853DB1', mt: '19px', ml: '684px' }} />

                    </Stack>
                    <Divider sx={{ mt: '18px', mx: 8, ml: 0 }} />

                    </Box>    

                       

                    
               



            </Dialog>       

            <Dialog open={pop} maxWidth='md' >
                <Box component='div' sx={{width:'729px'}}>
                    <Box component='div' sx={{ mt: '40px', ml: '50px', mr: '48px' }}>
                        <Stack direction='row' >
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '24px', color: '#1A344B' }}>
                                Talent Search
                            </Typography>

                            <IconButton sx={{ ml: '400px',mt:-1 }} onClick={handelclose} >
                                <CancelOutlinedIcon sx={{ height: '38px', width: '38px', color: '#1A344B' }} />
                            </IconButton>

                        </Stack>
                        <Typography sx={{ mt: '22px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                            Search billions of professional profiles. Currently available for<br/>
                            US-based candidates.
                        </Typography>
                        <Typography sx={{ mt: '28px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                            To enable Talent Search just choose a billing option below:
                        </Typography>

                        <RadioGroup sx={{mt:'16px'}}>
                            <FormControlLabel checked control={<Radio />} label={<Typography sx={{  fontFamily: 'Montserrat', fontWeight: '800', fontSize: '18px', color: '#000000' }}>$249/month, billed annually (2 months free)</Typography>} />
                            <FormControlLabel checked={false} control={<Radio />} label={<Typography sx={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '18px', color: '#000000' }}>$249/month, billed annually (2 months free)</Typography>} />
                        </RadioGroup>

                        <Typography sx={{ mt: '18px', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#000000', opacity: 0.7 }}>
                            Click 'Enable' below to confirm and charge your credit card.
                        </Typography>
                    </Box>

                    <Divider sx={{ mt: '32px' }} />

                    <Box component='div' sx={{ mt: '32px', mb: '38px', ml: '366px' }}>
                        <Button variant='contained' style={{ width: '126px', backgroundColor: '#DADADA' }}>
                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: '#1A344B' }}>
                                Cancel
                            </Typography>
                        </Button>
                        <Button variant='contained' startIcon={<DoneRoundedIcon />} style={{ width: '136px', backgroundColor: '#1A344B', marginLeft: '30px' }}>
                            <Typography sx={{ textTransform: 'capitalize', fontFamily: 'Montserrat', fontWeight: 200, fontSize: '18px', color: 'white' }}>
                                Enable
                            </Typography>
                        </Button>
                    </Box>
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


            <Grid sx={{mb:'120px'}}>
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
                                <Avatar sx={{ bgcolor: '#1A344B' }}>
                                    <DescriptionOutlinedIcon />
                                </Avatar>
                                <Link href='billing' underline='none'>
                                    <Button>
                                        <Typography sx={{ fontSize: '19.44px', fontWeight: 600, fontFamily: 'Montserrat', ml: '24px', color: '#1A344B' }}>
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
                                    Billing
                                </Typography>
                            </Box>

                            <Divider sx={{ mt: '30px' }} />

                            <Box component='div' sx={{mt:'30px',ml:'55px'}}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    All Members
                                </Typography>
                                <Typography sx={{ mt:'30px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000',opacity:0.7 }}>
                                    You're subscribed to the <Box component='span' sx={{ color: '#4CABCD' }}>Startup</Box> plan at <Box component='span' style={{color:'#000000',fontWeight:'800'}}>$171 per month</Box>.
                                </Typography>
                                <Button variant='contained' startIcon={<SettingsIcon sx={{ height:'22px',weight:'22px',color:'white' }} />} style={{ marginTop:'18px',fontSize:'18px', backgroundColor: "#1A344B", color: 'white', textTransform: 'capitalize', fontWeight: 400, fontFamily: 'Montserrat' }}>
                                    Modify Subscriptions
                                </Button>
                            </Box>

                            <Box component='div' sx={{ mt: '54px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Cancel Subscription
                                </Typography>
                                <Typography sx={{ mt: '18px', textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                    You can cancel your plan at any time. The change will take effect at the end of your current<br/>
                                    billing cycle.
                                </Typography>
                                <Button variant='contained' style={{ marginTop: '18px', fontSize: '18px', backgroundColor: "#DADADA", color: '#1A344B', textTransform: 'capitalize', fontWeight: 600, fontFamily: 'Montserrat' }}>
                                    Cancel Subscription
                                </Button>
                            </Box>

                            <Box component='div' sx={{ mt: '54px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Feature Subscriptions
                                </Typography>
                                <Typography sx={{ mt: '18px', textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                    Talent Search
                                </Typography>
                                <Box component='div' sx={{ mt: '12px' }}>
                                    <Stack spacing={2}>
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '16px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7}}>
                                            You aren’t subscribed to Talent Search. You can still search, but results will be anonymized
                                        </Typography>
                                        <Typography sx={{textTransform: 'capitalize', fontSize: '16px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7}}>
                                           with contact details removed.
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Button onClick={handelopen} variant='contained' style={{ marginTop: '18px', fontSize: '16px', backgroundColor: '#1A344B', color: 'white', textTransform: 'capitalize', fontWeight: 400, fontFamily: 'Montserrat' }}>
                                    Enable Talent Search
                                </Button>
                            </Box>

                            <Divider sx={{ mt: '18px', mx: 12, ml: 7 }}/>

                            <Box component='div' sx={{ mt: '40px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Text/SMS Messaging
                                </Typography>
                                <Box component='div' sx={{ mt: '12px'}}>
                                    <Stack spacing={2} >
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            You aren’t subscribed to an SMS messaging plan and are limited to 10 SMS credits per month.
                                        </Typography>
                               
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                                You have used 0 of 10 credits.
                                        </Typography>
                                    </Stack>
                                    
                                </Box>
                                <Button onClick={handelopen1} variant='contained' style={{ marginTop: '18px', fontSize: '16px', backgroundColor: '#1A344B', color: 'white', textTransform: 'capitalize', fontWeight: 400, fontFamily: 'Montserrat' }}>
                                    Add SMS Plan
                                </Button>
                            </Box>

                            <Box component='div' sx={{ mt: '54px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Card Details
                                </Typography>
                                <Box component='div' sx={{ mt: '12px' }}>
                                    <Stack spacing={2} >
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            We have the following credit card on file:
                                        </Typography>

                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Card ending in 6084 · Expires 6/2022
                                        </Typography>
                                    </Stack>

                                </Box>
                                <Button variant='contained' startIcon={<SettingsIcon sx={{ height: '22px', weight: '22px', color: 'white' }} />} style={{ marginTop: '18px', fontSize: '18px', backgroundColor: "#1A344B", color: 'white', textTransform: 'capitalize', fontWeight: 400, fontFamily: 'Montserrat' }}>
                                    Edit Details
                                </Button>
                            </Box>

                            <Box component='div' sx={{ mt: '54px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Invoice Details
                                </Typography>
                                <Box component='div' sx={{ mt: '12px' }}>
                                    <Stack direction='row' >
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Company Name
                                        </Typography>

                                        <Typography sx={{ ml:'123px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Billing Information
                                        </Typography>
                                    </Stack>

                                    <Stack  direction='row' sx={{mt:'18px'}}>
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Plenty
                                        </Typography>

                                        <Typography sx={{ ml:'207px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Nothing provided
                                        </Typography>
                                    </Stack>

                                </Box>
                                <Button variant='contained' startIcon={<SettingsIcon sx={{ height: '22px', weight: '22px', color: 'white' }} />} style={{ marginTop: '33px', fontSize: '18px', backgroundColor: "#1A344B", color: 'white', textTransform: 'capitalize', fontWeight: 400, fontFamily: 'Montserrat' }}>
                                    Edit Details
                                </Button>
                            </Box>

                            <Box component='div' sx={{ mt: '54px', ml: '55px' }}>
                                <Typography sx={{ textTransform: 'capitalize', fontSize: '22px', fontWeight: 600, fontFamily: 'Montserrat', color: '#1A344B' }}>
                                    Invoice 
                                </Typography>
                                <Box component='div' sx={{ mt: '12px' }}>
                                    <Stack direction='row' >
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Invoice ID
                                        </Typography>

                                        <Typography sx={{ ml:'273px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Invoice Date
                                        </Typography>

                                        <Typography sx={{ ml: '89px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Amount
                                        </Typography>

                                        <Typography sx={{ ml: '287px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            Actions
                                        </Typography>
                                    </Stack>

                                    <Stack direction='row' sx={{ mt: '18px' }}>
                                        <Typography sx={{ textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            in_1KFKV6DnkobEEnenHlJAf43x
                                        </Typography>

                                        <Typography sx={{ ml: '71px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            01/07/2022
                                        </Typography>

                                        <Typography sx={{ ml: '110px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            $171.00
                                        </Typography>

                                        <Typography sx={{ ml: '100px',textTransform: 'capitalize', fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#000000', opacity: 0.7 }}>
                                            <Stack direction='row' spacing={1}>
                                            <Box component='img' src={tick} sx={{height:'28px',width:'28px'}}></Box>
                                                <Box component='div'>Success</Box>
                                            </Stack>
                                        </Typography>

                                        <Typography sx={{ml: '87px', textTransform: 'capitalize', textDecorationLine:'underline',fontSize: '18px', fontWeight: '600', fontFamily: 'Montserrat', color: '#4CABCD', opacity: 0.7 }}>
                                            View Invoice
                                        </Typography>
                                    </Stack>

                                </Box>
                                
                                <Divider sx={{ mt: '22px', mx: 8, ml: -1 }} />

                                <Divider sx={{mt:'120px',mb:'60px'}}/>

                            </Box>
                        </Box>
                    </Grid>
                </Stack>
            </Grid>



        </>
    )
}

export default Billing
