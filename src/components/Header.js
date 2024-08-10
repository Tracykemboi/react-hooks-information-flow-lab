import React from "react";

function Header({isDarkMode,onDarkModeClick}) {

    return(
<header className={"App"+ (isDarkMode ? "dark" : "light")}>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
 </header>
    )
}
export default Header