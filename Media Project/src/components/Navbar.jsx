import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../feature/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../feature/service/authSlice";
import CrateModal from "./CrateModal";

const Navbar = () => {
  // const { user } = useSelector((state) => state.authSlice);
  // const { token } = useSelector((state) => state.authSlice);

  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation(token);
  const nav = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    nav("/login");
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <CrateModal/>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="btn btn-ghost normal-case text-xl justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>{user?.name}</a>
              </li>
              <li>
                <a>{user?.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={logoutHandler}
              className="  bg-red-500 text-white rounded px-4 py-1"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
