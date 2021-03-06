class MathText extends HTMLElement {

   // The paragraph below detects the
   // argument to the custom element
   // and is necessary for innerHTML
   // to receive the argument.
   set content(value) {
  		this.innerHTML = value
  	}

  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML =
      '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
       setTimeout(() => MathJax.typesetShadow(this.shadowRoot), 1);
       // MathJax.typesetShadow(this.shadowRoot)
  }
}

customElements.define('math-text', MathText)

