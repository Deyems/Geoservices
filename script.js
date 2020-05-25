class GeoSpring{
  projects = document.querySelectorAll('.projects-shown');
  //Btn for the services slide
  btn = document.querySelector('.btn');
  questions_link = document.querySelectorAll('.question>p');
  //Arrows for the About content
  left_arrow = document.querySelector('.left-arrow');
  right_arrow = document.querySelector('.right_arrow');
  aboutGeos = document.querySelectorAll('.gallery-text');
  dropdown_btn = document.querySelector('.button');
  m_dropdown = document.querySelector('.m-dropdown');

  constructor(){

  }

  run(){
    //Listen For Events Here
      this.btn.addEventListener('click', this.slider)
      /*FAQ PART*/
      this.questions_link.forEach(que => {
        que.addEventListener('click', this.showAnswers);
      });
      this.left_arrow.addEventListener('click',this.runslide);
      this.dropdown_btn.addEventListener('click',this.showMobileNav);
  }

  runslide = (e) => {
    let currentElem = 0;

    window.setInterval(() => {
      // console.log('We are here');
      this.aboutGeos[currentElem].style.display = `none`;
    },3000);

  }

  showMobileNav = (e) => {
    // console.log('Behind');
    this.m_dropdown.classList.toggle('show');
  }

  slider = (e) => {
    if(e.target.classList.contains('btn1')){
      this.updateDom1(this.projects[0],this.projects[1]);
    }
  }
//
  updateDom1(node,neighbour){
    node.classList.toggle('moveleft');
    neighbour.classList.toggle('shift');
  }

  showAnswers = (e) => {
    let answer = e.target.parentElement.children[1];
    answer.classList.toggle('show');
  }

}

let seyiGeospring = new GeoSpring();
seyiGeospring.run();
