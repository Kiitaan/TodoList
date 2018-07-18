import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: "TODO APP",
      act: 0,
      index: ``,
      datas: [],
    }
  }

  componentDidMount(){
    this.refs.todo.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();

    let datas = this.state.datas;
    let todo = this.refs.todo.value;

    if(this.state.act === 0){
      datas.push(todo);
    }else{
      let index = this.state.index;
      datas[index] = todo;
    }


    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.todo.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.todo.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.todo.value = data;

    this.setState({
      act: 1,
      index: i 
    })

    this.refs.todo.focus();
  }

  render() {
    let datas = this.state.datas
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
                <input type="text" ref="todo" placeholder="to do" className="formField" />
                <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
            </form>
        <pre>
          {datas.map((data, i)=>
            <li key={i} className="myList">
                {i+1}. {data}
                <button onClick={(e)=>this.fRemove(i)} className="myListButton">Delete</button>
                <button onClick={(e)=>this.fEdit(i)} className="myListButton">Edit</button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;
