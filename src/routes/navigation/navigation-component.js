import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import Logo from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { signoutuser } from "../../utils/firebase/firebase.utils";
import CartDropdown  from "../../components/cart-dropdown/cart-dropdown";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles';
const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);


    const signOuthandler = async () => {
        await signoutuser();
        setCurrentUser(null);
    }

    return(
      <>
      <NavigationContainer>
        <LogoContainer to="/">
            <img src={Logo} />
        </LogoContainer>
        <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? (<NavLink as='span' onClick={signOuthandler}>
                Sign Out
            </NavLink>) : ( 
            <NavLink to='/auth'>
                SIGN IN
            </NavLink> )}
            <CartIcon />
        </NavLinks>
        <CartDropdown />
      </NavigationContainer>
      <Outlet />
      </>
    )
}

export default Navigation;