/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/about">Projects</Link>
        <Link className={s.link} to="/skills">Skills</Link>
        <Link className={s.link} to="/contacts">Contacts</Link>
        <Link className={s.link} to="/carrier">Carrier way</Link>
        <Link className={s.link} to="/notes">My notes</Link>
        <Link className={s.link} to="/calendar">Calendar</Link>
      </div>
    );
  }

}

export default withStyles(Navigation, s);
