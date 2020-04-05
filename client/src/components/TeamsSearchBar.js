import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TeamsSearchBar extends React.Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  state = { pokemon: "", date: "" };

  componentDidMount() {
    var basePokemonURL = window.location.href;
    basePokemonURL = basePokemonURL.substring(0, basePokemonURL.indexOf("="));
    var urlParams = new URLSearchParams(window.location.href);
    var queryParam = urlParams.get(basePokemonURL);
    queryParam = queryParam ? queryParam : "";
    this.setState({
      pokemon: queryParam,
      date: ""
    });
  }

  onInputChange = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.pokemon, this.state.date);
  };

  clearInputs = () => {
    this.setState({
      pokemon: "",
      date: ""
    });
  };

  render() {
    return (
      <div className="md-form active-pink active-pink-2 mb-3 mt-0">
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <i>
                By Pokémon (
                <a
                  href="https://dex.pokemonshowdown.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokédex
                </a>
                )
              </i>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ex. Pikachu"
                aria-label="Search"
                name="pokemon"
                value={this.state.pokemon}
                onChange={this.onInputChange}
              ></input>
            </label>
            <label className="ml-2">
              <i>By Date (YYYY-MM-DD)</i>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ex. 2020-03-04"
                aria-label="Search"
                name="date"
                value={this.state.date}
                onChange={this.onInputChange}
              ></input>
            </label>
          </div>
          <div>
            <button
              className="btn btn-rounded btn-primary btn-sm"
              type="submit"
            >
              Search <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              className="btn btn-rounded btn-secondary btn-sm ml-2"
              onClick={this.clearInputs}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TeamsSearchBar;
