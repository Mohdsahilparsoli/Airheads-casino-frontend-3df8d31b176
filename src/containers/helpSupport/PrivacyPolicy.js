import React from "react";
import "../../styles/HelpSupport.scss";
import HelpSupportSideBar from "../../components/helpSupport/helpSupportSideBar";

import { privacyPolicyMockData } from "../../mockData/privacyPolicyMockData";

const PrivacyPolicy = (props) => {
  
  
  return (
    <div className="helpSupport">

      <HelpSupportSideBar current='privacyPolicy'/>

      <div className="content">
        <div className="textbox">      

          {privacyPolicyMockData.map((data, i) => {
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

export default PrivacyPolicy;