import React, { Component } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react'

class Navbar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = { activeItem: 'CLICKGAME' }
  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column stretched width={12}>
          <Segment>
            <h1>Instructions</h1>
            <p>This is a memory game wherein you select images, that have not previously been chosen, in order to increase your score.
            If you select the same item twice, you lose and your score will be reset to "0".
            If you make it to "12", congratulations! You won!</p>
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
          <Menu fluid vertical tabular='right'>
          <Menu.Item name='CLICK GAME' active={activeItem === 'CLICKGAME'} onClick={this.handleItemClick} />
            <Menu.Item name='Instructions' active={activeItem === 'Instructions'} onClick={this.handleItemClick} />
            <Menu.Item name='Credits' active={activeItem === 'Credits'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Navbar;
