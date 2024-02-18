import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';
import './About.css'
export default function About() {
  return (
    <Timeline position="alternate">
      <div className='top-heading' id="ABOUT">
      <div>ABOUT</div>
      <br />
      <div>Contributers</div>   
      </div>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          align="right"
          variant="body2">
          <Typography fontSize={{xs:"1.3rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            <h1></h1>
          </Typography>
          <Typography fontSize={{xs:"1.25rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Abhinav Yadav</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>LPU'23 CSE</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:5}}>   
             <OpenWithIcon sx={{ fontSize:"65px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          variant="body2">
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            <h1></h1>
          </Typography>
          <Typography fontSize={{xs:"1.25rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Jaywant Kadam</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>IIIT Pune'23 CSE</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}>
            <OpenWithIcon sx={{ fontSize:"73px",bgcolor: '#f7c81e',borderRadius:"50%" }}/> 
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            <h1></h1>
          </Typography>
          <Typography fontSize={{xs:"1.25rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Nikhil Lanjewar</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>SKNCOE'23 CE</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}} >
          <OpenWithIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}} />
       

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
        <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            <h1></h1>
          </Typography>
          <Typography fontSize={{xs:"1.25rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>Vedant Hiwarkar</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>DBATU'23 CSE</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}  >
        <OpenWithIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }}
          align="right"
          variant="body2">
          
          
        </TimelineOppositeContent>      
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}