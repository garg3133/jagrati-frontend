import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginSignup from './LoginSignup'

const AccountsRouter = (props) => {
    return (
        <Router>
            <Route path={`${props.match.url}/login`} component={LoginSignup}  />
        </Router>
    )
}

export default AccountsRouter
