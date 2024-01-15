import React  from "react";
import ReactDOM from "react-dom/client";
import './index.css';

//this is a react element , it returns an object
const headingReact=  <h1 id="title" key="h1"> Hello, M</h1>


const rootDOMElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOMElement);

// const HeaderComponent2=()=>{
//     return (
//     <div> 
//         {headingReact}
//         <h1>First React Component</h1> 
//         <h1>Second React Component</h1> 
//         <h1>Third React Component</h1> 
//     </div>
//     );
// };
 

const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo">
          {/* Place your logo here. Example: */}
          <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="Logo" />
        </div>
        <div className="search-bar">
          {/* You can use an input or a custom search component */}
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-icon">
          {/* Place your user icon here. Example: */}
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png" alt="User" />
        </div>
      </div>
    );
  };

root.render(<HeaderComponent/>);