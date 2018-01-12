import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import EachImage from "../Images";
import images from "../../images.json";

class Maindiv extends Component {
  state = {
    images,
    scoreCount: 0
  };

  shuffleImages = (images) => images.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);

  clickTrue = id => {
    const images = this.state.images.filter(image => image.id !== id);
    if (images.clicked === true) {
      alert("You already clicked that, start over!");
    }
    else {
      this.setState({ clicked: this.state.images.clicked = true });
      this.setState({ count: this.state.scoreCount + 1 });
      this.setState({ images: this.shuffleImages(images) });
    }
    // const displayImage = (imageDisplay) => imageDisplay.forEach();

    console.log(this.state.images.clicked);
    console.log(this.state.images.scoreCount);

  };
  render() {
    return (
      <div>
<Container>
  <Grid columns={4} divided>
    <Grid.Row>
      <Grid.Column>
      {this.state.images.map(image => (
        <EachImage
        clickTrue={this.clickTrue}
        clicked={image.clicked}
        key={image.id}   
        id={this.id}
        alt={image.alt}
        src={image.src}
        />
        ))
      }
        </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </div>
    );
  }
}
export default Maindiv;
