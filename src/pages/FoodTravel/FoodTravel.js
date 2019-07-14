import React from 'react';
import Oyster from './Oyster';

import './FoodTravel.css'

class FoodTravel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLinkSelected: false,
      currentView: null
    };

    this.pages = {
      oyster: Oyster
    }
  }

  handleClick = (view) => {
    this.setState({
      isLinkSelected: true,
      currentView: view
    })
  }

  render = () => {
    let { isLinkSelected, currentView } = this.state;
    const DynamicTag = this.pages[currentView];

    return (
      <div>
        {
          isLinkSelected &&
          <DynamicTag />
        }
        <section>
          <h2>Food</h2>
          <ul>
            <li>
              <button onClick={() => (this.handleClick('oyster'))}>Oysters</button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Travel</h2>
          <ul>
            <li onClick={this.handleClick}>
              <button>France</button>
            </li>
          </ul>
        </section>
  
  
      </div>
    );

  }
}

export default FoodTravel;