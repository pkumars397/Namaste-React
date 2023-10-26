const heading = React.createElement(
  "h1",
  {
    className: "class",
    id: "title",
    style: { color: "blue" },
  },
  "Namaste Everyone!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    className: "2",
    style: { backgroundColor: "yellow" },
  },
  "Heading 2"
);

console.log(heading); // Object.

const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
