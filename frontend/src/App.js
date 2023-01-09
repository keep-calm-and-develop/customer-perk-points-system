import './App.css';

import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import TopNavigationBar from './components/TopNavigationBar';
import CustomersScreen from './screens/CustomersScreen';
import NewCustomerScreen from './screens/NewCustomerScreen';
import NewTransactionScreen from './screens/NewTransactionScreen';
import RewardPointsScreen from './screens/RewardPointsScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <TopNavigationBar />
        <Routes>
          <Route path="/" element={<Navigate to={"/getRewardPoints"} replace />} />
          <Route path="/getRewardPoints" element={<RewardPointsScreen />} />
          <Route path="/customers" element={<CustomersScreen />} />
          <Route path="/new-customer" element={<NewCustomerScreen />} />
          <Route path="/:customerID/new-transaction" element={<NewTransactionScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
