
  if(this.state.messages[messages.length].who === 'sofia') {
      this.setState( (st) => { 
        var temp = this.textInput.value;
        this.textInput.value = '';
        return {who: st.messages[messages.length+1] .message.concat(temp)}
      })
    }
    
  } else {this.setState( (st) => { 
    var temp = this.textInput.value;
    this.textInput.value = '';
    return {message: st.messages[1].message.concat(temp)}
    })

  }
}