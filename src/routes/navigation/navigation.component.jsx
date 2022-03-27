
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";

import './navigation.styles.scss';
import { signOutAuthUser} from './../../utils/firebase/firebase.utils';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutAuthUser()
        setCurrentUser(null)
    }
    console.log({currentUser})
    return (
      <>
        <div className="navigation">
            <Link to="/" className="logo-container" >
             <CrownLogo />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>
                        Sign out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                        Sign in
                    </Link>
                    )
                }
            </div>
        </div>
        <Outlet />
      </>
    );
};

export default Navigation;  