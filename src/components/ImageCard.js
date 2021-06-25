import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //這邊之所以要加EventListener是因為等圖片load完我們才能取得到它的高度，若沒加componentDidMount呼叫完imge的高是0,imge還在loading中
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  };
  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
