import React, { Component} from 'react';
import ReactDOM from 'react-dom';


export default class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0,
    }
  }

  componentWillMount() {
    const allImgs = [
      'https://i.ytimg.com/vi/NTvI6Ni-dR8/maxresdefault.jpg',
      'https://dsx.weather.com//util/image/w/00138f9a-aa2e-402b-92ff-d001008c624e.jpg?v=at&w=485&h=273&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0',
      'https://s.blogcdn.com/slideshows/images/slides/400/662/5/S4006625/slug/l/01-2017-chevrolet-corvette-gs-fd-1-1.jpg',
      'https://i.pinimg.com/originals/96/0b/bd/960bbd9cec48d31ac3e75bdb40ba5a0a.jpg',
      'http://cdn.whoabella.com/wp-content/uploads/2015/12/coolgirlcars2.jpg',
      'https://i.ytimg.com/vi/qvuvjEkeDAw/maxresdefault.jpg'
    ];

    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex],
    })
  }

  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return (
        <div key={i} onClick={this.clickedThumb.bind(null, i)} className="thumb-img" style={
          {"backgroundImage": `url('${item}')`}
        }>
        </div>
      )
    })
  }

  nextBtn = () => {
    if (this.state.currentIndex != (this.state.allImgs.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  }

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  }

  clickedThumb = (index) => {
    this.setState({
      currentIndex: index,
    })
  }
  
  render () {
    const { match, location, history } = this.props;
    return (

      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="image-1" style={
            {"backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`}
          }></div>
          </div>
        </div>
        <div className="thumbnails">
          {this.allImgsLoop()}
        </div>
      </div>
                
    )
  }
}

