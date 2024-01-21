import React from 'react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header({loginStatus,setLoginStatus,setLogin,setToken,token,setAdmin}) {
  

  const nav = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await localStorage.getItem('token');
      setToken(storedToken);
  
      if (storedToken) {
        setLogin(true);
        setLoginStatus('Logout');
      }
     
    };
    fetchToken();
  }, [setToken, setLogin, setLoginStatus]);

  const handleLogout = async () => {
    // Clear the token from local storage
    await localStorage.removeItem('token');
    
    // Update the login state to 'Login'
    setLoginStatus('Login');
    setAdmin(false);
    setLogin(false);
    nav('/login');
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LaptopPlaza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center" >
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          <div className="d-flex align-items-center my-2">


            
            <Link className="btn btn-outline-info mx-2" to="/mycart">MyCart</Link>
            {loginStatus === 'Login' ? (
          <Link className="btn btn-outline-info mx-2" to="/login">
            {loginStatus}
          </Link>
        ) : (
          <button className="btn btn-outline-info mx-2" onClick={handleLogout}>
            {loginStatus}
          </button>
        )}
            
          </div>
        </div>
      </div>
    </nav>
  );
}
