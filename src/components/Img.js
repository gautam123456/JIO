import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defaultImage} from '../util/constants.json';

export default class Img extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    onError: PropTypes.func
  }

  static defaultProps = {
    src: defaultImage
  }

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

  handleOnLoadEvent = () => {
    this.setState({loading: false});
  }

  handleError = (error) => {

    //Error handler call back method to be called in case of error.
    const {onError} = this.props;
    onError ? onError(error) : null;
  }

  render(){
    const {loading} = this.state;

    return (
      <div className='image-container'>
        {loading ? <div className='placeholder'/> : null}
        <img style={loading ? {display: 'none'} : {}} src={this.props.src} onLoad={this.handleOnLoadEvent} onError={this.handleError}/>
      </div>
    );
  }
}
