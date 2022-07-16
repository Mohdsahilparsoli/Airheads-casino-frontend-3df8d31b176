import React from "react";
import "../../styles/HistoryStats.scss";
import PropTypes from "prop-types";

import { userHistoryMockData } from "../../mockData/userHistoryMockData";

const HistoryStats = (props, context) => {
  const { heads, type } = props;

  return (
    <div>
      <div className="historyStatsHead">
        {heads.map((item, i) => {
          return (
            <span key={i} className="historyStatsHeadItem">{item}</span>
          )
        })}
      </div>

      <div className="stats">
        {type === 'transactions' ? userHistoryMockData.map((data) => {
          return (
            <div className="statRow" key={data.id}>
              <span>{data.amount}</span>
              <span>{data.paymentSystem}</span>
              <span>{data.type}</span>
              <span>{data.createdAt}</span>
              <span>{data.status}</span>
              <span>{data.cancellation}</span>
            </div>
          )
        }) : <div className="noResult">{context.t("Result Not Found")}</div>}
      </div>

      <div className="total">
        <p>{context.t("Total deposit")}: <span className="totalValue">0.00 EUR</span></p>
        <p>{context.t("Total withdraw")}: <span className="totalValue">0.00 EUR</span></p>
        <p>{context.t("Difference")}: <span className="totalValue">0.00 EUR</span></p>
        
      </div>
    </div>
  )
}

HistoryStats.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default HistoryStats;