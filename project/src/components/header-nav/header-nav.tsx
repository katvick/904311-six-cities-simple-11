import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import HeaderNavLogged from '../header-nav-logged/header-nav-logged';
import HeaderNavNotLogged from '../header-nav-not-logged/header-nav-not-logged';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? <HeaderNavLogged /> : <HeaderNavNotLogged />}
    </nav>
  );
}

export default HeaderNav;
