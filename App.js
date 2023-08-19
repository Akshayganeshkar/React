// Create h1 tag 
const heading = React.createElement("h1",{id:"heading1"},"Jay Ganesh from React...!");

console.log(heading)    // React creates heading as an javascript object

// Tell React to link html root as its own root
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

// Render h1 tag into root
// Render method is responsible to convert object into actual h1 tag that browser DOM understands
Reactroot.render(heading);    


