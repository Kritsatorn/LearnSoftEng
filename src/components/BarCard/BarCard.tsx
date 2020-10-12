import * as React from 'react';
import { BarCardProps } from './BarCardTypes';
import './BarCard.css'

export class BarCard
  extends React.Component<BarCardProps> {

  render() {
    const { cardName } = this.props;
    return (
      <div className="box">
        <div className="box1st">
          <div className="textInBox1st">
            {cardName}
          </div>
        </div>
        <div className="box2nd">
          <div className="textInBox2nd">
            {cardName}
          </div>
        </div>
      </div>
    )
  }
}