export default function ColoredLabel({ children }) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-1 overflow-hidden font-medium transition rounded-full py-1 px-3 bg-indigo-400/10 text-indigo-400 ring-1 ring-inset ring-indigo-400/20 transition-all hover:bg-indigo-400/10 hover:text-indigo-300 hover:ring-indigo-300 text-xxs`}
    >
      {children}
    </div>
  );
}
