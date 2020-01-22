import React, { Component } from 'react';

class LdpList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('---shouldComponentUpdate---');
  //   console.log('nextProps', nextProps);
  //   console.log('thisProps', this.props);
  //   console.log('nextState', nextState);
  //   console.log('thisState', this.state);
  //   console.log(JSON.stringify(nextProps) === JSON.stringify(this.props));
  //   console.log(JSON.stringify(nextState) === JSON.stringify(this.state));
  //   if (JSON.stringify(nextProps) === JSON.stringify(this.props)) return false;
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('---componentDidUpdate---');
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  //   console.log('Item', this.props.item);
  //   this.setState({
  //     items: [...this.state.items, this.props.item]
  //   });
  // }

  handleInputChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.getAttribute('data-index'));

    const value = event.target.value;
    const index = event.target.getAttribute('data-index');
    this.props.changeItem(value, index);

  } 

  render() {
    // const { items } = this.state;
            //items.map( item => <li key={item}>{item}</li> )

    return (
      <div className="item-list-wrapper">
        <ol className ="item-list">
          { 
            (this.props.items.length ? (
              this.props.items.map( (item, index) => <li className='ldp-item' key={index}>	<input className="ldp-item__input" data-index={index} value={item} onChange={this.handleInputChange}/></li> )
            ) : (
              <p>No items</p>
            ))  
          }
        </ol>
      </div>
    )
  }
}

export default LdpList;