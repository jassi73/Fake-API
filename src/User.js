import React, { Component } from "react";
import axios from "axios";
import "tachyons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      images: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        axios
          .get(`https://avatars.dicebear.com/api/male/:jassi.svg`)
          .then((res) => {
            console.log(res);
            this.setState({ images: res.data.data });
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getImage = (post) => {
    const url1 = "https://avatars.dicebear.com/api/male/:";
    const url2 = ".svg";
    return `${url1}${post.name}${url2}`;
  };
  render() {
    const { posts } = this.state;

    return (
      <div className="bg-animate bg-white">
        {posts.map((post, index) => (
          <div
            className="avtar ma4 bg-lightest-blue  center shadow-5 grow   pa4 shadow-3-ns br3-m "
            style={{
              width: 250,

              borderRadius: 8,
            }}
            width="100"
            height="100"
          >
            <LazyLoadImage
              src={this.getImage(post)}
              width="80"
              height="80"
              alt=""
            />
            <h1 key={post.id}>{post.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
