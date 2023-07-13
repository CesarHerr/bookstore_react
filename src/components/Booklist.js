import Book from './Book';

function BookList() {
  const list = [
    {
      name: 'Harry Potter',
      author: 'J.K. Rowling',
      categories: 'Fantasy',
    },
    {
      name: 'The lord of the Ring',
      author: 'J. R R. Tolkien',
      categories: 'Fantasy',
    },
    {
      name: 'It',
      author: 'Stephen King',
      categories: 'Terror',
    },
  ];
  return (
    <ul>
      {list.map((book) => (
        <Book
          key={book.name}
          name={book.name}
          author={book.author}
          categories={book.categories}
        />
      ))}
    </ul>
  );
}

export default BookList;
