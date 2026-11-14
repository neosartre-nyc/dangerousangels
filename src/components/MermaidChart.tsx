// components/MermaidChart.tsx
export default function MermaidChart({ children }: { children: string }) {
  return (
    <div className="w-full overflow-x-auto !p-0">
      <div data-testid="mermaid-chart" className="inline-block">
        {children}
      </div>
    </div>
  );
}
