import { Box, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Stack } from 'react-bootstrap'
import database from "../database/localDB.json"
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
function SocialNew() {
   let iconObj= {
    Linkdein :<LinkedInIcon/>,
    Github :<GitHubIcon/>,
    Twitter :<TwitterIcon/>,
    Facebook:<FacebookIcon/>,
    Instagram:<InstagramIcon/>,
    mail:<EmailIcon/>,
    phone:<PhoneAndroidIcon/>

   }
      
    
  return (
    <Box>
        <Stack>
        <Box>
           <Typography align="left" variant='h5' style={{color: "#D9D9D9",marginTop: "20px"}}>Contacts</Typography>
           {database.contact.contacts?.map((obj)=>{
            return  <ListItemButton key={obj.value}>
            <ListItemIcon sx={{color:'green'}}>
              {iconObj[obj?.name]}
              {/* <TwitterIcon/> */}
            </ListItemIcon>
            <ListItemText primary={obj.value} sx={{color:'#B8B8B8'}}/>
          </ListItemButton>
           })}
           </Box>
            
           
        </Stack>
        <Stack>
        <Typography align="left" variant='h5' style={{color: "#D9D9D9",marginTop: "10px"}}>Social Media</Typography>
           <Box>
           
           {database.contact.socialmedia?.map((obj)=>{
            return  <ListItemButton key={obj.name}>
            <ListItemIcon sx={{color:'green'}}>
              {iconObj[obj?.name]}
              {/* <TwitterIcon/> */}
            </ListItemIcon>
            <ListItemText primary={obj.name} sx={{color:'#B8B8B8'}}/>
          </ListItemButton>
           })}
           </Box>
        </Stack>
    </Box>
  )
}

export default SocialNew