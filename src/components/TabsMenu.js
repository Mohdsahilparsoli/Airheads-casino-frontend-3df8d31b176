import React, { useState } from "react";
import "../styles/TabsMenu.scss";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import tab1Img from "../assets/tab1Img.png";
import tab2Img from "../assets/tab2Img.png";
import tab3Img from "../assets/tab3Img.png";
import tab4Img from "../assets/tab4Img.png";
import tab5Img from "../assets/tab5Img.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{padding: "0"}} p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

export default function TabsMenu() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabsMenu">
      <div className="tabs">
        <TabPanel className="tabPanel" value={value} index={0}>
          <img className="tabImg" src={tab1Img} alt="tab1Img" />
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={1}>
          <img className="tabImg" src={tab2Img} alt="tab2Img" />
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={2}>
          <img className="tabImg" src={tab3Img} alt="tab3Img" />
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={3}>
          <img className="tabImg" src={tab4Img} alt="tab4Img" />
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={4}>
          <img className="tabImg" src={tab5Img} alt="tab5Img" />
        </TabPanel>
      </div>

      <AppBar className="appBar">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable prevent tabs example"
        >
          <Tab className="tabIcon" icon={<FiberManualRecordIcon fontSize="small" />} aria-label="item1" {...a11yProps(0)} />
          <Tab className="tabIcon" icon={<FiberManualRecordIcon fontSize="small" />} aria-label="item2" {...a11yProps(1)} />
          <Tab className="tabIcon" icon={<FiberManualRecordIcon fontSize="small" />} aria-label="item3" {...a11yProps(2)} />
          <Tab className="tabIcon" icon={<FiberManualRecordIcon fontSize="small" />} aria-label="item4" {...a11yProps(3)} />
          <Tab className="tabIcon" icon={<FiberManualRecordIcon fontSize="small" />} aria-label="item5" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      
    </div>
  );
}
