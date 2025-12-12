// App.js
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BASE_URL } from "./constants.js";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice.js";
import axios from "axios";
import Preloader from "./components/preloader.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [done, setDone] = useState(false); // controls center → top transition
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    document.title = "GMUN 2025";

    const MIN_PRELOADER_TIME = 5000;
    const start = Date.now();

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/profile`, {
          withCredentials: true,
        });
        dispatch(login({ userData: response.data }));
      } catch (error) {
        dispatch(logout());
      } finally {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_PRELOADER_TIME - elapsed);

        setTimeout(() => {
          setDone(true);
        }, remaining);
      }
    };

    fetchData();
  }, [dispatch]);

  const isHome = location.pathname === "/"; // only show on home

  return (
    <>
      <ToastContainer position="top-left" />
      <div>
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>

      {/* Always mounted, but only visible on home */}
      <Preloader done={done} isHome={isHome} />
    </>
  );
};

export default App;
