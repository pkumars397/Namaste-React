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
* Tree Shaking- removing un-wanted code.(suppose we have library which has 10 helper functions,and only we need 2 of them.so it will remove unwanted functions.)
When we are building our production app,we need minification ,cleaning code for that we need help of dependencies. 
Chain of dependencies. (React + Parcel uses dependency which further uses others dependencies called TD)
*
*Transitive Dependencies(our package manager which uses dependencies called as Transitive Dependencies)
! bable plugin transform remove console.(removes the console.log)
*/
// import React from "react";
// import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";

// console.log(heading); //* Object. React.createElement gives object => HTML(DOM)

// const container = React.createElement(
//   "div",
//   {
//     className: "container",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         className: "class",
//         id: "title",
//         key: "h1",
//         // style: { color: "blue" },
//       },
//       "Namaste Everyone!"
//     ),
//     React.createElement("ul", {}, [
//       React.createElement("li", {}, "About Us"),
//       React.createElement("li", {}, "About Us"),
//     ]),
//   ]
// );

// const container = ce("div", {}, "Hello");

// ! Its complex and painful to complex createElement .

// * JSX ?? (It is html like syntax code ,but it is not html)

//* React.createElement gives object => HTML(DOM) ,Babel understands the jsx and convert into React.createElement .
// * JSX do santitazation

//  * React Component
// * Functional Component - New(Now using)
// * Class Based Component - Old (Useful for interview)

const container = (
  <div className="hello">
    <h1>Hello</h1>
  </div>
);

const Title = () => <h1>Title of the page</h1>;

// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1>Namaste React functional component</h1>
//       <h2>This is h2 heading</h2>
//     </div>
//   );
// };

// ? Using a component inside a component is called component compostion.

const HeaderComponent = () => (
  <div>
    {console.log("any Js code here")}
    {/* <Title /> */}
    {Title()}
    {container}
    <h1>Namaste React functional component</h1>
    <h2>This is h2 heading</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
