// import React, { use, useState } from "react";
// // import { Button, Modal, Table } from "react-bootstrap";
// import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);

//   const closeModal = () => setShowModal(false);
//   const openModal = () => setShowModal(true);

//   const [dataArray, setDataArray] = useState([
//     {
//       id: 1,
//       eventName: "تست 1",
//       status: false,
//       default: false,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },
//     {
//       id: 2,
//       eventName: "تست 2",
//       status: true,
//       default: true,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },
//     {
//       id: 3,
//       eventName: "تست 2",
//       status: true,
//       default: true,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },
//     {
//       id: 4,
//       eventName: "تست 2",
//       status: true,
//       default: true,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },
//     {
//       id: 5,
//       eventName: "تست 2",
//       status: true,
//       default: true,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },
//     {
//       id: 6,
//       eventName: "تست 2",
//       status: true,
//       default: true,
//       startDate: "1402-01-02",
//       endDate: "1402-01-03",
//     },

//     // Add more fake data as needed
//   ]);

//   const [inputData, setInputData] = useState({
//     id: "",
//     eventName: "",
//     status: "",
//     default: "",
//     startDate: "",
//     endDate: "",
//   });

//   const handleAdd = () => {
//     setDataArray((prevArray) => [...prevArray, inputData]);
//   };

//   return (
//     <div className="container fluid main">
//       <div
//         className="header d-flex p-3 border-bottom"
//         style={{ justifyContent: "space-between" }}
//       >
//         <h2>رویدادها</h2>
//         <button
//           type="button"
//           className="btn btn-primary d-flex justify-content-center align-items-center "
//           onClick={openModal}
//         >
//           <FontAwesomeIcon icon={faPlus} className="fs-4" />
//           <span className="mx-2 fs-4">افزودن رویداد</span>
//         </button>
//       </div>
//       {showModal && (
//         <div
//           className="modal"
//           tabIndex="-1"
//           role="dialog"
//           style={{ display: "block" }}
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h3 className="modal-title">افزودن رویداد جدید</h3>
//                 {/* <button type="button" className="close" onClick={closeModal}>
//                   <span>&times;</span>
//                 </button> */}
//               </div>
//               <div className="modal-body">
//                 <div className="row gy-4">
//                   <div className="col-12">
//                     <div className="form-group d-flex justify-content-center align-items-center ">
//                       <label style={{minWidth:'8rem'}} htmlFor="input1">نام رویداد:</label>
//                       {/* <span>نام رویداد</span> */}
//                       <input
//                         type="text"
//                         // className="form-control"
//                         id="input1"
//                         onChange={(e) =>
//                           setInputData({
//                             ...inputData,
//                             eventName: e.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-group d-flex justify-content-center align-items-center">
//                       <label htmlFor="startDate" style={{minWidth:'8rem'}}>وضعیت:</label>
//                       <input
//                         type="text"
//                         // className="form-control"
//                         id="startDate"
//                         onChange={(e) =>
//                           setInputData({
//                             ...inputData,
//                             status: e.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-group d-flex justify-content-center align-items-center">
//                       <label htmlFor="startDate" style={{minWidth:'8rem'}}>پیش فرض:</label>
//                       <input
//                         type="text"
//                         // className="form-control"
//                         id="startDate"
//                         onChange={(e) =>
//                           setInputData({
//                             ...inputData,
//                             default: e.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-group d-flex justify-content-center align-items-center">
//                       <label htmlFor="startDate" style={{minWidth:'8rem'}}>تاریخ شروع:</label>
//                       <input
//                         type="text"
//                         // className="form-control"
//                         id="startDate"
//                         onChange={(e) =>
//                           setInputData({
//                             ...inputData,
//                            startDate : e.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="form-group d-flex justify-content-center align-items-center">
//                       <label htmlFor="startDate" style={{minWidth:'8rem'}}>تاریخ پایان:</label>
//                       <input
//                         type="text"
//                         // className="form-control"
//                         id="startDate"
//                         onChange={(e) =>
//                           setInputData({
//                             ...inputData,
//                            endDate : e.target.value,
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Add two more input fields here */}
       
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleAdd}
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <table className="table">
//         <thead>
//           <tr>
//             <th>نام رویداد</th>
//             <th>وضعیت</th>
//             <th>پیش فرض</th>
//             <th>تاریخ شروع</th>
//             <th>تاریخ پایان</th>
//             <th>#</th>
//           </tr>
//         </thead>
//         <tbody>
//           {" "}
//           {[dataArray, setDataArray].map((item) => (
//             <tr key={item.id}>
//               <td>{item.eventName}</td>
//               <td>{item.status ? "فعال" : "غیرفعال"}</td>
//               <td>{item.default ? "پیش فرض یک" : "پیش فرض  دو"}</td>
//               <td>{item.startDate}</td>
//               <td>{item.endDate}</td>
//               <td className="d-flex">
//                 <button
//                   style={{
//                     backgroundColor: "#1ca551",
//                     width: "3rem",
//                     height: "3rem",
//                   }}
//                   className="p-1 d-flex justify-content-center align-items-center mx-2"
//                 >
//                   <FontAwesomeIcon
//                     icon={faEdit}
//                     style={{ color: "#fff", display: "flex" }}
//                   />
//                 </button>
//                 <button
//                   style={{
//                     color: "#fff",
//                     backgroundColor: "#b55757",
//                     width: " 3rem",
//                   }}
//                   className="p-1 d-flex justify-content-center align-items-center"
//                 >
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     style={{ color: "#fff", display: "flex" }}
//                   />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }









import React from "react";
// import {Button} from '@mui/base/Button'

import { Typography } from "@mui/material";

export default function Home() {

  return (
    <>
   <Typography variant="button" sx={{color:'red'}}>Hello world</Typography>
   
    </>
  )
}