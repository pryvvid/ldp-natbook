import React, { Component } from 'react';

import LdpList from './LdpList'
import QueryResult from './QueryResult';

export default class LdpInput extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      items: [],
      formattedItems: [],
    }
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleItemSubmit = (event) => {
    event.preventDefault();
    // const formattedItem = '(ldp="19-' + this.state.value + '")';
    
    this.setState({
      items: [...this.state.items, this.state.value],

    });
    // console.log('submit');
    // console.log(this.state.items);
    // console.log(this.state.formattedItems);
    this.setState({
      value: ''
    })
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   this.handleItemSubmit(event);
  // }

  handleItemChange = (value, index) => {
    console.log('handleItemChange');
    const newItemList = [...this.state.items];
    console.log(newItemList);
    newItemList[index] = value;
    this.setState({
      items: newItemList,
    })
  }

  makeQuery = (event) => {
    event.preventDefault();
    const formattedItems = this.state.items.map(
      item => `(ldp="19-${item}")`
    )
    this.setState({
      formattedItems: formattedItems
    })
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleItemSubmit}>
          <input className="inputNumber" 
            onChange={this.handleInputChange} 
            value={this.state.value} 
          />
        </form>
        <br />
        <br />  
        <button className="queryButton" onClick={this.makeQuery}>Make query</button>
        <br />
        <br />
        <LdpList items={this.state.items} changeItem={this.handleItemChange}/>
        <br />
        <br />
        <QueryResult queryText={this.state.formattedItems}/>  
      </>
    )
  }  
}