import { useUserAuth } from "../context/userAuthContext";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase.config";

const Navbar = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Fast Delivery
        </Link>
      </div>
      <div className={`flex-none`}>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
