import React, { Component } from 'react';
import './index.css';
import AppHeader from './AppHeader/AppHeader';
import Main from './Main/Main';



export default class App extends Component {
  startId = 1;

  state = {
    renderCompleted: false,
    renderActive: false,
    todoData:[
      this.createTaskItem('Drink coffee'),
      this.createTaskItem('Drink beer'),
      this.createTaskItem('Have a dinner'),
    ]
   };


   createTaskItem(task) {
    const date = Date.now();
    return {
      task,
      isCompleted: false,
      date: date,
      id: this.startId++,
    }
   }

   renderAll = () => {
    this.setState(({renderCompleted, renderActive}) => {
      return {
        renderCompleted: false,
        renderActive: false}
    })
   }

   onCompletedFiltration = () => {
     this.setState(({renderCompleted, renderActive}) => {
       return {
          renderCompleted: true,
          renderActive: false
      }
     })
   }

   onActiveFiltration = () => {
    this.setState(({renderCompleted, renderActive}) => {
      return {
        renderCompleted: false,
        renderActive: true
    }
    })
  }

   deleteItem = (id) => {
     this.setState(({todoData}) => {
      let copy = [...todoData];
      const idx = copy.findIndex((item) => item.id === id);
      return {
        todoData : [...copy.slice(0, idx),...copy.slice(idx + 1)]
      };
     })
   }

   addItem = (task) => {
    const newItem =  this.createTaskItem(task);
    this.setState(({todoData}) => {
      const newData =  [...todoData, newItem]
      return {
        todoData: newData,
      }
    })
   }

   onToggleComplete = (id) => {
    this.setState(({todoData}) => {
      let copy = [...todoData]
      const idx = copy.findIndex((item) => item.id === id);
      const oldItem = copy[idx];
      const newItem = {...oldItem,  isCompleted: !oldItem.isCompleted};
      return {
        todoData : [...copy.slice(0, idx), newItem, ...copy.slice(idx + 1)]
      };
    })
   }




  render() {
    const {todoData, renderCompleted, renderActive} = this.state;
    return (
      <section className = "todoapp">
      <AppHeader onAdd = {this.addItem}/>
      <Main
        todos = {todoData}
        onDelete = {this.deleteItem}
        onToggleComplete = {this.onToggleComplete}
        renderCompleted = {renderCompleted}
        renderActive = {renderActive}
        onCompletedFiltration = {this.onCompletedFiltration}
        onActiveFiltration = {this.onActiveFiltration}
        renderAll = {this.renderAll}
      />
    </section>
    );
  }
}

