import React, {Component} from 'react';
import './App.css';

import Fruits from './Fruits/Fruits';


class App extends Component{

state = {
  fruit : [
    { id:'0',name:"Apple"},
    { id:'1',name:"Banana"},
    { id:'2',name:"Mango"}
  ],
  condition : false
}

updateHandler = (event,id) => {

  const temp = [...this.state.fruit];
  
  for(var i=0;i<temp.length;i++)
  {
    if(temp[i].id===id)
    {
      var index=i;
    }
  }
  temp[index].name=event.target.value;
  
  
  this.setState({fruit:temp});

}

changeState = () => {
  var temp= this.state.condition
  this.setState({condition: !temp})
}

deleteHandler = (index) => {
  
  let temp= [...this.state.fruit]
  temp.splice(index,1)
  
  this.setState({fruit:temp})
  
}


  render(){

    let fruits = null;

    if(this.state.condition)
    {
      fruits=(
      <div>
          {this.state.fruit.map((fruit,index)=>
          {
            return <Fruits name={fruit.name}
                           delete={()=>this.deleteHandler(index)}
                           key={fruit.id}
                           changed={(event)=>{this.updateHandler(event,fruit.id)}}
                           />
          })}
      </div>
      );
    }
  return (
    <div className="App">
    <h1>Hello I am Learning React</h1>
    <p>Hello I am Learning React</p>

    { !this.state.condition ?
      <button className="btn btn-sm btn-success" onClick={this.changeState}>Show Data</button>
      :<button className="btn btn-sm btn-danger" onClick={this.changeState}>Hide Data</button>
    }
    
    
    {fruits}
    
    
    
    </div>
  );
}
}


export default App;

