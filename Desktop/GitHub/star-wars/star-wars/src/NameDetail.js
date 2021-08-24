import React, { Component } from 'react'
import axios from 'axios'

export default class nameDetail extends Component {

    state = {
        details: undefined,
    }

// componentDidMount() {
//     this.getDetails()
// }

componentWillReceiveProps() {

    this.getDetails()

    this.setState({
        location: this.props.location
    })
}


    // componentDidUpdate() {

    //     this.getDetails()
    
    //   }

    getDetails = async (e) => {
        const urlDetail = this.props.match.url
        const apiUrl = `https://swapi.co/api`
        console.log('URL', this.state.location)

        console.log('calling get Names function')
        let request = axios.get(`${apiUrl}${urlDetail}`)
          .then(response => {
            const data = response.data;
            console.log('data', data);
    
            this.setState({
              details: data.results
            })
    
          })
          .catch(error => {
            console.error('create student error', error.response)
            // alert(JSON.stringify(error.response.data))
          })
      }

      showDetails = () => {
       if (this.state.details) {
            console.log(this.state.details)
       }
      
    }

    render() {
        // console.log('resutls', this.props)
        // console.log('url', this.props.match.url)

        // console.log('state', this.state)

        const urlDetail = this.props.match.url
        const apiUrl = `https://swapi.co/api`

        console.log()


            return (
                <div>
    
                    <div className="col-7">
                        <h1></h1>
                        
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Capital</td>

                                </tr>
                                <tr>
                                    <td>Area</td>

                        <sup>2</sup>

                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                    {this.showDetails()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
    }
}
