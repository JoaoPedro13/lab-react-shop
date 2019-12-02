import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const message = this.props.message;
        const price = this.props.message.price.value;
        return (
          <div className='BagCard'>
            <p className='BagColors'>{message.colors} colors</p>
            <img src={message.image} className='BagCardImg' alt=''/>
            <div className='BagCardText'>
            <div>{message.name}</div>
            <div>{(price / 100).toFixed(2).toString()} {message.price.currency}</div>
            </div>
          </div>
        );
      }
    }

export default Card
