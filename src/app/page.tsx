import FontShowcase from "@/components/_tests_ui_design_system/font-showcase";
import Intro from "@/components/pages/homepage/Intro";

export default function page() {
  return (
    <div className="!bg-body">
      <Intro />
      <FontShowcase />
    </div>
  );
}
