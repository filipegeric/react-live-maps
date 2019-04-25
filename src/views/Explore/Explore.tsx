import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class Explore extends Component<RouteComponentProps, any> {
  render() {
    return (
      <div>
        <h1>Explore</h1>
        <h2>{JSON.stringify(this.props.location.state)}</h2>
      </div>
    );
  }
}
