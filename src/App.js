import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./routes/MainPage";
import VotePage from "./routes/VotePage";
import RegisterPage from "./routes/RegisterPage";
import VoteHistoryPage from "./routes/VoteHistoryPage";
import FavouriteHistoryPage from "./routes/FavouriteHistoryPage";
import { getCookie } from "./utils/cookie";

function App() {
  const userId = getCookie("userId");

  return (
    <div className="app">
      {!userId ? (
        <RegisterPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/vote-history" element={<VoteHistoryPage />} />
            <Route
              path="/favourite-history"
              element={<FavouriteHistoryPage />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
