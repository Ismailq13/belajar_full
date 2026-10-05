import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Ringkasan from "./pages/Ringkasan.jsx";
import Program from "./pages/Program.jsx";
import Donatur from "./pages/Donatur.jsx";
import FollowUp from "./pages/FollowUp.jsx";
import Upload from "./pages/Upload.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Ringkasan />} />
        <Route path="/program" element={<Program />} />
        <Route path="/donatur" element={<Donatur />} />
        <Route path="/follow-up" element={<FollowUp />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<p>w</p>} />
      </Route>
    </Routes>
  );
}
export default App;
