import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../contexts/AuthContext";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between p-4 text-xl font-bold text-center text-whiteMid bg-pureBlackColor">
      <p>ASSIST</p>
      <div className="flex items-center justify-center gap-2">
        <div>
          {user ? (
            <button
              className="btn bg-errorColor hover:bg-mainColor btn-sm rounded-full"
              onClick={logout}
            >
              <i class="fa-solid fa-power-off"></i>
            </button>
          ) : null}
        </div>
        <Link to="https://artsky.io/">
          <img className="h-6" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
