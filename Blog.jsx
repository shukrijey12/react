
const Header = () => {

  return (
  
  <h1>Header of the blog</h1>)



  
}   

const Post = () => {
    return(
        <article>
            <h2>Post Title</h2>
            <p>this is the post content.</p>
        </article>
    )
}

const Footer = () => {
    return(

        <h3>this is the footer</h3>
    )}

    const Blog=()=>{
        return(
            <div>
                <Header/>
                <Post/>
                <Footer/>
            </div>
        )
    }
     export default Blog;
        