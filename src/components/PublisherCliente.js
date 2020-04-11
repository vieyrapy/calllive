import React from 'react';
import Button from 'react-bootstrap/Button';
//import { OTPublisher } from 'opentok-react';
//import CheckBox from './CheckBox';

class PublisherCliente extends React.Component {
  constructor(props) {
      super(props)
      this.clickAgregar = this.clickAgregar.bind(this)
    }

    clickAgregar(){
      console.log('boton agregar');
      this.setState({new:true});
    }

  render() {
    return (
      <div className="publisherCliente">
      Cliente

      <Button href="/Publisher" variant='primary' size='sm'>
        Link
      </Button>


        <Button variant='primary' block={true}>
          Primary
        </Button>


      </div>
    );
  }
}
export default PublisherCliente;
