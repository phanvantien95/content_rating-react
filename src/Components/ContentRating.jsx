
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings:0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      }
    };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi molestias perferendis, quo quis eligendi quidem tempora impedit nemo aperiam? Maxime expedita corrupti voluptates quibusdam! Vero dolore natus nostrum doloremque.</p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <div class='total-ratings'>
             Total Ratings <span>{this.state.totalRatings}</span>
          </div>
        </div>
     </div>
     </>
    );
  }
}


export default ContentRating;
