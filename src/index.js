import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/41RfgMBiSUL._AC_SX184_.jpg",
    title: "Fall Again, Rise Again",
    author: "sunny sen",
  },
  {
    id: 2,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg",
    title: "Think Like a Monk",
    author: "jey shetty",
  },
  {
    id: 3,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/51QTTApN-XL._AC_SX184_.jpg",
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
  },
];

//
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // name could be anything eg banana props is convention
  //console.log(props);
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

// const Image = ()=>(
//   <img src="https://images-eu.ssl-images-amazon.com/images/I/41RfgMBiSUL._AC_SX184_.jpg" alt="h"/>
// );

//const Title = ()=> <h1>Fall Again, Rise Again</h1>;

//const Author = ()=> <h4 style = {{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>sunny sain</h4>;

//Only for reference to understand how internally jsx and various calls are internally made
// const Greeting = () =>{
//   //return React.createElement('h1',{},'hello worsld');
//   return React.createElement('div',{},React.createElement('h1',{},'helloo'));
// }

// Stateless functional component or dumn components
//This must return something even if it is empty html
// function Greeting(){
//   return (   // if () paranthesis is not used then return and html(jsx) should be on same line
//    // <React.Fragment>
//     <div>
//       <h3>hello</h3>
//       <ul>
//         <li>
//           <a href="#">world</a>
//         </li>
//       </ul>
//       <Person />
//       <Message />
//     </div>
//    //<div></div> // Not allowed as only one overall parent div is allowed. Both divs can be wrapped inside one parent div

//    //</React.Fragment>
//   )
// }

// const Person = ()=> <h2>uday</h2> ;

// const Message = ()=>{
//   return <p>This is a message</p>;
// }

//const names = ["jadu", "raju", "kalu"];   // this was used to understand mapping and wrapping string or objectsd into h1
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
