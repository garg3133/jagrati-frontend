import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import SignupSuccess from "./SignupSuccess";

const AccountsRouter = (props) => {
  return (
    <Router>
      <Route path={`${props.match.url}/login`} component={LoginSignup} />
      <Route
        path={`${props.match.url}/signup/success`}
        component={SignupSuccess}
      />
    </Router>
  );
};

export default AccountsRouter;
