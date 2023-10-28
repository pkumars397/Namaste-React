/* 
! HMR: Hot Module Reloading(Parcel made a server for us and act as live server);
? File Watcher Algorithm- Written in C++;
! Bundling
! MINIFY 
! clearing our code

* Parcel is Beast .(can take care of devlopment minify and production minify)

* Dev and production Build
* Super Fast build algorithm
* Image optimisation
* Caching while Devlopment
* Compression (compressing the variable names and all)
* Compatble with older versions of browser


* HTTPS on dev (npx parcel index.html --https)
* port Number Managing
* consistant Hashing ALgorithms for bundling.
* Zero Config
*
When we are building our production app,we need minification ,cleaning code for that we need help of dependencies. 
Chain of dependencies. (React + Parcel uses dependency which further uses others dependencies called TD)
*
*Transitive Dependencies(our package manager which uses dependencies called as Transitive Dependencies)

*/
import React from "react";
import ReactDOM from "react-dom/client";
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
