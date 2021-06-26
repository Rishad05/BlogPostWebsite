import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = ({blog}) => {
    const history = useHistory();
    const handleSeeBlog =(_id)=>{
        history.push(`/seeBlogs/${_id}`)
    }
    return (
        <div className="container mt-2 mb-5 col-md-4">
        <div class="card card-design" style={{ width: "18rem", height:"25rem", boxShadow:'5px 10px 5px 10px #993d00' }}>
            <div  onClick={() => handleSeeBlog (blog._id)}  className="card-header text-center">
            {
                blog.image ? <img style={{height: '200px', width: '200px'}} className="img-animation" src={`data:image/jpeg;base64,${blog.image.img}`}alt=""/>
                :
                <img style={{height: '200px', width: '200px'}} className="img-fluid mb-3 img-animation" src={`https://agile-basin-54523.herokuapp.com//${blog.img}`} alt=""/>
            }
            </div>
            <div style= {{backgroundColor:'#ffb380', color:'white'}} class="card-body fw-bolder">
                <h3 onClick={() => handleSeeBlog (blog._id)} class="card-title ">{blog.blogTitle}</h3>
                <small>blogContent: {blog.blogContent}</small>
                <br />
               

            </div>
            <div className="card-footer d-flex justify-content-between">
               
            </div>
        </div>
        </div>
    );
};

export default BlogDetails;