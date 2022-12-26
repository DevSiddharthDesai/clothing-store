import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import './navigation.styles.scss';
import Logo from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { signoutuser } from "../../utils/firebase/firebase.utils";
import CartDropdown  from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);


    const signOuthandler = async () => {
        await signoutuser();
        setCurrentUser(null);
    }

    return(
      <>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <img src={Logo} />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {currentUser ? (<span className="nav-link" onClick={signOuthandler}>
                Sign Out
            </span>) : ( 
            <Link className="nav-link" to='/auth'>
                SIGN IN
            </Link> )}
            <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
      </>
    )
}

export default Navigation;