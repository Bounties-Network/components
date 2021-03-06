import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Sidebar } from 'components';

storiesOf('Sidebar', module).add('Sidebar', () => (
  <Sidebar defaultActiveTab="dashboard">
    <Sidebar.TabGroup>
      <Sidebar.TabIcon
        icon={['far', 'tachometer']}
        to="/dashboard"
        tabKey="dashboard"
        key={1}
      />
      <Sidebar.TabIcon
        icon={['far', 'list-alt']}
        to="/explorer"
        tabKey="explorer"
        key={2}
      />
      <Sidebar.TabIcon
        icon={['far', 'trophy-alt']}
        to="/leaderboard"
        tabKey="leaderboard"
        key={3}
      />
      <Sidebar.TabIcon
        icon={['far', 'user-alt']}
        to="/profile"
        tabKey="profile"
        key={4}
      />
    </Sidebar.TabGroup>
  </Sidebar>
));
