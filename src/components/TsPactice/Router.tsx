import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from “./components/Home";
import profile from “./components/Profile”;
function App() {
return (
<Router>
   <Route exact path="/" component={Home} />
<Route path="/profile"” component={Profile} />
</Router>
);
}