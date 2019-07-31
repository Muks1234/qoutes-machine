import React,{Component} from 'react';
import './App.css';
import quotesList from './myquotes'
import colors from './colors'

class Machine extends Component{
    constructor(props){
      super(props)

      this.state = {
        quotes: quotesList,
        index: Math.floor(Math.random() * 5421),
        colors: colors,
        color_index: Math.floor(Math.random() * 12)
      }
      this.Randomiser = this.Randomiser.bind(this)
    }

    Randomiser(){
      this.setState({
        index: Math.floor(Math.random() * this.state.quotes.length),
        color_index: Math.floor(Math.random()*12)
      })
    }
  

    render(){

      const quoteTexts = this.state.quotes[this.state.index].quoteText
      const author = this.state.quotes[this.state.index].quoteAuthor
      const color = this.state.colors[this.state.color_index]

      console.log(quoteTexts.quoteText)

      return(
      <div id="container-div" style={{backgroundColor:color}}>
        <div>
        <div id="quote-box">
          <Text quotes = {quoteTexts} color={color}/>
          <br/>
          <Author author={author} color={color}/> 
          <br/>
          <div id="buttons-container">
          <div>
          <Tweet quoteTexts = {quoteTexts} color={color} author={author}/>
          <Tumblr color={color}/>
          </div>
          <Button Randomiser={this.Randomiser} color={color}/>
          </div>
        </div>
          <br/>
          <Byme/>
        </div>
      </div>
      );
    };
}

const Text = (props) => {
    return(<h2 id="text" style={{color:props.color}}><i className="fa fa-quote-left" id="my-left-quote"></i>{props.quotes}</h2>)
}

const Author = (props) => {
      return(<h4 id="author" style={{color:props.color}}>- {props.author}</h4>)
}

const Button = (props) => {
      return(<button id="new-quote" className="btn" onClick = {props.Randomiser} style={{color:"white", backgroundColor:props.color, borderColor: props.color}}>New quote</button>)
}

const Tweet = (props) => <a href={"https://twitter.com/intent/tweet?text=" + props.quoteTexts +' '+ props.author} style={{color:props.color}} target="_blank" rel="noopener noreferrer"  id="tweet-quote"><i className="fab fa-twitter-square"></i></a>
const Tumblr = (props) => <a href="https://www.tumblr.com" style={{color:props.color}}><i className="fab fa-tumblr-square" id="share-tumblr" style={{color:props.color}}></i></a>
const Byme = () => <h4 id="byme">by Mollelwa</h4>

export default Machine;
