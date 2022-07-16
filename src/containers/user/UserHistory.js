import React, { useState } from "react";

import "../../styles/UserHistory.scss";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';

import UserMenu from "./UserMenu";
import HistoryStats from "./HistoryStats";
import PropTypes from "prop-types";

const UserHistory = (props, context) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTab, setCurrentTab] = useState('transactions');
  const [currentHeads, setCurrentHeads] = useState([
    context.t("Amount"),
    context.t("Payment System"),
    context.t("Type"),
    context.t("Created At"),
    context.t("Status"),
    context.t("Cancellation"), 
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onBtnClick = (current) => {
    if (current === 'transactions') {
      setCurrentTab('transactions');
      setCurrentHeads([
        context.t("Amount"),
        context.t("Payment System"),
        context.t("Type"),
        context.t("Created At"),
        context.t("Status"),
        context.t("Cancellation"), 
      ])
    } else if (current === 'bets') {
      setCurrentTab('bets');
      setCurrentHeads([
        context.t("Game"),
        context.t("Date"),
        context.t("Time"),
        context.t("Bet"),
        context.t("Win"),
        context.t("Balance"),
      ])
    } else {
      setCurrentTab('accountActivity');
      setCurrentHeads([
        context.t("Date"),
        context.t("Device"),
        context.t("IP"),
      ])
    }
  }

  return (
    <div className="userHistory">
      <UserMenu {...props}/>

      <div className="historyOuter">
        <div className="leftMenu">
          <div className="userButtons">
            <Button className="optionBtn" onClick={() => onBtnClick('transactions')}>{context.t("Transactions")}</Button>
            <Button className="optionBtn" onClick={() => onBtnClick('bets')}>{context.t("Bets")}</Button>
            <Button className="optionBtn" onClick={() => onBtnClick('accountActivity')}>{context.t("Account activity")}</Button>
          </div>

          <div className="dates">
            <div className="datePicker">
              <div className="dateTitle">{context.t("From")}:</div>

              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="from-date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />

              <KeyboardTimePicker
                margin="normal"
                id="from-time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </div>
            

            <div className="datePicker">
              <div className="dateTitle">{context.t("To")}:</div>

              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="to-date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />

              <KeyboardTimePicker
                margin="normal"
                id="to-time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </div>
          </div>

          <div className="historyButtonOuter">
            <Button className="historyButton">{context.t("See History")}</Button>
          </div>
          
        </div>
        <div className="rightMenu">
          <HistoryStats heads={currentHeads} type={currentTab} {...props}/>
        </div>
      </div>
    </div>
  )
}

UserHistory.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default UserHistory;