import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'
import './style.css'
import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog/img-5.jpg'
import blog3 from '../../images/blog/img-6.jpg'
import blog4 from '../../images/blog/admin.jpg'


const BlogList = () => {
  //   const [isLoading, setLoading] = useState(true);
  // const [blogs, setBlogs] = useState(null);

  // useEffect(() => {
  //   getBlogFunc();
  // }, []);

  // useEffect(() => {
  //   const createPostListener = API.graphql(
  //     graphqlOperation(onCreateBlog)
  //   ).subscribe({
  //     next: (postData) => {
  //       const newPost = postData.value.data.onCreateBlog;
  //       const previousPost = blogs.filter((blog) => blog.id !== newPost.id);

  //       const updatedBlogs = [newPost, ...previousPost];
  //       setBlogs(updatedBlogs);
  //     },
  //   });

  //   const createDeleteListener = API.graphql(
  //       graphqlOperation(onDeleteBlog)
  //     ).subscribe({
  //       next: (deleteData) => {
  //         const newPost = deleteData.value.data.onDeleteBlog;
  //         const previousPost = blogs.filter((blog) => blog.id !== newPost.id);
  
  //         const updatedBlogs = [...previousPost];
  //         setBlogs(updatedBlogs);
  //       },
  //     });
  //     return () => {
  //       createPostListener.unsubscribe();
  //       createDeleteListener.unsubscribe();
  //     };
  //   });
  
  //   const getBlogFunc = async () => {
  //     const result = await API.graphql(graphqlOperation(listBlogs));
  //     setBlogs(result.data.listBlogs.items);
  //     setLoading(false);
  //   };

    return(
        <section className="wpo-blog-pg-section section-padding">
            {/* <div className="my-4 text-left row">
      {!isLoading && blogs !== null ? (
        blogs.map((blog) => (
          <div key={blog.id} className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card mb-2 h-100">
              <div className="card-body">
                <h3 className="fw-bold text-capitalize"> {blog.postTitle} </h3>
                <h3 className="fw-bold text-capitalize"> {blog.id} </h3>
                <h3 className="fw-bold text-capitalize"> {blog.name} </h3>
                <p className="text-muted">
                  Wrote By :{' '}
                  <span className="text-dark"> {blog.postOwnerUsername} </span>{' '}
                  -<time> {new Date(blog.createdAt).toDateString()}</time>{' '}
                </p>
                <br />
                <p> {blog.postBody} </p>
                <span className="">
                  <DeletePost data={blog.id} />
                  <EditPost onClick={() => alert('Edit Post')} />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center"> Loading...</p>
      )}
    </div> */}
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">Help the helpless who need you.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog2} alt=""/>
                                    <div className="video-btn2">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog3} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">Help the helpless who need you.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-details" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-details">1</Link></li>
                                    <li><Link to="/blog-details">2</Link></li>
                                    <li><Link to="/blog-details">3</Link></li>
                                    <li><Link to="/blog-details">4</Link></li>
                                    <li>
                                        <Link to="/blog-details" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
