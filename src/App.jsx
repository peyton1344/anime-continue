import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AnimeDetail from "./pages/AnimeDetail.jsx";
import DataReview from "./pages/DataReview.jsx";
import DataValidation from "./pages/DataValidation.jsx";
import Home from "./pages/Home.jsx";
import Isekai from "./pages/Isekai.jsx";
import NeedsVerification from "./pages/NeedsVerification.jsx";
import RecentlyUpdated from "./pages/RecentlyUpdated.jsx";
import ResearchQueue from "./pages/ResearchQueue.jsx";
import Search from "./pages/Search.jsx";
import Watchlist from "./pages/Watchlist.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/isekai" element={<Isekai />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/recently-updated" element={<RecentlyUpdated />} />
        <Route path="/research-queue" element={<ResearchQueue />} />
        <Route path="/needs-verification" element={<NeedsVerification />} />
        <Route path="/data-review" element={<DataReview />} />
        <Route path="/data-validation" element={<DataValidation />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
