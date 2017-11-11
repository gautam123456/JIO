import React, {Component} from 'react';
import ItemList from './ItemList';
import fetchData from "../util/fetchData";
import Loading from "./Loading";

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
    fetchData().then((data) => {
      this.setState({data});
    })
  }

  render() {
    const data = this.state;

    return (
      <div className='container'>
        {data.data ? <ItemList data={data.data}/> : <Loading />}
      </div>
    )
  }
}

