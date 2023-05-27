import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import "./view-reports.css";

const View_Reports = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/report");
      const data = await response.json();
      const reverseReport =data.reverse();
      setReports(reverseReport);
      console.log("response",response);
      // console.log("report",reports);
      console.log("data",data);
      // console.log("pdf",data.pdf.data);
    } catch (error) {
      console.log("Error fetching reports:", error);
    }
  };

  const openReportPDF = (pdfData) => {
    console.log(pdfData);
    window.open(pdfData);
  };



  return (
    <div className="reports-page">
      <Header />
      <div>
        <div className="view-reports">
          {reports.map((report) => (
            <div
              className="reports-item"
              key={report.ID}
              onClick={() => openReportPDF(report.pdf)}
            >
              <div className="image-container"> <img
                className="report-cover-image"
                src={ `data:image/png;base64,${report.coverImage}`}
                alt={report.title}
              /></div>
             
              <div className="report-title">{report.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View_Reports;

