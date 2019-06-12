class Component{
  constructor(props={}){
    this.props = props
  }
  setState(state){
    let oldEl = this.el;
    this.state = state;
    this.el = this.renderDOM();
    if(this.onStateChange){
      this.onStateChange(oldEl,this.el)
    }
  }
  renderDOM(){
    this.el = createDOMFromString(this.render())
    if(this.onClick){
      this.el.addEventListener("click",this.onClick.bind(this),false)
    }
    return this.el;
  }
}

function createDOMFromString(domString){
  let div = document.createElement("div");
  div.innerHTML = domString;
  return div;
}

function mount(component,wrapper){
  wrapper.appendChild(component.renderDOM());
  component.onStateChange = function(oldEl,newEl){
    wrapper.insertBefore(newEl,oldEl);
    wrapper.removeChild(oldEl);
  }
}

class LikeButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLike:false
    }
  }
  onClick(){
    this.setState({
      isLike:!this.state.isLike
    })
  }
  render(){
    return `
    <button style="background-color:${this.props.bgColor}">
      <span>${this.state.isLike?"取消":"关注"}</span>
    </button>
    `
  }
}

class Title extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return `
      <h1 style="background-color:${this.props.bgColor};color:${this.props.color}">hello wrold!</h1>
    `
  }
}