import { useState } from "react";

export default function Hire({ rate }) {
  const [hours, setHours] = useState(0);

  function handleAddHour() {
    setHours(hours + 1);
  }

  function handleClear() {
    setHours(0);
  }

  const total = hours * rate;

  return (
    <div className="mt-6 flex items-center justify-between rounded-xl border-2 border-[#222222] bg-[#FAF3E1] p-6">
      <div>
        <p className="text-xl font-bold">Hours: {hours}</p>
        <p className="text-2xl font-bold text-[#FA8112]">
          Total: PHP {total}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#FA8112] px-6 py-2 text-lg font-bold text-[#222222]"
          onClick={handleAddHour}
        >
          Add hour
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-6 py-2 text-lg font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}