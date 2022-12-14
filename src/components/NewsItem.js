import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url, author, date} = this.props;
    return (
      <div className="container m-3">
        <div className="card" style={{width: "18rem"}}>
             <img src={imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{description}</p>
             <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%'}}>{author}</span>
             <p className="card-text"><small className="text-muted">By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
             <a href={url} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
           </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
