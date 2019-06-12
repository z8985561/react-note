class LikeButton{
  constructor(){
    this.state={
      isLike:false
    }
  }
  render(){
    this.el = this.createDom(`
      <button>
        <span class="like-text">点赞</span>
      </button>
    `)
    this.el.addEventListener("click",()=>{
      this.changLikeText();
    },false)
    return this.el;
  }
  changLikeText(){
    this.state.isLike = !this.state.isLike;
    this.el.querySelector(".like-text").innerHTML = this.state.isLike ? "取消":"点赞"
  }
  createDom(domString){
    let div = document.createElement("div");
    div.innerHTML = domString;
    return div;
  }
}