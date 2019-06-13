class Component{
  constructor(props={}){
    this.props = props;
  }
  setState(state){
    const oldEl = this.el;
    this.state = state;
    this.le = this.renderDOM();
    if(this.onStateChange){
      this.onStateChange(oldEl,this.le)
    }
  }
  renderDOM(){
    this.el = createDOMFromString(this.render());
    if(this.onClick){
      this.el.addEventListener('click',this.onClick.bind(this),false)
    }
    return this.el;
  }
}

const createDOMFromString = function(domString){
  let div = document.createElement("div");
  div.innerHTML = domString;
  return div;
}

const mount = function(component,container){
  container.appendChild(component.renderDOM())
  component.onStateChange = function(oldEl,newEl){
    container.insertBefore(newEl,oldEl);
    container.removeChild(oldEl);
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
      isLike: !this.state.isLike
    })
  }
  render(){
    return `
      <button style="background-color:${this.props.bgColor};">
        <span style="color:${this.props.color};font-size:${this.props.fontSize};">${this.state.isLike?"取消":"关注"}</span>
      </button>
    `
  }
}

class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return `
      <header>
        <h1 style="color:${this.props.color}">self React Component</h1>
      </header>
    `
  }
}