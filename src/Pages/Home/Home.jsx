// import { useState } from "react";

// const people = [
//   { name: "Alice", age: 30, occupation: "Engineer" },
//   { name: "Bob", age: 25, occupation: "Designer" },
//   { name: "Charlie", age: 35, occupation: "Manager" },
//   { name: "Diana", age: 40, occupation: "CEO" },
// ];

// const Home = () => {
//   const [activeItem, setActiveItem] = useState("");
//   console.log(activeItem)

//   return (
//     <>
//       <ul>
//         {people.map((item, index) => {
//           return (
//             <li
//               key={index}
//               onClick={() => {
//                 return index === index && setActiveItem(item.name);
//               }}
//               className={item.name === activeItem ? "active" : ""}
//             >
//               {item.name}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Home;
