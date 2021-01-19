import React from "react";

const SearchLayout = (props) => {
  const { gender, cardType, cardPayment, updateState, search } = props;

  return (
    <div className="container border border-5 rounded mt-2 mb-5 p-3">
      <div>
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <form>
                <input
                  value={search}
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  name="search"
                  onChange={(e) => updateState({ search: e.target.value })}
                />
              </form>
            </div>
            <div className="dropdown col-3">
              <div className="form-group">
                <select
                  value={gender}
                  className="form-control"
                  name="gender"
                  id="gender"
                  onChange={(e) => updateState({ gender: e.target.value })}
                >
                  <option>All</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer to skip</option>
                </select>
              </div>
            </div>
            <div className="dropdown col-3">
              <div className="form-group">
                <select
                  value={cardType}
                  className="form-control"
                  name="cardType"
                  id="cardType"
                  onChange={(e) => updateState({ cardType: e.target.value })}
                >
                  <option>All</option>
                  <option>JCB</option>
                  <option>Visa</option>
                </select>
              </div>
            </div>
            <div className="dropdown col-3">
              <div className="form-group">
                <select
                  value={cardPayment}
                  className="form-control"
                  name="gender"
                  id="gender"
                  onChange={(e) => updateState({ cardPayment: e.target.value })}
                >
                  <option>All</option>
                  <option>cc</option>
                  <option>check</option>
                  <option>money order</option>
                  <option>paypal</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
