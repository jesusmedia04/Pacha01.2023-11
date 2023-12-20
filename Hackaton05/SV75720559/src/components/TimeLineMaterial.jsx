import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline({ reparacion }) {

  // console.log(reparacion)
  // reparacion.hora =  9:30
  const date = new Date()

  const hora = date.getHours()
  const minutes = date.getMinutes()

  // console.log(reparacion)

  React.useEffect(() => {
    
    reparacion.forEach((element) => {
      element.terminated = element.hora == hora && (element.minutes - minutes === 0 )  ? true : false
    });

  }, [])
  return (   
      <Timeline position="alternate">
        {reparacion.map((element, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {element.hora} am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={!element.terminated ? 'success': 'error'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{element.cambio}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
  );
}