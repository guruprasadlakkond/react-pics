import React from "react";
import SearchBar from "./components/SearchBar";
import * as httpClient from "./services/unsplash";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async searchTerm => {
    console.log(searchTerm);
    const r = await httpClient.getImages(searchTerm);
    this.setState({ images: r });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
