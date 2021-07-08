import React from "react";
import "../static/css/index.css";
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 150;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


document.addEventListener('DOMContentLoaded', init);

function init() {
  try{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
  }catch{
    
  }
}
const  TextSect = () => {

    return (
        <div>
            <div class="head">Versatile use cases</div>
            <div class="headS">
                EasyCorr can be used for <span class="txt-type head3S" data-wait="1000" data-words='["Research", "Fun", "Ed"]'></span>
            </div>
            <p class="par">
                EasyCorr can be used by a wide array of people. From elementary students exploring how data can be used for the first time, to policy makers who can use data to gain valuable insights.
            </p>
        </div>
    );
  
  
}

export default TextSect