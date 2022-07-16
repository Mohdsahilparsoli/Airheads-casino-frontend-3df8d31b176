import React from "react";
import "../../styles/HelpSupport.scss";
import HelpSupportSideBar from "../../components/helpSupport/helpSupportSideBar";

import { contactsMockData } from "../../mockData/contactsMockData";

const Contacts = (props) => {
  
  
  return (
    <div className="helpSupport">

      <HelpSupportSideBar current='contacts'/>

      <div className="content">
        <div className="textbox">      

          {contactsMockData.map((data, i) => {
            return (
              <div key={data.id}>
              <h3>{data.title}</h3>
              <div></div>

              {data.texts.map((item, j) => {
                return (
                  <>
                    <div>{item.text}</div>
                    <br/>
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

export default Contacts;