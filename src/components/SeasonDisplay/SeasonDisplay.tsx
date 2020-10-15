import * as React from 'react';
import { Card, Button } from "semantic-ui-react";

import { SeasonDisplayProps } from './SeasonDisplayTypes'
export class SeasonDisplay
  extends React.Component<SeasonDisplayProps> {
  render() {
    const { lat, month } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <Card
              className="card blue-grey darken-1"
            >
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                  lat : {lat} <br />
                  month : {month}
              </div>
            </Card>
          </div>
        </div>
        <Button> Click Me </Button>
      </div>
    );
  };
}