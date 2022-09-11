import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6
  }

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number
  }

constructor() {
  super();
  this.state = {
    articles: [],
    loading: false,
    page: 1
  }
}

async updateNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41f60b945971460fbdce6ff34a662a67&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
}

async componentDidMount() {
  this.updateNews();
}

handlePrevClick = async () =>{
  this.setState({page: this.state.page - 1});
  this.updateNews();
}

handleNextClick = async () =>{
  this.setState({page: this.state.page + 1});
  this.updateNews();
}

  render() {
    return (
      <div className='container'>
      <h1 className='container text-center m-2'>NewsMonkey - Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className="container row">
        {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
      })}
      </div>
      <div className='container d-flex justify-content-between m-3'>
        <button disabled={this.state.page<=1} onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next</button>
      </div>
      </div>
    )
  }
}

export default News

