import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends Component {
  constructor() {
    super();
    const url =
      'https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide';
    this.state = {
      users: [],
      searchField: '',
      monsters: [
        { name: 'Werewolf', img: `${url}/monster-werewolf-photo-1184@2x.jpg` },
        { name: 'Dybbuk', img: `${url}/dybbuk-illustration-1571@2x.jpg` },
        {
          name: 'Tommy-knocker',
          img: `${url}/monster-tommy-photo-1198@2x.jpg`,
        },
        {
          name: 'Sasquatch',
          img: `${url}/monster-sasquatch-photo-1199@2x.jpg`,
        },
        { name: 'Nix', img: `${url}/monster-nix-photo-1200@2x.jpg` },
        { name: 'Windigo', img: `${url}/monster-photo-windigo-1378@2x.jpg` },
        {
          name: 'Cerberus',
          img: `${url}/monster-photo-cerber-sign-1367@2x.jpg`,
        },
        { name: 'Wyvern', img: `${url}/monster-photo-wyvern-1366@2x.jpg` },
        { name: 'Zombie', img: `${url}/monster-photo-zombie-1389@2x.jpg` },
        { name: 'Kraken', img: `${url}/monster-photo-kraken-1388@2x.jpg` },
      ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Type Zombie' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

        {/* {this.state.users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
