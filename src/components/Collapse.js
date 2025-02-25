class Collapse {
    constructor(selector) {
      this.container = document.querySelector(selector);
      this.button = this.container.querySelector(".collapse-button");
      this.content = this.container.querySelector(".collapse-content");
  
      this.button.addEventListener("click", () => this.toggle());
    }
  
    toggle() {
      if (this.content.style.maxHeight) {
        this.content.style.maxHeight = null;
      } else {
        this.content.style.maxHeight = this.content.scrollHeight + "px";
      }
    }
  }
  
  export default Collapse;
  