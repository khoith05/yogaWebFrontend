import React, { useEffect } from "react";
import { useState } from "react";
import getResults from "../service/getResults";
import LoadingWrapper from "./LoadingWrapper";
import { GET_RESULT_LOADING } from "./../utils/constant";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import formatDate from "../utils/fortmatDate";

function History() {
  const [currentPage, setCurrentPage] = useState(1);
  const [records, setRecords] = useState([]);
  const [numbers, setNumbers] = useState(0);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage < numbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getResults({ page: currentPage }).then((res) => {
      console.log("🚀 ~ file: History.js:39 ~ getResults ~ res:", res);
      return;
    });
  }, []);

  useEffect(() => {
    getResults({ page: currentPage }).then((res) => {
      setRecords(res.current);
      return;
    });
  }, [currentPage]);

  return (
    <div className="history">
      <div className="d-flex justify-content-center flex-row">
        <div className="wrapper">
          <h1>Your effort</h1>
          {records.length === 0 ? (
            <p>You have never practiced before</p>
          ) : (
            <>
              <div className="table-box">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th className="th-sm">No</th>
                      <th className="th-sm">Sequence</th>
                      <th className="th-sm">Duration</th>
                      <th className="th-sm">Date</th>
                      <th className="th-sm">Score</th>
                    </tr>
                  </thead>

                  <tbody>
                    {records.map(({ name, time, created, point }, i) => (
                      <tr key={i}>
                        <td>{i + (currentPage - 1) * 10}</td>
                        <td>{name}</td>
                        <td>{millisToMinutesAndSeconds(time)}</td>
                        <td>{formatDate(created)}</td>
                        <td>{point}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <section>
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={prePage}>
                      Prev
                    </button>
                  </li>
                  {Array.from(Array(numbers).keys()).map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <button
                        className="page-link"
                        onClick={() => changeCPage(n)}
                      >
                        {n}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="page-link" onClick={nextPage}>
                      Next
                    </button>
                  </li>
                </ul>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
