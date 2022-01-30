import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false }; //default state

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
    //intially we set this.state = loading:true, then once we fetch and load it, we going to override it to false

    //another way of writing this.setState after fetching data
    // this.setState({
    //   loading: false,
    //   name: json.pets[0].name,
    //   breed: json.pets[0].breed,
    //   animal: json.pets[0].animal,
    // });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    // throw new Error();
    if (this.state.loading) {
      return (
        <h2>
          .........................loading..................................
        </h2>
      ); //this is to telling user that the page is fetching data from back (if slow connection..)
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    // throw new Error("lol it broke"); //Error boundry need to be catch before it render all the details
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);
//Error Boundry
export default function DetailsWithErrorBoundry(props) {
  return (
    <ErrorBoundry>
      <DetailsWithRouter {...props} />
    </ErrorBoundry>
  );
}

//fetch API -> this.props.match.params.id
// this -> calling this component of we working, in this case the Details component
// prop -> prop that has been passed down from the parent
// match.params => coming from the React router -> in App.js we want to find -->> <Route path="/details/:id">
//withRouter(Details) will inject all the information into the route (HIgh order component)
//in App.js, we are wrapping it with <Router>, so it wont get all the details, but able to do so withRouter()
