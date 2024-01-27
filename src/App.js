import "./App.css";
import Sidebar from "./Components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AdjustBranch } from "./pages/BranchMgmt/AdjustBranch";
import { Accounts } from "./pages/BranchMgmt/Accounts";
import { Products } from "./pages/InventoryMgmt/Products";
import { Suppliers } from "./pages/InventoryMgmt/Suppliers";
import { GoodReceive } from "./pages/InventoryMgmt/GoodReceive";
import { StockBalance } from "./pages/InventoryMgmt/StockBalance";
import { StockTransfer } from "./pages/InventoryMgmt/StockTransfer";
import { StockReturn } from "./pages/InventoryMgmt/StockReturn";
import { CheckPrice } from "./pages/InventoryMgmt/CheckPrice";
import { WorkList } from "./pages/Billing/WorkList";
import { Sales } from "./pages/Billing/Sales";
import { WebMgmt } from "./pages/WebMgmt/WebMgmt";
import { Reporting } from "./pages/Reporting/Reporting";
import { OnlineOrders } from "./pages/OnlineOrders/OnlineOrders";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/adjust-branch"
          element={<AdjustBranch />}
        />
        <Route
          path="/accounts"
          element={<Accounts />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/suppliers"
          element={<Suppliers />}
        />
        <Route
          path="/good-receive"
          element={<GoodReceive />}
        />
        <Route
          path="/stock-balance"
          element={<StockBalance />}
        />
        <Route
          path="/stock-transfer"
          element={<StockTransfer />}
        />
        <Route
          path="/stock-return"
          element={<StockReturn />}
        />
        <Route
          path="/check-price"
          element={<CheckPrice />}
        />
        <Route
          path="/sales"
          element={<Sales />}
        />
        <Route
          path="/work-list"
          element={<WorkList />}
        />
        <Route
          path="/online-orders"
          element={<OnlineOrders />}
        />

        <Route
          path="/web-mgmt"
          element={<WebMgmt />}
        />
        <Route
          path="/reporting"
          element={<Reporting />}
        />
      </Routes>
    </Router>
  );
}

export default App;
