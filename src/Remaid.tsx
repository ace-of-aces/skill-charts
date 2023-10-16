import { useEffect, useRef, useState } from "react";
import mermaid, { MermaidConfig } from "mermaid";

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: false,
  theme: "default",
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: "linear",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
  },
};

interface RemaidProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  graph: string;
  config?: MermaidConfig;
  loading: React.ReactNode;
}

const Remaid = (props: RemaidProps) => {
  const [fetchedChart, setFetchedChart] = useState("");

  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchDiagram = async () => {
      const res = await fetch("/graphs/" + props.graph);
      const text = await res.text();
      setFetchedChart(text);
    };
    fetchDiagram();
  }, [props.graph]);

  useEffect(() => {
    async function render() {
      mermaid.initialize({ ...DEFAULT_CONFIG, ...props.config });
      const node = mermaidRef.current;
      if (node && fetchedChart.length > 0) {
        await mermaid.run({
          nodes: [node],
        });
      }
    }
    render();
  }, [props.config, props.id, fetchedChart]);

  useEffect(() => {
    if (props.graph && fetchedChart.length > 0) {
      mermaid.contentLoaded();
    }
  }, [props.graph, fetchedChart]);

  if (props.graph && fetchedChart.length === 0) {
    if (props.loading) return props.loading;
    return <div className={props.className}>Loading...</div>;
  }

  return (
    <div {...props} id={props.id} className={`mermaid ${props.className}`} ref={mermaidRef}>
      {fetchedChart}
    </div>
  );
};

export default Remaid;
