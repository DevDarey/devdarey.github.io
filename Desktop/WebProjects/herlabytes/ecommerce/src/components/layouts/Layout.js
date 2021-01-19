import React, { Component } from "react";
import SearchLayout from "./SearchLayout";
import TableLayout from "./TableLayout";
import axios from "axios";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      currentPage: 1,
      pageSize: 20,
      gender: "All",
      cardType: "All",
      cardPayment: "All",
      search: "",
    };
  }

  updateState = (update) => {
    this.setState(update);
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.enye.tech/v1/challenge/records"
    );
    const results = data.records.profiles;
    this.setState({ results });
  }

  render() {
    const searchFilter = this.state.results.filter((record) => {
      if (this.state.search === "") {
        return true;
      } else if (
        record.FirstName.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    const genderFilter = searchFilter.filter((record) => {
      if (this.state.gender === "All") {
        return true;
      } else {
        return record.Gender === this.state.gender;
      }
    });

    const cardFilter = genderFilter.filter((record) => {
      if (this.state.cardType === "All") {
        return true;
      } else {
        return record.CreditCardType === this.state.cardType;
      }
    });
    const cardPayment = cardFilter.filter((record) => {
      if (this.state.cardPayment === "All") {
        return true;
      } else {
        return record.PaymentMethod === this.state.cardPayment;
      }
    });

    return (
      <div>
        <SearchLayout
          gender={this.state.gender}
          cardType={this.state.cardType}
          cardPayment={this.state.cardPayment}
          updateState={this.updateState}
          search={this.state.search}
        />
        <TableLayout
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          results={cardPayment}
          updateState={this.updateState}
        />
      </div>
    );
  }
}

export default Layout;
