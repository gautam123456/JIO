import React, {Component} from 'react';

export default class Loading extends Component {

  render(){

    return (
      <div className='loading'>
        <img className='loader' src={'../styles/assets/loading.gif'} />
      </div>
    );
  }
}
