import React from 'react'
import ReactDom from 'react-dom'
// css
import './index.css'
import books from './books'
import Book from './Book'

// stateless functional components
// always returns JSX

// Rules of JSX
// Return a single element, use camelCase for html, close eevry element

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // destroctiring
        //const { img, title, author } = book
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
