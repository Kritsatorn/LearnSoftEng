import * as React from 'react';
import { LandingPageTypes } from './LandingPageTypes'
import { BarCard } from '../../components/BarCard/BarCard';
export class LandingPage
  extends React.Component<object, LandingPageTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      text: 'Hello'
    }
  }

  render() {
    return (
      <div>
        <BarCard
          cardName={this.state.text}
        />
      </div>
    )
  }
}