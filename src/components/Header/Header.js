/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import cx from 'classnames';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <header className={s.root}>
        <div className={s.first}>
          <Link className={s.brand} to="/">
            <img src={require('./logo.svg')} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>cdjs</span>
          </Link>
        </div>
          <div className={s.second}>
              <Navigation className={s.nav} />
          </div>
        <div className={s.third}>
          <Link className={cx(s.brand, s.data)} to="/">
              <div className={s.self}>
                  <span className={s.name}>Oxana Doroshenko</span>
                  <span className={s.whoami}>Frontend-developer</span>
              </div>
              <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
          </Link>
        </div>

      </header>
    );
  }

}

export default withStyles(Header, s);
