import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/index/Home";
import AccountsRouter from "routes/accounts/AccountsRouter";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/accounts" component={AccountsRouter} />
    </Router>
  );
}

export default App;
