import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon-component";
import Logo from '../../assets/crown.svg';
import { signoutuser } from "../../utils/firebase/firebase.utils";
import CartDropdown  from "../../components/cart-dropdown/cart-dropdown";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles';
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);

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
            {currentUser ? (<NavLink as='span' onClick={signoutuser}>
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