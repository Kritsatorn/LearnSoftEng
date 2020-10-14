import * as React from 'react';
import { NavBarLandingPageProps } from './NavBarLandingPageTypes';
// import 'NavBarLandingPage.css';

export class NavBarLandingPage
  extends React.Component<NavBarLandingPageProps> {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="sidenav-trigger" > <i className="material-icons">menu</i>  </a>
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">

        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>

    );
  }
}