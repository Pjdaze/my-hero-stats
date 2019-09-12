import React from "react";
import HomeWrap from "../Wrappers/HomeWrap";
import SearchBox from "../components/SearchBox";
import { HeroCardList } from "../components/HeroCardList";
import HeroCard from "../components/HeroCard";
import FlippedCard from "../components/FlippedCard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      searchField: "",
      flipped: false
    };
  }
  componentDidMount() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(data => data.json())
      .then(res => {
        this.setState({ heroes: res });

        console.log("This is the data form the Heroes API: ", res);
      });
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped
    });
    console.log("click");
  };

  render() {
    const { heroes, searchField } = this.state;

    const findHeroe = heroes.filter(x =>
      x.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HomeWrap className="home">
        <header style={{ height: "100px" }}>
          {" "}
          <h1>Find Your Hero</h1>
        </header>
        <SearchBox searchChange={this.onSearchChange} />
        <HeroCardList
          onFlip={this.handleClick}
          heroes={findHeroe.slice(0, 12)}
        ></HeroCardList>
      </HomeWrap>
    );
  }
}
export default App;
