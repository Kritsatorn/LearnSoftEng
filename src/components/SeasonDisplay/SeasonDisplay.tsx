import * as React from 'react';
import { SeasonDisplayProps } from './SeasonDisplayTypes'
export class SeasonDisplay
  extends React.Component<SeasonDisplayProps> {
  render() {
    const { lat, month } = this.props;
    return (
      <div>
        <div>
          lat : {lat} <br />
          month : {month}
        </div>
      </div>
    );
  };
}