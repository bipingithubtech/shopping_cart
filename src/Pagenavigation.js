import { NavLink } from "react-router-dom";

const Pagenavigation = ({ title }) => {
  return (
    <div className="nav-home">
      <NavLink to="/">GO BACK HOME..</NavLink>
      {title}
    </div>
  );
};

export default Pagenavigation;
