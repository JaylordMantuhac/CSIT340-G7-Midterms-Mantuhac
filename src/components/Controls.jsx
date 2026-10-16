export default function Controls({ onFollow, onAddRate, onReset }) {
  return (
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
  );
}