import React, {Component} from 'react';
import {Link} from 'react-router';
import Img from './Img';
import {defaultImage} from '../util/constants.json';

export default class Item extends Component {

  constructor(props){
    super(props);
    this.state = this.props.item;
  }

  handleError = (error) => {
    setTimeout(() => {
      this.setState({img: defaultImage});
    }, 2000);
  }

  render() {
    const {img, title, id} = this.state;

    return (
      <Link to={`\article\?id=${id}`} className='item'>
          <Img src={img} onError={this.handleError}/>
          <div className='details'>
            <div>{title}</div>
            <div>{'Rs. 89'}</div>
          </div>
      </Link>
    )
  }
}
