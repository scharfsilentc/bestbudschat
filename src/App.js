import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {messages:[ {who: 'sofia', message:'hey!'}],
                  messages2:[]  }; 
  }

  //this displays the contents of messages by storying them in <li>
  displayLine(element,idx) {
    console.log('this is the element',element)
    return (
      <li>
        <span className="name">{element.who} </span>
        <span className="message">{element.message} </span>
      </li>
    )
    this.scrollDelete();
  }

  // componentWillMount = () => {
  //   this.userName = prompt("What's your name?");
  // }

  // this adds the message the user has inputted to a new object in the messages array
 addNewMessage = (event) => { 
  this.setState( (st) => {
    var temp = this.textInput.value;
    this.textInput.value = '';
    return {messages: st.messages.concat({who: 'you', message: temp})}
    }
  );  
   setTimeout(this.chantalBot, 1000);
   this.scrollDelete();
}

// this needs to display a new message from the bot every time the user submits a message
// 1. it needs an array of messages that it can use 2. it needs those messages to be displayed
// maybe it can push an object to the messages array 
// when x happens, push y or z or a//
//the first time chantalBot has been called i want it to produce 'hey'
  chantalBot = () => { 
    var chantalThoughts = ['im basically a starchitect',
    'sofia i made some lentils', 'im not a bot btw'];
    var i = Math.floor(Math.random()*3);
   
    this.state.messages.length < 3 ? this.setState((st) => {
      return {messages: st.messages.concat({who:'chantal', message: 'oh hi'})}
    }) : this.setState((st) => {
      return {messages: st.messages.concat({who:'chantal', message: chantalThoughts[i]})}
    });
    setTimeout(this.sofiaBot, 1000);
    this.scrollDelete();
  }

  sofiaBot = () => {
    var sofiaThoughts = ['thats really cool Chantal','im so hungry','im going to a Wikipedia editathon later!' ];
    var i = Math.floor(Math.random()*3);
    this.setState((st) => {
      return {messages: st.messages.concat({who:'sofia', message: sofiaThoughts[i]})}
    });
    this.scrollDelete();
  }

  anika
// when this.state.messages.length > 15 this.state.messages.shift()
  scrollDelete = () => {
    if (this.state.messages.length > 10) {
      this.state.messages.shift();
    }
  }


 
    
  render() {
    return (
      <div className="App">
          <div className="chat1">
            <h3>not-so-lonely-chat a</h3>
            <div className="banterBox">
              <ul>
              {this.state.messages.map((element, idx) => this.displayLine(element, idx))} 
              </ul>
              <div className="inputMessage">
                <input className ="inputArea" type = 'text' ref={(input) => {this.textInput = input; }} placeholder="put it here" />
                <button onClick={this.addNewMessage}>say it</button>
              </div>
            </div>
          </div>
          <div className="chat2">
            <h3>not-so-lonely-chat b</h3>
            <div className="banterBox">
              <ul>
              {this.state.messages.map((element, idx) => this.displayLine(element, idx))} 
              </ul>
              <div className="inputMessage">
                <input className ="inputArea" type = 'text' ref={(input) => {this.textInput = input; }} placeholder="put it here" />
                <button onClick={this.addNewMessage}>say it</button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
