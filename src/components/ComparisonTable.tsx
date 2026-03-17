export default function ComparisonTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3 px-4 text-left rounded-tl-[10px]">{headers[0]}</th>
            <th className="p-3 px-4 text-center">{headers[1]}</th>
            <th className="p-3 px-4 text-center rounded-tr-[10px]">{headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-warm" : "bg-white"}>
              <td className="py-[11px] px-4 font-medium text-text-primary">{row[0]}</td>
              <td className="py-[11px] px-4 text-center text-text-light">{row[1]}</td>
              <td className="py-[11px] px-4 text-center text-teal font-semibold">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
