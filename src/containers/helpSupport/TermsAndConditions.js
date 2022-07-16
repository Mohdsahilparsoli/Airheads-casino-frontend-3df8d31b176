import React from "react";
import "../../styles/HelpSupport.scss";
import HelpSupportSideBar from "../../components/helpSupport/helpSupportSideBar";

import { termsAndConditionsMockData } from "../../mockData/termsAndConditionsMockData";

const TermsAndConditions = (props) => {
  
  
  return (
    <div className="helpSupport">

      <HelpSupportSideBar current='termsAndConditions'/>

      <div className="content">
        <div className="textbox">      

          {termsAndConditionsMockData.map((data, i) => {
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

export default TermsAndConditions;