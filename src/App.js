// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [books, setBooks] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [book_name, setBook_name] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   function handleChange(e) {
//     setInputValue(e.target.value);
//   }

//   function handleBook_name(e) {
//     setBook_name(e.target.value);
//   }
//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }
//   function handlePhone(e) {
//     setPhone(e.target.value);
//   }
//   useEffect(usmangani() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/book/get");
//       console.log("Fetched data:", response.data);
//       setBooks(response.data.books);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // const updateBooks = async (book) => {
//   //   const response = await axios.put(
//   //     `http://localhost:4000/api/book/update/${editingId}`
//   //   );
//   //   setInputValue(book.author_name);
//   //   setBook_name(book.book_name);
//   //   setEmail(book.email);
//   //   setPhone(book.phone);
//   //   setEditingId(book._id);
//   // };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     const newContact = {
//       author_name: inputValue,
//       book_name: book_name,
//       email: email,
//       phone: phone,
//     };
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/book/create",
//         newContact
//       );

//       console.log(response.data);
//       if (!newContact) {
//         alert("ERROR ADDING BOOK");
//       }

//       setInputValue("");
//       setBook_name("");
//       setEmail("");
//       setPhone("");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   function handledelete(index) {
//     const newBokks = [...books];
//     newBokks.splice(index, 1);
//     setBooks(newBokks);
//   }

//   return (
//     <div>
//       <form onSubmit={handleAdd}>
//         <div className="Container-App">
//           <h1>Book-App</h1>
//           <input
//             type="text"
//             placeholder="Enter Author Name"
//             value={inputValue}
//             onChange={handleChange}
//           ></input>
//           <input
//             type="text"
//             placeholder="Enter Book Name"
//             value={book_name}
//             onChange={handleBook_name}
//           ></input>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             value={email}
//             onChange={handleEmail}
//           ></input>
//           <input
//             type="text"
//             placeholder="Enter Phone"
//             value={phone}
//             onChange={handlePhone}
//           ></input>
//           <button type="submit">Add</button>
//         </div>
//       </form>
//       <ul>
//         {books.map((book, index) => (
//           <li key={index}>
//             {book}
//             <button onClick={() => handledelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [inputvalue, setInputVale] = useState("");
  const [book_name, setBook_name] = useState("");
  const [email, setEmail] = useState("");
  const [author_name, setAuthor_Name] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:400  0/api/book/get");
      console.log("Fetched data:", response.data);
      setBooks(response.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!inputvalue || !book_name || !email || !author_name) {
      alert("Please fill in all fields");
    }
    try {
      const newBooks = {
        book: inputvalue,
        book_name: book_name,
        email: email,
        author_name: author_name,
      };
      await axios.post("http://localhost:4000/api/book/create", newBooks);
      fetchBooks();
      console.log(newBooks.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handledelete = async (e) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/api/book/delete`)
  //   } catch (error) {}
  // };

  function handleChange(e) {
    setInputVale(e.target.value);
  }
  function handleBook_name(e) {
    setBook_name(e.target.value);
  }
  function handleAuthor_name(e) {
    setAuthor_Name(e.target.value);
  }
  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <div className="Container">
      <form onSubmit={handleAdd}>
        <h1>Book-App</h1>
        <input
          type="text"
          placeholder="AddBooks"
          value={inputvalue}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="author_name"
          value={author_name}
          onChange={handleAuthor_name}
        ></input>
        <input
          type="text"
          placeholder="Book_name"
          value={book_name}
          onChange={handleBook_name}
        ></input>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        ></input>
        <button type="submit">Adddddd</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
