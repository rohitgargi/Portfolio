import { Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[stickyElement]'
})

export class StickyElementDirective{
    private _element : HTMLElement;
    private _isSticky : boolean = false;
    private _offsetTop : number = 0;
    constructor(el : ElementRef) {    
  
      this._element = el.nativeElement;
      this._offsetTop = this._element.offsetTop;
  
      /* tap into the document scroll event */
      document.addEventListener('scroll', () => {
        const docTop = this._getDocumentPosition();
        const offset = this._offsetTop;
  
        if(docTop > offset && !this._isSticky) {
          this._makeSticky();
          this._isSticky = true;
        }  else {
          if(docTop < offset && this._isSticky) {
            this._resetSticky();
            this._isSticky = false;
          }
        }
      });
     }
  
     private _getDocumentPosition() : number {
        const docEl = document.documentElement;
        const docRect = docEl.getBoundingClientRect();
  
        /* this should take care of different browsers */
        const top = -docRect.top || document.body.scrollTop || window.scrollY || docEl.scrollTop || 0;      
        
        return top;
     }
  
    private _makeSticky() {
        this._element.style.cssText += 'position: -webkit-sticky; position: sticky; '; 
        this._element.style.top = '0px';    
    }
  
    private _resetSticky() {
      this._element.style.position = '';
      this._element.style.top = '';
    }
}