import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mycards: [
        {
          title:"The Alchemist",
          description:"Paulo Coelho's enchanting novel has inspired a devoted following around the world.",
          buttontext:"Ok"
        },
        {
          title:"The Great Gatsby",
          description:"The Great Gatsby is a 2013 historical romantic drama film based on F. Scott Fitzgerald's 1925 novel of the same name.",
          buttontext:"Ok"
        },
        {
          title:"Jane Eyre",
          description:"Jane Eyre is a novel by Charlotte Brontë that was first published in 1847.",
          buttontext:"Ok"
    
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Using Map</h1>
        <div className='card'>
        {this.state.mycards.map(item =>(
            <div className='cards'>
              <div className='cardheader'><h3> {item.title}</h3></div>
              <div className='cardbody'>{item.description}</div>
              <div className='cardFooter'><button>{item.buttontext}</button></div>
            </div>
            
          ))}
        </div>
      </div>
    );
  }
}

export default App;
