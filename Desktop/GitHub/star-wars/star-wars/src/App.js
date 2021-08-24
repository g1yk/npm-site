import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Link, Route } from 'react-router-dom';
import NameDetail from './NameDetail';



export default class App extends Component {



  state = {
    loading: true,
    results: undefined,
    details: undefined,
  }



  componentDidMount() {

    this.getNames()

  }


  getNames = async (e) => {
    console.log('calling get Names function')
    let request = axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        const data = response.data;
        console.log('data', data);

        this.setState({
          results: data.results
        })

      })
      .catch(error => {
        console.error('create student error', error.response)
        // alert(JSON.stringify(error.response.data))
      })
  }




  showNames = (index) => {

    if (this.state.results) {
      console.log(this.state.results)

      let results = [...this.state.results]
      return results.map((eachResult, index) => {
        return <li key={index}>
          <Link className="list-group-item list-group-item-action" to={`/people/${index + 1}`}> {eachResult.name}</Link>
        </li>
      })
    }
  }




  render() {
    return (







  

        <div>

          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">StarWars People</a>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <div className="list-group">

                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-5">{this.showNames()}</div>

          </div>

        <Route exact path="/people/:id" 
        render={(props) => <NameDetail {...props}  />}
    />
        
          </div>



    


        )
      }
    }
    
    
    
    
    
    
    
    
    
