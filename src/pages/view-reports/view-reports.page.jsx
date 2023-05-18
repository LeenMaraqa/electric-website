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
      const response = await fetch(
        "https://my.api.mockaroo.com/report.json?key=3f67f180"
      );
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.log("Error fetching reports:", error);
    }
  };

  function openReportPDF(pdfReport) {
    window.open(pdfReport, "_blank");
  }

  return (
    <div className="reports-page">
      <Header />
      <div>
        <div className="view-reports">
          {reports.map((report) => (
            <div
              className="reports-item"
              key={report.Id}
              onClick={() => openReportPDF(report.pdfReport)}
            >
              <img
                className="report-cover-image"
                src={report.coverImage}
                alt={report.title}
              />
              <div className="report-title">{report.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View_Reports;
