import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, //coerce string to number , why cant put 0 + event, to coerce it?.. picture wont load then?
    });
  };

  render() {
    const { active } = this.state; //mutable, can change [pic that display & can change once user click other pic]
    const { images } = this.props; //read only, only parent can change props [all pic from API]

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            //for accessibility
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick.bind(this)}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
