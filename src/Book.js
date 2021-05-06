import React from 'react'

const Book = ({ img, author, title }) => {
  //const { img, author, title } = props.book
  // children will render everything else on book one, <Book> children in the between </Book>

  //events
  const clickHandle = () => {
    alert('hi world')
  }

  const getAuthor = (title) => {
    console.log(title)
  }

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> {author} </h1>
      <p>{title}</p>
      <button type="button" onClick={clickHandle}>
        {' '}
        Click me{' '}
      </button>
      <button type="button" onClick={() => getAuthor(title)}>
        {' '}
        Other example{' '}
      </button>
    </article>
  )
}

export default Book
