import * as React from 'react';


import { SeasonDisplayProps } from './SeasonDisplayTypes'
export class SeasonDisplay
  extends React.Component<SeasonDisplayProps> {
  render() {
    const { lat, month } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            HI : {lat} {month}
          </div>
        </div>
      </div>
    );
  };
}