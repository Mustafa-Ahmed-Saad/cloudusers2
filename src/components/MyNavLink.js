import { NavLink } from 'react-router-dom';

const MyNavLink = (props) => (
  <NavLink exact className="nav-link" activeClassName="active" {...props}>
    {props.children}
  </NavLink>
);

export default MyNavLink;
