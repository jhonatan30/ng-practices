import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

// Invesion control example
// https://medium.com/@__bangash/add-loading-to-ui-element-in-angular-like-a-pro-cab59ebe8c93

const CSS_CLASS_NAMES = {
  active: 'active',
  success: 'success',
  error: 'error'
};

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {

  public subscription: Subscription;

  @Input('appLoading')
  loadingFn: () => Observable<any>;

  @HostListener('dblclick')
  onClick() {
    this.onActive();
    this.onDisabled();
    try {
      this.subscription = this.loadingFn()
        .pipe(
          finalize(() => {
            this.onEnable();
          })
        )
        .subscribe(() => {
          this.onSuccess();
        }, (error) => {
          this.onError();
        }
        );
    } catch (error) {
      this.onError();
      this.onEnable();
    }
  }

  constructor(private elem: ElementRef) { }

  get nativeElement(): HTMLInputElement {
    return this.elem.nativeElement;
  }

  onEnable() {
    this.nativeElement.disabled = false;
  }

  onDisabled() {
    this.nativeElement.disabled = true;
  }

  onActive() {
    const { active, success, error } = CSS_CLASS_NAMES;
    this.nativeElement.classList.add(active);
    this.nativeElement.classList.remove(success, error);
  }

  onSuccess() {
    const { active, success, error } = CSS_CLASS_NAMES;
    this.nativeElement.classList.add(success);
    this.nativeElement.classList.remove(active, error);
  }

  onError() {
    const { active, success, error } = CSS_CLASS_NAMES;
    this.nativeElement.classList.add(error);
    this.nativeElement.classList.remove(active, success);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
