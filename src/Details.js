import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundry from './ErrorBoundry';
class Details extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        loading: false,
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        description: animal.description,
        media: animal.photos,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
      });
    });
  }
  render() {
    const {
      loading,
      name,
      animal,
      breed,
      description,
      media,
      location,
    } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundry(props) {
  return (
    <ErrorBoundry>
      <Details {...props} />
    </ErrorBoundry>
  );
}
