import React from "react";
import "../../styles/HelpSupport.scss";
import HelpSupportSideBar from "../../components/helpSupport/helpSupportSideBar";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { faqMockData } from "../../mockData/faqMockData";

const HelpSupport = (props) => {
  
  
  return (
    <div className="helpSupport">

      <HelpSupportSideBar current='faq'/>

      <div className="content">
        <div className="textbox">If the answers in the frequently asked questions section did not help you, you can contact our 24 hour support service.</div>
        <div className="textbox">      

          {faqMockData.map((data, i) => {
            return (
              <div key={data.id}>
              <h3>{data.header}</h3>

              {data.questions.map((item, j) => {
                return (
                  <>
                  <Accordion key={item.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{background: "#f2f2f2"}}>
                      <Typography>
                        {item.text}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  </>
                )
              })}
              </div>
            )
          })}
          

        </div>
      </div>
      
    </div>
  )
}

export default HelpSupport;