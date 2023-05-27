// import { useEffect, useState } from "react";
// import Header from "../../header/header.component";

// const View_Installments = () => {
//   const [installments, setInstallments] = useState([]);
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");
//   const fetchInstallments = async () => {
//     const response = await fetch(" ", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         userid: userId,
//       },
//     });

//     const jsonData = await response.json();
//     setInstallments(jsonData);
//   };
//   useEffect(() => {
//     fetchInstallments();
//   }, []);

//   return (
//     <div className="customer-info-wrapper">
//       <Header />
//       <div className="customer-info">
//         <table>
//           {" "}
//           <thead>
//             <tr>
//               <th>نوع الاضافة </th>
//               <th>تاريخ التفعيل </th>
//               <th>عدد الدفعات الكلية</th>
//               <th>المبلغ</th>
//               <th>عدد مرات الدفع</th>
//             </tr>
//           </thead>
//           <tbody>
//             {installments.map((data) => (
//               <tr key={data.id}>
//                 <td>{data.type}</td>
//                 <td>{data.activationDate}</td>
//                 <td>{data.installmentsNumber}</td>
//                 <td>{data.amount}</td>
//                 <td>{data.paymentTimesNumber}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default View_Installments;

import { useEffect, useState } from "react";
import Header from "../../header/header.component";

const View_Installments = () => {
  const [installments, setInstallments] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchInstallments = async () => {
    const response = await fetch("http://localhost:5000/api/installments", {
      headers: {
        Authorization: `Bearer ${token}`,
        userid: userId,
      },
    });

    const jsonData = await response.json();
    setInstallments(jsonData);
  };
  useEffect(() => {
    fetchInstallments();
  }, []);

  return (
    <div className="customer-info-wrapper">
      <Header />
      <div className="customer-info">
        <table>
          {" "}
          <thead>
            <tr>
              <th>نوع الاضافة </th>
              <th>تاريخ التفعيل </th>
              <th>عدد الدفعات الكلية</th>
              <th>المبلغ</th>
              <th>عدد مرات الدفع</th>
            </tr>
          </thead>
          <tbody>
            {installments.map((data) => (
              <tr key={data.ID}>
                <td>{data.Type}</td>
                <td>{data.createdAt}</td>
                <td>{data.InstallmentNumber}</td>
                <td>{data.Amount}</td>
                <td>{data.PaymentTimesNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Installments;
