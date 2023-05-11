import React, { useEffect } from "react";
import { useState } from "react";
import getResults from "../service/getResults";
import { useNavigate } from "react-router-dom";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import formatDate from "../utils/fortmatDate";
import { GET_RESULTS_LOADING } from "../utils/constant";
import LoadingWrapper from "./LoadingWrapper";

function History() {
  const [currentPage, setCurrentPage] = useState(1);
  const [records, setRecords] = useState([]);
  const [numbers, setNumbers] = useState(0);
  const navigate = useNavigate();

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage <= numbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getResults({ page: currentPage }).then((res) => {
      setRecords(res.current);
      setNumbers(res.numberOfPages);
      return;
    });
  }, [currentPage]);

  return (
    <div className="history">
      <div className="d-flex justify-content-center flex-row">
        <div className="wrapper">
          <h1 className="align-self-center">Your effort</h1>
          {records.length === 0 ? (
            <div className="align-self-center mt-5">
              <LoadingWrapper loadingKeys={[GET_RESULTS_LOADING]}>
                <p>You have never practiced before</p>
              </LoadingWrapper>
            </div>
          ) : (
            <>
              <div className="table-box align-self-center">
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
                    {records.map(({ name, time, created, point, id }, i) => (
                      <tr
                        key={i}
                        onClick={() => navigate(`/history/${id}`)}
                        className="cursor-pointer"
                      >
                        <td>{i + 1 + (currentPage - 1) * 10}</td>
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
                  {Array.from({ length: numbers }, (_, i) => i + 1).map(
                    (n, i) => (
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
                    )
                  )}
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
