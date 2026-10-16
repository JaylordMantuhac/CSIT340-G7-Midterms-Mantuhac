import Bio from "./Bio";
import StatCard from "./StatCard.jsx";

export default function Profile({
  name,
  username,
  followers,
  rate,
  onFollow,
  onAddRate,
  onReset,
}) {
  return (
    <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
      <div>
        <Bio name={name} username={username} />
        <div className="mt-6 flex gap-6">
          <StatCard value={followers} label="Followers" />
          <StatCard value={rate} label="PHP per hour" />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
          onClick={onFollow}
        >
          Follow
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
          onClick={onAddRate}
        >
          Add rate
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}