// post request 

import React from 'react';






const TodoForm = () => {
  return (
    <>
     <div class="container">
 <h1 class="mb-4">To-DO List </h1>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input required name="title" id="title" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className="form-control"></textarea>
      </div>
      {/* <div className="form-group">
        <label htmlFor="markdown">Markdown</label>
        <textarea required name="Markdown" id="Markdown" className="form-control"></textarea>
      </div> */}
      <a href="/" className="btn btn-secondary">
        Cancel
      </a>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      </div>
    </>
  );
};

export default TodoForm;
