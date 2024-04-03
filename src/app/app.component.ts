import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare const Swiper: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef<HTMLDivElement>;
  swiper: any;
  images: any[] = [
    {
      src: '../assets/emrs-physical-exam.jpg',
      title: 'Physical Exam',
      description: 'Record vitals from physical exam',
    },
    {
      src: '../assets/emrs-health-history.jpg',
      title: 'Health History',
      description: 'Document patient health history',
    },
    {
      src: '../assets/emrs-sketch.jpg',
      title: 'Eye Sketch',
      description: 'Sketch conditions of the iris, cornea, pulil etc.',
    },
    {
      src: '../assets/emrs-surgical.jpg',
      title: 'Surgical Templates',
      description:
        'Start with pre-defined steps for surgical procedure, customize per patient',
    },
    {
      src: '../assets/emrs-documents.jpg',
      title: 'Document Viewer',
      description: 'Upload and view documents',
    },
  ];

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperRef.nativeElement, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
