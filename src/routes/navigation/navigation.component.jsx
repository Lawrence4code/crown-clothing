
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";

import './navigation.styles.scss';
import { signOutAuthUser} from './../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { isCartOpen }  = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutAuthUser()
        setCurrentUser(null)
    }
    
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
                <CartIcon />
            </div>
            { isCartOpen && <CartDropDown /> }
        </div>
        <Outlet />
      </>
    );
};

export default Navigation;  