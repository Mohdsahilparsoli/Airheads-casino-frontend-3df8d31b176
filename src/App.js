import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import "./styles/App.scss";
import "./styles/Sidebar.scss";

import SideBar from "./components/Sidebar";
import Header from "./components/header/Header";
import MyProfile from "./components/MyProfile";

import TabsMenu from "./components/TabsMenu";
import Menu from "./components/Menu";
import LoginComponent from "./containers/login/LoginComponent";
import RegistrationComponent from "./containers/registration/RegistrationComponent";

import MainInitialPage from "./containers/MainInitialPage";
import Cashier from "./containers/Cashier";
import Games from "./containers/Games";
import HelpSupport from "./containers/helpSupport/HelpSupport";
import TermsAndConditions from "./containers/helpSupport/TermsAndConditions";
import PrivacyPolicy from "./containers/helpSupport/PrivacyPolicy";
import Contacts from "./containers/helpSupport/Contacts";
import Offers from "./containers/Offers";
import UserProfile from "./containers/user/UserProfile";
import UserPromo from "./containers/user/UserPromo";
import UserHistory from "./containers/user/UserHistory";

import { ProtectedRoute } from "./validators/protected.route";

import Game from "./containers/Game";

import Footer from "./components/footer/Footer";
import LoginBar from "./components/login/LoginBar";

import DateFnsUtils from "@date-io/date-fns"; 
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const mapStateToProps = (state) => {
  return {
    isShownProfile: state.myProfileLoad.isShown,
    isLoginShown: state.changeLoginForm.isLoginShown,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const App = (props) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 768);

  const stateToProps = props; // TODO!!!

  const updateMedia = () => {
    setMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <Switch>
          <Route
            path="/"
            component={(props) => {
              return (
                <div id="App">

                  {stateToProps.isShownProfile && <MyProfile {...props} />}
                  {stateToProps.isLoginShown && <LoginComponent {...props} />}

                  <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} {...props} />
                  <Header {...props} />

                  <Switch>
                    <ProtectedRoute
                      exact
                      path="/game"
                      render={(props) => <Game {...props} />}
                    />

                    <Route
                      exact
                      path="/demoGame"
                      render={(props) => <Game {...props} />}
                    />
                  
                    <>
                      <div id="page-wrap" className="container">
                        <TabsMenu />
                        <Menu {...props} />

                        <div className="main">
                          <Switch>

                            <Route
                              exact
                              path="/"
                              render={(props) => <MainInitialPage {...props} />}
                            />

                            <Route
                              exact
                              path="/games"
                              render={(props) => <Games {...props} />}
                            />

                            <Route
                              exact
                              path="/offers"
                              render={(props) => <Offers {...props} />}
                            />

                            <Route
                              exact
                              path="/helpSupport"
                              render={(props) => <HelpSupport {...props} />}
                            />

                            <Route
                              exact
                              path="/cashier"
                              render={(props) => <Cashier {...props} />}
                            />

                            <Route
                              exact
                              path="/termsAndConditions"
                              render={(props) => <TermsAndConditions {...props} />}
                            />

                            <Route
                              exact
                              path="/privacyPolicy"
                              render={(props) => <PrivacyPolicy {...props} />}
                            />

                            <Route
                              exact
                              path="/contacts"
                              render={(props) => <Contacts {...props} />}
                            />

                          </Switch>
                        </div>

                        { isMobile && <LoginBar {...props}/> }
                        <Footer {...props}/>
                      </div> 
                    </>                 
                  </Switch>

                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
    
    
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
