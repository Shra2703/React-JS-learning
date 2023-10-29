import { useEffect, useState } from "react";

export default function Blog() {
  // variables to store the content and the title
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  let [blogs, setBlogs] = useState([]);

  // this function will be invoked when submit button will be clicked
  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([{ title, text }, ...blogs]);
    console.log(blogs);

    // to clear the text from the input fields
    setTitle("");
    setText("");
  }

  // function which renders
  return (
    <>
      {/* heading of the page */}
      <h1>Write the blog</h1>

      <div className="section">
        {/* form where the blog is submitted */}
        <form onSubmit={handleSubmit}>
          {/* <Row label="Title">
            <input
              type="text"
              className="input"
              placeholder="Enter the title here"
            />
          </Row> */}

          {/* input  field where the title of the blog will be written*/}
          <label>
            Title <br />
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter the title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />
          {/* <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content goes here..."
            ></textarea>
          </Row> */}

          {/* textarea  field where the text of the blog will be written*/}
          <label>
            Content <br />
          </label>
          <textarea
            className="input content"
            placeholder="Content goes here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <hr />

          {/* button where the blog will get submitted */}
          <button className="btn" onClick={handleSubmit}>
            ADD
          </button>
        </form>
      </div>

      <hr />

      {/* results will ne shown here */}
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div className="blog" key={1}>
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>
        </div>
      ))}
    </>
  );
}

function Row(props) {
  const { label } = props;
  console.log(props.children);
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}

      <hr />
    </>
  );
}