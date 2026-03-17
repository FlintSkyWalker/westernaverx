export default function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center px-4 py-6 flex-1 min-w-[140px]">
      <div className="text-4xl font-bold text-teal font-serif mb-1.5">{num}</div>
      <div className="text-[13px] text-text-light font-medium">{label}</div>
    </div>
  );
}
