class LikeButton{
  constructor(){
    this.state={
      isLike:false
    }
  }
  setState(state){
    const oldEl = this.el;
    this.state = state;
    this.el = this.render();
    if(this.onStateChange){
      this.onStateChange(oldEl,this.el)
    }
  }
  changeLikeText(){
    this.setState({
      isLike:!this.state.isLike
    })
  }
  render(){
    this.el = createDOMFromString(`
      <button>
        <span class="like-text">${this.state.isLike?"取消":"关注"}</span>
      </button>
    `)
    this.el.addEventListener("click",this.changeLikeText.bind(this),false)
    return this.el;
  }
}

function createDOMFromString(domString){
  let div = document.createElement("div");
  div.innerHTML = domString;
  return div;
}