import Bio from "./Bio";
import StatCard from "./StatCard";
import Controls from "./Controls";
import Hire from "./Hire";

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
    <div className="bg-[#F5E7C6] px-20 py-10">
      <div className="flex items-end justify-between">
        <div>
          <Bio name={name} username={username} />
          <div className="mt-6 flex gap-6">
            <StatCard value={followers} label="Followers" />
            <StatCard value={rate} label="PHP per hour" />
          </div>
        </div>

        <Controls
          onFollow={onFollow}
          onAddRate={onAddRate}
          onReset={onReset}
        />
      </div>

      <Hire rate={rate} />
    </div>
  );
}