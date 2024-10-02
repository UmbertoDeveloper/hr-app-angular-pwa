import {
    Directive,
    Renderer2,
    HostListener,
    Input,
    ElementRef
  } from "@angular/core";
  
  @Directive({
    selector: "[appStickyHeader]"
  })
  export class StickyHeaderDirective {
    @Input() public topOffset = 0;
    @Input() isContent = false;
  
    @HostListener("window:scroll", ["$event"])
    public windowScrolled($event: any) {
      // console.log(this.isContent);
      if (this.isContent) {
        this.windowScrollEventContent();
      } else {
        this.windowScrollEvent($event);
      }
    }
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    windowScrollEventContent() {
      const isReachingTop = this.getTop() > this.topOffset;
  
      if (isReachingTop) {
        this.renderer.setStyle(this.el.nativeElement, "margin-top", "40px");
      } else {
        this.renderer.setStyle(this.el.nativeElement, "margin-top", "initial");
      }
    }
  
    windowScrollEvent(_$event: any) {
      const isReachingTop = this.getTop() > this.topOffset;
      if (isReachingTop) {
        this.renderer.setStyle(this.el.nativeElement, "position", "fixed");
        this.renderer.setStyle(this.el.nativeElement, "top", "0");
      } else {
        this.renderer.setStyle(this.el.nativeElement, "position", "relative");
      }
    }
  
    getTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    }
  }
  
// Directive from https://stackoverflow.com/questions/51931366/sticky-header-for-my-table-in-angular-5
