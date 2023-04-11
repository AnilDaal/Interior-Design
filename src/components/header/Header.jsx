import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Header = ({ type }) => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [showSubService, setShowSubService] = useState(false);
  useEffect(() => {
    try {
      const hello = jwtDecode(localStorage.getItem('blogToken'));
      setToken(hello);
    } catch (error) {}
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('blogToken');
    window.location.reload();
    // setToken(null);
  };

  return (
    <header>
      <div className="logo">
        {/* <img src="https://responsively.app/assets/img/logo.svg" /> */}

        <Link to="/home">
          <img src="/interior-design-logo.svg" alt="" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {/* <Link to="/services">Services</Link> */}

            <div className="dropdown">
              <Link className="dropbtn">
                <span>Services</span>
                <span style={{ marginBottom: '8px' }}>&#8964;</span>
              </Link>
              <div className="dropdown-content">
                <Link to="/services/corporate-office">
                  <img
                    src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />

                  <p>Corporate Office Interior Contractor</p>
                </Link>
                <Link to="/services/turnkey-interior">
                  <img
                    src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <p>Turnkey Interiors Contractor</p>
                </Link>
                <Link to="/services/interior-design">
                  <img
                    src="https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Interior Design Consultant</p>
                </Link>
                <Link to="/services/office-furniture">
                  <img
                    src="https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Office Furniture</p>
                </Link>
                <Link to="/services/gypsum-partition">
                  <img
                    src="https://images.pexels.com/photos/6510967/pexels-photo-6510967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Gypsum Partition Contractor</p>
                </Link>
                <Link to="/services/gypsum-false">
                  <img
                    src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Gypsum False Ceiling Contractor</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
            <br />
            {token && (
              <button className="btn-accept" style={{ marginLeft: '0' }}>
                <Link to="/create-blog">Create Blog</Link>
              </button>
            )}
          </li>
          <li>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </li>

          {token && (
            <button
              className="btn"
              onClick={handleLogout}
              style={{ backgroundColor: 'teal ' }}
            >
              Logout
            </button>
          )}
        </ul>
      </nav>

      {!show && (
        <GiHamburgerMenu
          className="ham-icon"
          onClick={() => setShow((prev) => !prev)}
        />
      )}
      {show && (
        <ImCross
          style={{ fontSize: '1.6rem' }}
          className="ham-icon"
          onClick={() => setShow((prev) => !prev)}
        />
      )}

      {show && (
        <nav className="ham">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubService((prev) => !prev)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <p>Services</p>
                <span>&#8964;</span>
              </button>
              {showSubService && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px',
                    fontSize: '1rem',
                  }}
                >
                  <Link to="/services/corporate-office">Corporate Office</Link>
                  <Link to="/services/turnkey-interior">
                    Turnkey Interiors Contractor
                  </Link>
                  <Link to="/services/interior-design">
                    Interior Design Consultant
                  </Link>
                  <Link to="/services/office-furniture">Office Furniture</Link>
                  <Link to="/services/gypsum-partition">
                    Gypsum Partition Contractor
                  </Link>
                  <Link to="/services/gypsum-false">
                    Gypsum False Ceiling Contractor
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
              {token && (
                <button className="btn-accept" style={{ marginLeft: '0' }}>
                  <Link to="/create-blog">Create Blog</Link>
                </button>
              )}
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {token && (
              <button
                className="btn"
                onClick={handleLogout}
                style={{ backgroundColor: 'teal ' }}
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
