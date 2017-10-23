import React, { Component } from 'react';
import './App.css';

class Chatbox extends Component {
  constructor (props) {
    super(props);
    this.firstBotName = this.props.firstBotName;
    this.secondBotName = this.props.secondBotName;
    this.firstBotThoughts = this.props.firstBotThoughts;
    this.secondBotThoughts = this.props.secondBotThoughts;
    this.state = {messages:[] }; 
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

  componentWillMount = () => {
    this.firstBot();
    // this.userName = prompt("What's your name?");
  }
  
  // this adds the message the user has inputted to a new object in the messages array
 addNewMessage = (event) => { 
    this.setState( (st) => {
      var temp = this.textInput.value;
      this.textInput.value = '';
      return {messages: st.messages.concat({who: 'you', message: temp})}
        }
      );  

      setTimeout(this.secondBot, 1000);
      this.scrollDelete();
  }

  firstBot = () => {
    //set variables
    var i = Math.floor(Math.random()*3);
    var msg;
    if(this.state.messages.length >= 2 ){
      msg = this.firstBotThoughts[i];
    } else {
      msg = 'hey!'
    }

    //talk
    this.setState((st) => {
      return {messages: st.messages.concat({who: this.firstBotName, message: msg})}
    });
    
    //activate other functions
    this.scrollDelete();
  
  }
  secondBot = () => { 
    //set variables
    var i = Math.floor(Math.random()*3);
    var msg;
      if(this.state.messages.length >= 3 ){
        msg = this.secondBotThoughts[i];
      } else {
        msg = 'oh hi'
      }

    //talk
    this.setState((st) => {
      return {messages: st.messages.concat({who: this.secondBotName, message: msg})}
      })
  
      // activate other functions
    setTimeout(this.firstBot, 1000);
    this.scrollDelete();
  }


  scrollDelete = () => {
    if (this.state.messages.length > 10) {
      this.state.messages.shift();
    }
  }
    
  render() {
    return (
      <div className="App">
          <div className="chat1">
            <h3 onClick={this.switchChat} >{this.props.title}</h3>
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

class App extends Component { 
  constructor() {
    super()
    this.firstBotThoughts = [`thats really cool chantal`,`im so hungry`,
                              `im going to a Wikipedia editathon later!`];
    this.secondBotThoughts = [`im basically a starchitect`,`sofia i made some lentils`, `im not a bot btw`];
    this.thirdBotThoughts = [`omg did you see that puppy`, `so many amazing natural wines`, `come to my art opening!` ];
    this.fourthBotThoughts = [`so snug`, `i miss chez boris`, `oh you know, doing adult stuff`];
    this.state = {chatbox: 'chat1'}
  }

  switchChat = (chatId) => {
    this.setState({chatbox: chatId}) 
  }

  render() {
    return (
      <div>
        <button onClick={() => this.switchChat('chat1')}>chat 1</button>
       {this.state.chatbox === 'chat1' && 
          <Chatbox
            title="not-so-lonely-chat a" 
            firstBotName="sofia" firstBotThoughts={this.firstBotThoughts} 
            secondBotName="chantal" secondBotThoughts={this.secondBotThoughts}
          />
        }
        {this.state.chatbox === 'chat2' && 
          <Chatbox 
            title="not-so-lonely-chat b" 
            firstBotName="anika" firstBotThoughts={this.thirdBotThoughts}
            secondBotName="victoria" secondBotThoughts={this.fourthBotThoughts} 
          />
        }
                <button onClick={() => this.switchChat('chat2')}>chat 2</button>
        
      </div>
    )

  }
}

export default App;
