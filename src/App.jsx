import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";
// import { Toaster } from "sonner";

// import for pages
import Home from "./pages/Home";
import MyReview from "./pages/MyReview";
import AddReviewForm from "./pages/AddReviewForm";
import EditReview from "./pages/EditReview";

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:id" element={<MyReview />} />
        <Route path="add" element={<AddReviewForm />} />
        <Route path="/n/:id" element={<EditReview />} />
      </Routes>
      {/* <Toaster position="top-right" theme="dark" /> */}
    </Router>
  );
}

export default App;
