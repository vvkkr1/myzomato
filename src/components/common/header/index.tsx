import "./styles.css";

function Header() {
  return (
    <div className="max-width header">
      <div className="header-wrap">
        <div className="header-left-container absolute-center" >
            <div className="logo">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="zomato-logo"
                    className="header-logo"
                />
            </div>
        </div>

        <div className="header-right-container" style={{flex:"1"}}>
            <div className="header-location-search-container">
                <div className="header-location-wrapper" style={{flex:"1"}}>
                    <div className="location-icon-name-container">
                        <i className="fi fi-rr-marker location-icon absolute-center"></i>
                            
                        <div className="location-name">Bangalore</div>
                    </div>

                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>

                <div className="header-search-wrapper" style={{flex:"2"}}>
                        <div className="search-icon-name-container">
                            <div className="search-icon-wrap">
                                <i className="fi fi-rr-search search-icon absolute-center"></i>
                            </div>

                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="search-input"/>
                        </div>
                </div>
            </div>

            <div className="header-profile-wrapper" >
                <div className="profile-login-logout-container">
                    <div className="login-wrapper">
                        <button className = "login-btn">Log in</button>
                    </div>

                    <div className="signup-wrapper">
                        <button className="signup-btn">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
