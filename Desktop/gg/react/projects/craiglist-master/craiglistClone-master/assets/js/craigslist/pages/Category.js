import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'query-string';


export default class Category extends Component {
  constructor () {
    super()
    this.state = {
      min_price: 0,
      max_price: 3000,
      sort: 'newest',
      select_view: 'gallery',
    }
  }

  componentWillMount() {
    const {match, history} = this.props;
    const self = this;
    const queryParams = qs.parse(this.props.location.search);
    const {min_price, max_price, sort, select_view} = queryParams; 

    if (queryParams.min_price != undefined) {
      axios.get(`/api/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`)
      .then(function (response) {
        self.setState({
          itemsData: response.data,
        }, () => {
          console.log(self.state);
        })
      })
      .catch(function (error) {
        console.log(error);
      });  
    } else {
      axios.get(`/api/${match.params.city}/${match.params.category}`)
      .then(function (response) {
        self.setState({
          itemsData: response.data,
        }, () => {
          console.log(self.state);
        })
      })
      .catch(function (error) {
        console.log(error);
      });  
    }
    
  }

  loopItems = () => {
    if (this.state.itemsData != undefined) {
      return this.state.itemsData.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div className="image" style={{
              backgroundImage: `url('${item.images[0]}')`
            }}>
              <div className="price">
                ${item.price}
              </div>  
              image
            </div>
            <div className="details">
              <i className="far fa-star"></i>
              <h5>
                {item.title}
              </h5>
              <h6>{item.city}</h6>
            </div> 
          </div>
        )
            
      });
    }
  }

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;

    if (match.params.listings == 'cars-and-trucks') {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label>Make</label>
            <select name="make" className="make" onChange={this.handleChange}>
              <option value="bmw">bmw</option>
              <option value="benz">benz</option>
              <option value="honda">honda</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model</label>
            <select name="model" className="model" onChange={this.handleChange}>
              <option value="x6">x6</option>
              <option value="cseries">cseries</option>
              <option value="cob">cob</option>
            </select>
          </div>
        </div>
      )
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = (event.target.type == 'checkbox' ? event.target.checked : event.target.value);

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    })
  }

  submitFilters = () => {
    const self = this;
    const { match, location, history } = this.props;
    const {min_price, max_price, sort, select_view} = this.state; 

    document.location.href = `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`;

    const queryParams = qs.parse(this.props.location.search);

  }

  
  render () {
    const { match, location, history } = this.props;
    return (
        <div className="listings-page">
            <div className="container">
              <section id="filter">
                  <div className="form-group price">
                    <label>Price</label>
                    <div className="min-max">
                      <select name="min_price" className="min-price" onChange={this.handleChange} value={this.state.min_price}>
                        <option value="0">0</option>
                        <option value="1000">1000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                        <option value="60000">60000</option>
                        <option value="70000">70000</option>
                        <option value="80000">80000</option>
                        <option value="90000">90000</option>
                        
                      </select>
                      <select name="max_price" className="max-price" onChange={this.handleChange} value={this.state.max_price}>
                      <option value="1000">1000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                        <option value="60000">60000</option>
                        <option value="70000">70000</option>
                        <option value="80000">80000</option>
                        <option value="90000">90000</option>
                        <option value="90000">100000</option>
                      </select>
                    </div>
                  </div>
                  {this.showMakeModelDropdown()}
                  
                  <div className="form-group button">
                    <div className="primary-btn" onClick={this.submitFilters}>Update</div>
                    <div className="reset-btn">Reset</div>
                  </div>
              </section>
            </div>
            <section id="list-view">
              <div className="container">
              <div className="white-box">
                <section className="change-view">
                  <div className="form-group view-dropdown">
                    <select name="select_view" className="select-view" onChange={this.handleChange} value={this.state.select_view}>
                      <option value="gallery">Gallery View</option>
                      <option value="list">List View</option>
                      <option value="thumb">Thumb View</option>
                    </select>
                  </div>
                  <div className="form-group sort-dropdown">
                    <select name="sort" className="sort-dropdown" onChange={this.handleChange} value={this.state.sort}>
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                  
                </section>
                <section className="all-items">
                  {this.loopItems()}
                </section>
              </div>
              </div>
            </section>
        </div>
    )
  }
}

