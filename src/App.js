import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import './App.css';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './components/ConnectionStatus';
import Publisher from './components/Publisher';
import PublisherCliente from './components/PublisherCliente';
import Subscriber from './components/Subscriber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <Router>

            <Route exact path="/components/Publisher" component={Publisher} />
            <Route exact path="/components/PublisherCliente" component={PublisherCliente} />
            <Route exact path="/components/Subscriber" component={Subscriber} />


      <OTSession
        apiKey={this.props.apiKey}
        sessionId={this.props.sessionId}
        token={this.props.token}
        eventHandlers={this.sessionEvents}
        onError={this.onError}
        >

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

        <ConnectionStatus connected={this.state.connected} />

        <Publisher />

        <PublisherCliente/>

        <OTStreams>
          <Subscriber />
        </OTStreams>

      </OTSession>

    </Router>
    );
  }
}

export default preloadScript(App);
