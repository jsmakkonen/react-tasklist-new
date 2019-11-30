import React, { Component } from 'react';
import TaskApp from './components/tasklistApp';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Tasklist app in React',
      subtitle: 'Footer - 2019'
    };
  }

 render() {
   return (
    <div>
      <Header title={this.state.title} />
        <div className="mt-5">
         <TaskApp />
      </div>
        <Footer subtitle={this.state.subtitle} />
    </div>
   );
 }
}
