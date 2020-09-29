import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject, throwError } from 'rxjs';
import { PixelAvatarService } from './pixel-avatar.service';
import { MOD, SPRITE } from './pixel-avatar.conts';
import { catchError, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pixel-avatar',
  templateUrl: './pixel-avatar.component.html',
  styleUrls: ['./pixel-avatar.component.scss']
})
export class PixelAvatarComponent implements OnInit, OnDestroy {

  public activeSprite: string = 'male';
  public activeMod: string = 'happy';
  public isModDisabled: boolean = false;
  public imageToShow: any;

  public buttons = [
    { isActive: true, label: 'male'},
    { isActive: false, label: 'female'},
    { isActive: false, label: 'human'},
    { isActive: false, label: 'avataaars'},
    { isActive: false, label: 'identicon'},
    { isActive: false, label: 'initials'},
    { isActive: false, label: 'bottts'},
    { isActive: false, label: 'jdenticon'},
    { isActive: false, label: 'gridy'},
    { isActive: false, label: 'code'},
  ];

  private ngUnsubscribe = new Subject();

  constructor(private pixelAvatarService: PixelAvatarService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.requestAvatar();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public onClick(type: string): Observable<any> {
    return this.pixelAvatarService
      .requestAvatar(type, this.activeMod)
      .pipe(
        takeUntil(this.ngUnsubscribe),
        tap(resp => {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const result: any = reader.result;
            this.imageToShow = this._sanitizer.bypassSecurityTrustResourceUrl(result);
          }, false);

          if (resp) { reader.readAsDataURL(resp); }
        }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  /**
   * Called when sprite button is clicked
   *
   * @param option sprite data
   */
  public onSpriteClick(option: SPRITE): void {
    this.activeSprite = option;
    const humanSprites: string[] = ['male', 'female', 'human', 'avataaars'];

    if (humanSprites.includes(option)) {
      this.isModDisabled = false;
    } else {
      this.isModDisabled = true;
      this.activeMod = '';
    }
    this.requestAvatar();
  }

  /**
   * Called when mod button is clicked
   *
   * @param option mod data
   */
  public onModClick(option: MOD): void {
    this.activeMod = option;
    this.requestAvatar();
  }

  /**
   * Get the avatar image info
   */
  private requestAvatar() {
    this.pixelAvatarService
      .requestAvatar(this.activeSprite, this.activeMod)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((resp: Blob) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const result: any = reader.result;
          this.imageToShow = this._sanitizer.bypassSecurityTrustResourceUrl(result);
        }, false);

        if (resp) { reader.readAsDataURL(resp); }
      });

  }

}
