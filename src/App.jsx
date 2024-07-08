// ------------------------------------------------
// 1
import "./App.css";
function App() {
  return <div className="App">hello world</div>;
}

export default App;

// ------------------------------------------------
// 2
// import "./App.css";
// function App() {
//   return (
//     <>
//       <h3>Users:</h3>
//       <ul>
//         <li>jasem</li>
//         <li>salem</li>
//         <li>hasem</li>
//       </ul>
//     </>
//   );
// }

// export default App;
// ---------------------------------------------
// 3
// import "./App.css";
// function App() {
//   return (
//     <>
//       <a href="#">learn react</a>
//     </>
//   );
// }

// export default App;

// ----------------------------------------------------------------
// 4
// import { useEffect, useState } from "react";
// import "./App.css";
// // import axios from "axios";
// function App() {
//   const [data, setData] = useState([]);
//   console.log(data);
//   useEffect(() => {
//     const fetchData = async () => {
//       // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       {data.length ? (
//         <ul data-testid="user-list">
//           {data.map((item, index) => {
//             return <p key={index}>{item.username}</p>;
//           })}
//         </ul>
//       ) : (
//         <p>loading...</p>
//       )}
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------
// 5
// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [text, setText] = useState("hello world");

//   return (
//     <>
//       <h1>{text}</h1>
//       <button onClick={() => setText("bye worold")}>click</button>
//     </>
//   );
// }

// export default App;
