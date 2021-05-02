import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <section id="awards">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              Volunteer Work and Achievements
              </span>
          </h1>
        </div>
      </div>
      <div className={classes.root}>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Volunteer Work and Other activities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "15px" }}>
              <i class="fas fa-code"></i> Student Mentor at ISMP, IIT Dharwad <br />
              <i class="fas fa-code"></i> Campus Hero at GirlScript, Hubli-Dharwad <br />
              <i class="fas fa-code"></i> Contingent member in 54th Inter IIT Sports Meet and 8th Inter IIT Tech Meet (DIC Terrace Framing Robot)<br />
              <i class="fas fa-code"></i> Member of organising team of PARSEC 2020 (Annual Technical Fest of IIT Dharwad)

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Achievements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  style={{ fontSize: "15px" }}>
            <i class="fas fa-trophy"></i> Finalist in Hacksagon 2020 <br />
            <i class="fas fa-trophy"></i> 2nd Runner up at Codethon 2.0 <br/>
            <i class="fas fa-trophy"></i> Was among the top 2500 performers in CodeKaze 2021 <br/>
            <i class="fas fa-trophy"></i> Selected for Crio Winter of Doing and GSSoC <br/>
            <i class="fas fa-trophy"></i> Presented research paper in the 50th AMTI national conference <br/>
            <i class="fas fa-trophy"></i> <a href="https://drive.google.com/drive/folders/12ZUaMN0MDLnocrEsBiTvevcpsFkhxysx?usp=sharing" rel="noopener noreferrer"  target="_blank">Google coding contest ranks</a> <br/>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Certifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "15px" }}>
            <i class="fas fa-stamp"></i> <a href="https://drive.google.com/file/d/1OcwaliKZCvoEuCjikwqALdxRyzFIZWRH/view?usp=sharing" rel="noopener noreferrer"  target="_blank">Microsoft Technology Associate(MTA) in Introduction to Python programming</a><br/>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Publications</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </section>
  );
}
