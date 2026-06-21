import InfoBadge from "./InfoBadge.jsx";

const confidenceTone = {
  High: "green",
  Medium: "amber",
  Low: "amber",
  Unknown: "default",
};

export default function ConfidenceLevelBadge({ level, label = "Confidence" }) {
  const value = level === "High" || level === "Medium" || level === "Low" ? `${level} Confidence` : level;
  return <InfoBadge label={label} value={value} tone={confidenceTone[level] || "default"} />;
}
