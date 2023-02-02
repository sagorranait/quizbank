import React from 'react';
import {
   Accordion,
   Typography,
   AccordionDetails,
   AccordionSummary
 } from '@mui/material';

 interface AccordionProps {
   id: string | false;
   control: string;
   title: String;
   description: String;
   expanded: string | false;
   handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
 }

const FaqAccordion: React.FC<AccordionProps> = (props) => {
   const { id, control, title, description, expanded, handleChange } = props;

   return (
      <Accordion 
         expanded={expanded === `${id}`} 
         onChange={handleChange(`${id}`)}
         sx={{
            mb: '10px',
            boxShadow: 'none',
            border: 'none'
         }}
      >
         <AccordionSummary aria-controls={`${control}-content`} id={`${control}-header`}>
         <Typography sx={{fontSize: {xs: '16px'}, fontWeight: {xs:'600'}}}>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>
         <Typography>{description}</Typography>
         </AccordionDetails>
      </Accordion>
   );
}

export default FaqAccordion