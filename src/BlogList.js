const BlogList = ( { blogs, title } ) => {
  // let blogs = props.blogs
  // let title = props.title

  return (
    <div className='blog-list'>
      <h1>{ title }</h1>
      { blogs.map(blog => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;