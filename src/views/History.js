import React from 'react'
import Data from '../assets/data/data.json'
import { useState } from 'react';

function History () {

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIntex = lastIndex - recordsPerPage;
    const records = Data.slice(firstIntex, lastIndex);
    const npage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(npage+1).keys()].slice(1)

    return (
        <div className="history">
            <div className="wrapper">
                <h1>Your effort</h1>
                <div className='table-box'>
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th class="th-sm">No</th>
                                <th class="th-sm">Sequence</th>
                                <th class="th-sm">Duration</th>
                                <th class="th-sm">Date</th>
                                <th class="th-sm">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((d,i) => (
                                <tr key={i}>
                                    <td>{d.No}</td>
                                    <td>{d.Sequence}</td>
                                    <td>{d.Duration}</td>
                                    <td>{d.Date}</td>
                                    <td>{d.Score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <section>
                    <ul className='pagination'>
                        <li className = 'page-item'>
                            <a href='#' className='page-link'
                            onClick={prePage}>Prev</a>
                        </li>
                        {
                            numbers.map((n,i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href='#' className='page-link'
                                    onClick={() => changeCPage(n)}  >{n}</a>
                                </li>
                            ))
                        }
                        <li className = 'page-item'>
                            <a href='#' className='page-link'
                            onClick={nextPage}>Next</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )

    function prePage () {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    
    function changeCPage (id) {
    setCurrentPage(id)
    }

    function nextPage () {
    if (currentPage !== npage) {
        setCurrentPage(currentPage + 1)
    }
    }
  }

  export default History;