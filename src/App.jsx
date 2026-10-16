import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile
        name="JaylordMantuhac"
        username="JaylordMantuhac"
        followers={followers}
        rate={rate}
        onFollow={handleFollow}
        onAddRate={handleAddRate}
        onReset={handleReset}
      />
      <Repositories
        portfolioStars={portfolioStars}
        todoStars={todoStars}
        dotfilesStars={dotfilesStars}
        onStarPortfolio={handleStarPortfolio}
        onStarTodo={handleStarTodo}
        onStarDotfiles={handleStarDotfiles}
      />
      <Footer />
    </div>
  );
}

export default App;