const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam h1 tage"),
    React.createElement("h2", {}, "iam h2 tage"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam h1 tage"),
    React.createElement("h2", {}, "iam h2 tage"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
