import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  slideIndex:number=1;
  imagenes:any[]=[]
  slides:any
  quadrates:any
  constructor(private router:Router){
  }
// control de botones prev y next

        showSlides(n:number):void{
          let i;

          console.log(this.slides)
          if(n > this.slides.length) this.slideIndex = 1
          if(n < 1) this.slideIndex =this.slides.length
          for(i = 0; i < this.slides.length; i++){
              // slides[i].style.display = "none"
              this.slides[i].className='displayNone'
              // console.log(slides[i].classList.add("display"))
          }
          for(i = 0; i < this.quadrates.length;i++){
            this.quadrates[i].className = this.quadrates[i].className.replace("active","")
          }
          this.slides[this.slideIndex-1].className = "displayBlock";
          this.quadrates[this.slideIndex-1].className += " active";
        }

        plusSlides(n:number):void{
          console.log("flecha")
            this.showSlides(this.slideIndex += n)
        }
        currentSlide(n:number):void{
          this.showSlides(this.slideIndex = n)
        }


        ngOnInit():void{

          this.slides = document.querySelectorAll(".mySlides");
          this.quadrates = document.querySelectorAll(".quadrate");
          this.showSlides(this.slideIndex)
        }

        verRegion(id:string){
          this.router.navigate(['region'],{queryParams:{region:id}})
        }

}
