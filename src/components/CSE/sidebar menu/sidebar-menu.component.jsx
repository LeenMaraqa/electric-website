import "./sidebar-menu.css";
import Customers from "../customers/customers.component";
import Applications from "../applications/applications.component";
import {
  SquaresFour,
  Users,
  FileText,
  CalendarCheck,
  HouseLine,
  HandCoins,
  Money,
  Coins,
  SignOut,
} from "phosphor-react";
import logo from "../../../images/logo.jpg";

import { useState } from "react";
const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <div className="CSE-dashboard-item">
        <h1>HEPCo</h1>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          {/* <SquaresFour size={24} color="#f4f2f0" weight="fill" /> */}
          <HouseLine size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn">لوحة التحكم</span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <Users size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span>
          <Customers/>
        </span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <FileText size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span>
          {" "}
          <Applications />
        </span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <CalendarCheck size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn"> التقويم</span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          {/* <HandCoins size={24} color="#f4f2f0" weight="fill" /> */}
          <Coins size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn">المعاملات المالية</span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          {/* <HandCoins size={24} color="#f4f2f0" weight="fill" /> */}
          <SignOut size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn">تسجيل الخروج </span>
      </div>
    </div>
  );
};
export default SidebarMenu;



//-------------------------------------




//------------------------------------

// import "./sidebar-menu.css";
// import Customers from "../customers/customers.component";
// import Applications from "../applications/applications.component";
// import {
//   SquaresFour,
//   Users,
//   FileText,
//   CalendarCheck,
//   HouseLine,
//   Money,
//   Coins,
//   SignOut,
// } from "phosphor-react";
// import logo from "../../../images/logo.jpg";

// import { useState } from "react";

// const SidebarMenu = () => {
//   const [activeButton, setActiveButton] = useState("");

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className="sidebar">
//       <div className="CSE-dashboard-item">
//         <h1>HEPCo</h1>
//       </div>
//       <div className="CSE-dashboard-item">
//         <span>
//           <HouseLine size={24} color="#f4f2f0" weight="fill" />
//         </span>
//         <span className="CSE-dashboard-btn">لوحة التحكم</span>
//       </div>
//       <div className="CSE-dashboard-item">
//         <span>
//           <Users size={24} color="#f4f2f0" weight="fill" />
//         </span>
//         <span>
//           <button
//             onClick={() => handleButtonClick("customers")}
//             className={
//               activeButton === "customers"
//                 ? "CSE-dashboard-btn-active"
//                 : "CSE-dashboard-btn"
//             }
//           >
//             <Customers/>
//             </button>
//     </span>
//   </div>
//   <div className="CSE-dashboard-item">
//     <span>
//       <FileText size={24} color="#f4f2f0" weight="fill" />
//     </span>
//     <span>
//       <button
//         onClick={() => handleButtonClick("applications")}
//         className={
//           activeButton === "applications"
//             ? "CSE-dashboard-btn-active"
//             : "CSE-dashboard-btn"
//         }
//       >
//         <Applications/>
//       </button>
//     </span>
//   </div>
//   <div className="CSE-dashboard-item">
//     <span>
//       <CalendarCheck size={24} color="#f4f2f0" weight="fill" />
//     </span>
//     <span>
//       <button
//         onClick={() => handleButtonClick("calendar")}
//         className={
//           activeButton === "calendar"
//             ? "CSE-dashboard-btn-active"
//             : "CSE-dashboard-btn"
//         }
//       >
//         Calendar
//       </button>
//     </span>
//   </div>
//   <div className="CSE-dashboard-item">
//     <span>
//               <Coins size={24} color="#f4f2f0" weight="fill" />
//     </span>
//     <span>
//       <button
//         onClick={() => handleButtonClick("requests")}
//         className={
//           activeButton === "requests"
//             ? "CSE-dashboard-btn-active"
//             : "CSE-dashboard-btn"
//         }
//       >
//         Requests
//       </button>
//     </span>
//   </div>
//   <div className="CSE-dashboard-item">
//     <span>
//       <Money size={24} color="#f4f2f0" weight="fill" />
//     </span>
//     <span>
//       <button
//         onClick={() => handleButtonClick("payments")}
//         className={
//           activeButton === "payments"
//             ? "CSE-dashboard-btn-active"
//             : "CSE-dashboard-btn"
//         }
//       >
//         Payments
//       </button>
//     </span>
//   </div>
//   <div className="CSE-dashboard-item">
//     <span>
//       <Coins size={24} color="#f4f2f0" weight="fill" />
//     </span>
//     <span>
//       <button
//         onClick={() => handleButtonClick("balance")}
//         className={
//           activeButton === "balance"
//             ? "CSE-dashboard-btn-active"
//             : "CSE-dashboard-btn"
//         }
//       >
//         Balance
//       </button>
//     </span>
//   </div>
//   </div>);
// };

//   export default SidebarMenu






// // import "./sidebar-menu.css";
// // import Customers from "../customers/customers.component";
// // import Applications from "../applications/applications.component";
// // import {
// //   SquaresFour,
// //   Users,
// //   FileText,
// //   CalendarCheck,
// //   HouseLine,
// //   HandCoins,
// //   Money,
// //   Coins,
// //   SignOut,
// // } from "phosphor-react";
// // import logo from "../../../images/logo.jpg";

// // import { useState } from "react";
// // const SidebarMenu = () => {
// //   const [activeButton, setActiveButton] = useState("customers"); // initialize state variable to "customers"

// //   const handleButtonClick = (buttonName) => {
// //     setActiveButton(buttonName); // set state variable to the clicked button's name
// //   };

// //   return (
// //     <div className="sidebar">
// //       <div className="CSE-dashboard-item">
// //         <h1>HEPCo</h1>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <HouseLine size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span className="CSE-dashboard-btn">لوحة التحكم</span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <Users size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span>
// //           <button onClick={() => handleButtonClick("customers")}>
// //             Customers
// //           </button>
// //         </span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <FileText size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span>
// //           <button onClick={() => handleButtonClick("applications")}>
// //             Applications
// //           </button>
// //         </span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <CalendarCheck size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span className="CSE-dashboard-btn"> التقويم</span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <Coins size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span className="CSE-dashboard-btn">المعاملات المالية</span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         <span>
// //           <SignOut size={24} color="#f4f2f0" weight="fill" />
// //         </span>
// //         <span className="CSE-dashboard-btn">تسجيل الخروج </span>
// //       </div>
// //       <div className="CSE-dashboard-item">
// //         {activeButton === "customers" && <Customers />}
// //         {activeButton === "applications" && <Applications />}
// //       </div>
// //     </div>
 
// //    );
// //  };
// //  export default SidebarMenu;


