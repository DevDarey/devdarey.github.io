import React from "react";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

const TableLayout = (props) => {
  const { pageSize, currentPage, results, updateState } = props;
  const data = paginate(results, currentPage, pageSize);
  const handlePageChange = (page) => {
    updateState({ currentPage: page });
  };

  return (
    <div>
      <>
        <div className="row">
          <div className="col-12 table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">CreditCardNumber</th>
                  <th scope="col">CreditCardType</th>
                  <th scope="col">Email</th>
                  <th scope="col">DomainName</th>
                  <th scope="col">PhoneNumber</th>
                  <th scope="col">MacAddress</th>
                  <th scope="col">URL</th>
                  <th scope="col">UserName</th>
                  <th scope="col">LastLogin</th>
                  <th scope="col">PaymentMethod</th>
                </tr>
              </thead>
              <tbody>
                {data.map((result) => (
                  <tr key={uuidv4()}>
                    <td>{result.FirstName}</td>
                    <td>{result.LastName}</td>
                    <td>{result.Gender}</td>
                    <td>{result.Latitude}</td>
                    <td>{result.Longitude}</td>
                    <td>{result.CreditCardNumber}</td>
                    <td>{result.CreditCardType}</td>
                    <td>{result.Email}</td>
                    <td>{result.DomainName}</td>
                    <td>{result.PhoneNumber}</td>
                    <td>{result.MacAddress}</td>
                    <td>{result.URL}</td>
                    <td>{result.UserName}</td>
                    <td>{result.LastLogin}</td>
                    <td>{result.PaymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={results.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default TableLayout;
