import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import { books } from "./books";

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
  //attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello you clicekd");
  };

  const complxExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      {/* </article><button type="button" onClick={complxExample(author)}> {/* here the function is invoked as soon as page renders hence without clicking it logs  */}
      <button type="button" onClick={() => complxExample(author)}>
        {" "}
        {/* this way this function is assigned to onclick and only run when we click */}
        more complex example
      </button>
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
