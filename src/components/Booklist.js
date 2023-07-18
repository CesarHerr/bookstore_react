import { useSelector } from 'react-redux';
// import { add, remove } from '../redux/books/booksSlice';
import Book from './Book';

function BookList() {
  const { booksList } = useSelector((state) => state.books);
  return (
    <ul>
      {booksList.map((book, index) => (
        <Book
          key={book.item_id}
          name={book.title}
          author={book.author}
          categories={book.category}
          index={index}
        />
      ))}
    </ul>
  );
}

export default BookList;
