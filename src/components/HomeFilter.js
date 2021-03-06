import React, { Component } from 'react';

class HomeFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingMenu: false,
    }

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState(state => ({
      showingMenu: !state.showingMenu
    }));
  }

  render () {
    if (this.state.showingMenu) {
      return(
        <div className="filter-tools">
          <div className="filter-button" onClick={this.toggleHandler}>
              Hide Filters <i className="fas fa-bars"></i>
          </div>
          <div className="sort-select">
            <select onChange={this.props.sortHandler}>
              <option value="0">Relevancy</option>
              <option value="1">Price Low to High</option>
              <option value="2">Price High to Low</option>
            </select>
          </div>

          <div className="filter-menu">
            <div className="filter-box">
              <div className="filter-category">Home Type</div>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="homeType" hometype="Apartment" />
                <span className="checkmark" />
                Apartment
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="homeType" hometype="Loft" />
                <span className="checkmark" />
                Loft
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="homeType" hometype="Room" />
                <span className="checkmark" />
                Room
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="homeType" hometype="Condo" />
                <span className="checkmark" />
                Condo
              </label>
            </div>
            <div className="filter-box">
              <div className="filter-category">State</div>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="state" state="NY" />
                <span className="checkmark" />
                NY
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="state" state="CA" />
                <span className="checkmark" />
                CA
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="state" state="CHI" />
                <span className="checkmark" />
                CHI
              </label>
            </div>
            <div className="filter-box">
              <div className="filter-category">Extras</div>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="elevator" extra="extra" />
                <span className="checkmark" />
                Elevator
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="gym" extra="extra" />
                <span className="checkmark" />
                Gym
              </label>
              <label className="checkbox-container">
                <input type="checkbox" onChange={this.props.changeHandler} id="pool" extra="extra" />
                <span className="checkmark" />
                Pool
              </label>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="filter-tools">
          <div className="filter-button" onClick={this.toggleHandler}>
            Show Filters <i className="fas fa-bars"></i>
          </div>
          <div className="sort-select">
            <select onChange={this.props.sortHandler}>
              <option value="0">Relevancy</option>
              <option value="1">Price Low to High</option>
              <option value="2">Price High to Low</option>
            </select>
          </div>
        </div>
      );
    }
  }
}

export default HomeFilter;