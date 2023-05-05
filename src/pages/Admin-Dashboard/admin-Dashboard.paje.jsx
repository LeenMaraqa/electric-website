import SidebarMenu from "../../components/CSE/sidebar menu/sidebar-menu.component";
import "../../components/CSE/sidebar menu/sidebar-menu.css";
import { Button } from "antd";
import { Users, HouseLine, SignOut, UserPlus } from "phosphor-react";
import "./admin-Dashboard.css";
import { useState } from "react";
import AddEmp from "../../components/admin/add-emp/addEmp.component";

const Admin_Dashboard = () => {
  const [employee, setEmployee] = useState([]);
  const endDate =
    new Date().toDateString() + " " + new Date().toLocaleTimeString();
  const fetchEmployee = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/employee.json?key=f4868e30"
    );
    const employeeData = await response.json();
    console.log("employeeData", employeeData);
    setEmployee(employeeData.filter((employee) => !employee.endDate));
    console.log("employee: ", employee);
  };
  const archiveEmployee = async (empNum) => {
    try {
      const response = await fetch(
        `https://my.api.mockaroo.com/archEmp/${empNum}.json?key=f4868e30&__method=PUT`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            empNum: empNum,
            endDate: endDate,
          }),
        }
      );
      const test = await response.json();
      setEmployee(
        employee.filter((archiveEmp) => archiveEmp.empNum !== empNum)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="sidebar">
        <div className="CSE-dashboard-item">
          <h1>HEPCo</h1>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <HouseLine size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span className="CSE-dashboard-btn">لوحة التحكم</span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <UserPlus size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span>
            <AddEmp />
          </span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <Users size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span>
            <span>
              <Button className="Empbtn" type="primary" onClick={fetchEmployee}>
                الموظفين
              </Button>
            </span>
          </span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <SignOut size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span className="CSE-dashboard-btn">تسجيل الخروج </span>
        </div>
      </div>
      <div>
        {employee.length > 0 ? (
          <div className="info empInfo">
            <table className="data empData">
              <thead>
                <tr>
                  <th>رقم الموظف</th>
                  <th>اسم الموظف</th>
                  <th>رقم الهاتف</th>
                  <th>رقم الهوية </th>
                  <th>العنوان </th>
                  <th>نوع الوظيفة </th>
                  <th> تاريخ بداية الخدمة</th>
                  <th> أرشفة </th>
                </tr>
              </thead>
              <tbody>
                {employee.map((data) => (
                  <tr key={data.empNum}>
                    <td>{data.empNum}</td>
                    <td>{data.empName}</td>
                    <td>{data.phoneNum}</td>
                    <td>{data.id}</td>
                    <td>{data.address}</td>
                    <td>{data.role}</td>
                    <td>{data.startDate}</td>
                    <td>
                      <Button onClick={() => archiveEmployee(data.empNum)}>
                        أرشفة
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Admin_Dashboard;
