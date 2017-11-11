import React, {Component} from 'react';
import Img from './Img';
import fetchData from '../util/fetchData';
import {defaultImage} from '../util/constants.json';

export default class Item extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
    const {location: {query: {id}}} = this.props;
    this.fetchData(id);
  }

  fetchData = (id) => {
    fetchData().then((data) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
          this.setState({data: data[i]});
          break;
        }
      }
    });
  }

  handleError = (error) => {
    const {data} = this.state;
    //Here we can basically log error to the server...
    setTimeout(() => {
      this.setState({data: Object.assign(data, {img: defaultImage})});
    }, 2000);

  }

  render() {
    const {data} = this.state;
    if(data){
      const {img, title, desc} = data;
      return (
        <div className='container'>
          <div className='item'>
            <Img src={img} onError={this.handleError}/>
            <div className='details'>
              <div>{title}</div>
              <div>{'Rs. 89'}</div>
              <div className='desc'>{desc}</div>
            </div>
          </div>
        </div>
      )

    } else {
      return <div className='loading'>Loading...</div>
    }
  }
}
