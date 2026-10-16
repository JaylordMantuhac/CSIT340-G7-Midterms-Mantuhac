import RepoCard from "./RepoCard";

export default function Repositories({
  portfolioStars,
  todoStars,
  dotfilesStars,
  onStarPortfolio,
  onStarTodo,
  onStarDotfiles,
}) {
  const repos = [
    {
      name: "portfolio",
      description: "My personal page built with React.",
      language: "JavaScript",
      commits: 48,
      stars: portfolioStars,
      onStar: onStarPortfolio,
    },
    {
      name: "todo-api",
      description: "A small REST API for a to-do list.",
      language: "Java",
      commits: 31,
      stars: todoStars,
      onStar: onStarTodo,
    },
    {
      name: "dotfiles",
      description: "My terminal and editor settings.",
      language: "Shell",
      commits: 12,
      stars: dotfilesStars,
      onStar: onStarDotfiles,
    },
  ];

  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      {repos.map((repo) => (
        <RepoCard
          key={repo.name}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          commits={repo.commits}
          stars={repo.stars}
          onStar={repo.onStar}
        />
      ))}
    </main>
  );
}