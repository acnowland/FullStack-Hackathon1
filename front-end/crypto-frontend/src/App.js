import { Component } from "react";
import "./App.css";
import CryptoList from "./components/CryptoList";

class App extends Component {
  state = {
    crypto: [],
  };

  componentDidMount = () => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then(({data}) =>
        this.setState({
          crypto: data
        })
      );
  };

  render() {
    return (
      <div className="App">
        <div className="lasvegas">
          CryptoCaravan
        </div>
        <CryptoList cryptos={this.state.crypto} />
      </div>
    );
  }
}

export default App;
