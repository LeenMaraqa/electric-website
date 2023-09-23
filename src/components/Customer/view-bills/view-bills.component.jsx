import { useEffect, useState } from "react";
import Header from "../../header/header.component";

const View_Bills = () => {
  const [customerBills, setCustomerBills] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchBills = async () => {
    const response = await fetch(
       "http://localhost:5000/api/bills",{
      headers: {
        'Authorization': `Bearer ${token}`,
        'userid': userId,
      },
    });
    console.log(response);

    const jsonData = await response.json();
    setCustomerBills(jsonData);
    console.log(typeof(customerBills));
    console.log(typeof(jsonData));
  };
  useEffect(() => {
    fetchBills();
  }, []);
 
  return (
    <div className="customer-info-wrapper">
      <Header />
      <div className="customer-info">
        <table className="">
          {" "}
          <thead>
            <tr>
              <th>رقم الفاتورة </th>
              <th>التاريخ </th>
              {/* <th>رقم الخدمة </th> */}
              <th>عنوان الخدمة </th>
              <th>المبلغ</th>
              <th>المبلغ المدفوع  </th>
            </tr>
          </thead>
          <tbody>
            {customerBills.map((bill) => (
              <tr key={bill.ID}>
                <td>{bill.ID}</td>
                <td>{bill.createdAt}</td>
                <td>{bill.service.Address}</td>
                <td>{bill.Amount}</td>  
                <td>{bill.PaidAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Bills;