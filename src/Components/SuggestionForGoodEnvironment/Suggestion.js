import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function EnvironmentalSuggestion() {
    const [isAccordionExpanded1, setIsAccordionExpanded1] = useState(false);
    const [isAccordionExpanded2, setIsAccordionExpanded2] = useState(false);
    const [isAccordionExpanded3, setIsAccordionExpanded3] = useState(false);

    const handleAccordionChange1 = (event, isExpanded) => {
        setIsAccordionExpanded1(isExpanded);
    };

    const handleAccordionChange2 = (event, isExpanded) => {
        setIsAccordionExpanded2(isExpanded);
    };

    const handleAccordionChange3 = (event, isExpanded) => {
        setIsAccordionExpanded3(isExpanded);
    };

    return (
        <div className='bg-black p-10'>
            <Accordion onChange={handleAccordionChange1}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ backgroundColor: isAccordionExpanded1 ? 'red' : 'initial' }} >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleAccordionChange2}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ backgroundColor: isAccordionExpanded2 ? 'red' : 'initial' }} >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography> 
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleAccordionChange3}>
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ backgroundColor: isAccordionExpanded3 ? 'red' : 'initial' }} >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography> 
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
