import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { shallow } from 'enzyme';

import Routes from '..';
import Home from '../../pages/Home';

// interface PathProps { path: string }

let pathMap: { [path: string]: string } = {};

describe('Routes using array of routes', () => {
  beforeAll(() => {
    const component = shallow(<Routes />);

    pathMap = component.find(Route).reduce((pathMap: any, route) => {
      const routeProps: RouteProps = route.props();
      const { path } = routeProps;
      if (typeof path === 'string') {
        pathMap[path] = routeProps.component;
      }
      return pathMap;
    }, {});
  });
  it('should show Home component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(Home);
  });
});
