import React from "react";
import HomeWrap from "../Wrappers/HomeWrap";
import { heroes } from "../fake_data/Heroes";
import SearchBox from "../components/SearchBox";
import { HeroCardList, FlippedCardList } from "../components/HeroCardList";
import ScrollBox from "../components/ScrollBox";

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
    console.log("clicked");
  };

  render() {
    const { heroes, searchField, flipped } = this.state;

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
        {!flipped ? (
          <HeroCardList
            onFlipped={this.handleClick}
            heroes={findHeroe.slice(0, 12)}
          />
        ) : (
          <FlippedCardList
            onFlipped={this.handleClick}
            heroes={findHeroe.slice(0, 12)}
          />
        )}
      </HomeWrap>
    );
  }
}
export default App;
