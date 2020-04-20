import React from "react";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the Author shown</p>
      </div>
    </div>
  );
}
function Turn({ author, books }) {
  console.log(author);

  return (
    <div className="row turn" style={{ background: "white" }}>
      <div className="col-4 offset-1 authorimage">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.books.map((title) => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
}
function Book({ title }) {
  return (
    <div className="answer">
      <div>{title}</div>
    </div>
  );
}
function Continue() {
  return <div />;
}
function Footer() {
  return (
    <div id="footer" className="row turn">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikemedia Commons
          </a>{" "}
          and are in the public domain
        </p>
      </div>{" "}
    </div>
  );
}

function AuthQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthQuiz;
