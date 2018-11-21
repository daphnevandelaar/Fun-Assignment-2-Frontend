import React, { Component } from 'react'

class Postform extends Component {

constructor(props){
    super(props);
    this.state = {
        body: " ",
        title: " "
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
    this.setState({[e.target.name]: e.target.value});
}

onSubmit(e){
    e.preventDefault();
    const post = {
        title: this.state.title,
        body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
}
  render() {
    return (
      <div>
        <h1>Add a post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <hr/>
                <input 
                    type="text"
                    name="title" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>

                <textarea 
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                />

                <input type="submit"/>
                <hr/>
            </div>
        </form>
      </div>
    )
  }
}

// rcc + tab component
// rfc + tab function 

export default Postform;