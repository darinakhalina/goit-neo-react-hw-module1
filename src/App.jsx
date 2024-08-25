import Profile from './components/Profile/Profile';
// import FriendList from "./components/FriendList";
// import TransactionHistory from "./components/TransactionHistory";

import userData from './data/userData.json';
// import friends from "./data/friends.json";
// import transactions from "./data/transactions.json";

import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/*  <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
}

export default App;
