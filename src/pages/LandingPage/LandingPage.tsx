import * as React from 'react';
import { LandingPageTypes } from './LandingPageTypes'
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
        {this.state.text}
      </div>
    )
  }
}