import useData from '../hooks/useData';
import blogData from '../mockData/blogData';

import Preloader from './Preloader';

export const BlogHeader = ({ text }) => (
  <h2 className="blog_title">{text}</h2>
);

export const BlogPostWide = ({ src, alt, title, data, omg }) => {
  return (
    <div className="blog_post_wide">
      <img src={src} alt={alt} />
      <div className="blog_post_wide_content">
        <h3 className="blog_post_wide_title">{title}</h3>
        <p className="blog_post_wide_date">{data}</p>
        <p className="blog_post_wide_text">{omg}</p>
      </div>
    </div>
  );
};

export const BlogPostSmall = ({ src, alt, title, data, omg }) => {
  return (
    <div className="blog_post_small">
      <img src={src} alt={alt} />
      <div className="blog_post_small_content">
        <h3 className="blog_post_small_title">{title}</h3>
        <p className="blog_post_small_date">{data}</p>
        <p className="blog_post_small_text">{omg}</p>
      </div>
    </div>
  );
};

export const BlogPostsSmall = ({ blogImg, blogTexts }) => {

  return blogImg.slice(1).map((img, index) => (
    <BlogPostSmall
      src={img.src} 
      alt={img.alt} 
      title={blogTexts.title}
      data={blogTexts.data}
      omg={blogTexts.omg}
    />
  ));
};

export const Blog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
        method: "GET",
        },
    }); 

    if (isError){
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;

    const { blogHeader, blogImg, blogTexts } = data || blogData;
    //const blogTitle = <BlogHeader text={blogHeader.header} />;
    /*const blogPostWide = (
        <BlogPostWide
            src={blogImg[0].src}
            alt={blogImg[0].alt}
            title={blogTexts[0].title}
            data={blogTexts[0].data}
            omg={blogTexts[0].omg}
        />
    );*/
    /*const blogPostsSmall = (
        <BlogPostsSmall blogImg={blogImg} blogTexts={blogTexts} />
    );*/

    return (
        <section className="blog_section">
        <BlogHeader text={blogHeader.header} />
        <div className="blog_container">
            <BlogPostWide
                src={blogImg[0].src}
                alt={blogImg[0].alt}
                title={blogTexts.title}
                data={blogTexts.data}
                omg={blogTexts.omg}
            />
            <div className="blog_posts_small"><BlogPostsSmall blogImg={blogImg} blogTexts={blogTexts} /></div>
        </div>
        </section>
    );
};

export default Blog;