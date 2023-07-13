function NewBook() {
  return (
    <form>
      <input type="text" placeholder="Book Title" required />
      <input type="text" placeholder="Author" required />
      <button type="button">ADD BOOK</button>
    </form>
  );
}

export default NewBook;
