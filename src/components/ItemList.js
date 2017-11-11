import React, {Component} from 'react';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return <Item key={index} item={item} />
        })}
      </div>
    )
  }
}
