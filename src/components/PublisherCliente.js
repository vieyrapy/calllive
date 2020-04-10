import React from 'react';
//import { OTPublisher } from 'opentok-react';
//import CheckBox from './CheckBox';

class PublisherCliente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'camera'
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return (
      <div className="publisherCliente">
      Cliente

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

       <button variant="outlined" color="primary" >Llamar</button>



      </div>
    );
  }
}
export default PublisherCliente;
