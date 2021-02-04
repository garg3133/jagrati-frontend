import IndexHeader from "./IndexHeader";
import IndexNavbar from "./IndexNavbar";
import AppHeader from "./AppHeader";

const Header = () => {
    const route = '/';
    const loggedIn = false;

    return (
        // Select header based on current route and login.
        <>
            { route === '/' && loggedIn === false ? (
                <>
                    <IndexHeader />
                    <IndexNavbar />
                </>
            ) : <AppHeader />
            }
        </>
    )
}

export default Header
