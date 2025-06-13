import InlineWidget from "@calcom/embed-react";

export default function Cal() {
  return (
    <div className="mt-20 p-10 bg-white rounded-3xl">
      <h2 className="text-3xl font-bold mb-6">Book a Call</h2>
      <InlineWidget
        calLink="devnuel/30min"
        style={{ height: "600px", width: "100%" }}
      />
    </div>
  );
}
