import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginContainer from "./LoginContainer/LoginContainer";
import DashBoardContainer from "./DashBoardContainer/DashBoardContainer";
import HeaderComponent from "../components/HeaderComponent";

function MainContainer() {
  return (
    <div className="appMainContainer">
      <Router>
        <Route component={HeaderComponent} />
        <Switch>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route exact={true} path="/home" component={DashBoardContainer} />
          <Route component={LoginContainer} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainContainer;