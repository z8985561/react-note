class LikeButton{
  constructor(){
    this.state = {
      isLike:false
    }
  }
  changeLikeText(){
    let likeText = this.el.querySelector(".like-text");
    this.state.isLike = !this.state.isLike;
    likeText.innerHTML = this.state.isLike ? "取消":"点赞";
  }
  render(){
    this.el = createDOMFromString(`
      <button class="like-btn">
        <span class="like-text">点赞</span>
        <span>👍</span>
      </button>
    `);
    this.el.addEventListener("click",()=>{
      this.changeLikeText();
    },false);
    return this.el;
  }
}

function createDOMFromString(domString){
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
}