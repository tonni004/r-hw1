import React from 'react';
import ReactDOM from 'react-dom/client';

import 'modern-normalize/modern-normalize.css';
import './index.css';

// components
import Container from 'components/Container/Container';
import Profile from 'components/social-profile/Profile';
import StatisticsList from 'components/statistics/StatisticsList';
import FriendsList from 'components/friends-list/FriendsList';
import TransactionHistory from 'components/transaction-history/TransactionHistory';

// json
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticsList title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>


  </React.StrictMode>
);
