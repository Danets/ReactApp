import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Person from './components/Person';
import Nav from './components/Nav';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      forma: false,
      persons: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Dilan' }
      ]
    };
    //this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (e) => {
    e.preventDefault();
    //const persons = [...this.state.persons, {id: Math.random(), name: this.state.value}];
    //this.setState({persons: persons})
    this.setState({ persons: this.state.persons.concat({ id: Math.random(), name: this.state.value }) })
    this.setState({value: ''})
  }
  onChange = (e) => {
    let val = e.target.value
    this.setState({ value: val })
  }
  onHandler = () => {
    const doesShow = this.state.forma;
    this.setState({ forma: !doesShow });
  }
  onDelete = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({ persons: persons });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App"
      style={{
        display: 'flex',
        flexFlow: 'column',
        width: '50%',
        margin: '0 auto',
        textAlign: 'center'}}
      >
        <Nav />
        <h1>Hello everyone!</h1>
        <Form name='Send' value={this.state.value} click={this.onSubmit} change={this.onChange} />
        <Card forma={this.state.forma} click={this.onHandler} />
        {this.state.forma === true ?
          <UserList />
          : null
        }
        {this.state.persons.map((person, id) => {
          return <Person key={person.id} name={person.name} click={() => this.onDelete(id)} />
        })}
      </div>
    );
  }
}

export default App;
