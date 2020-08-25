import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PixelAvatarService } from './pixel-avatar.service';
import { SPRITE, MOD } from './pixel-avatar.conts';

@Component({
  selector: 'app-pixel-avatar',
  templateUrl: './pixel-avatar.component.html',
  styleUrls: ['./pixel-avatar.component.scss']
})
export class PixelAvatarComponent implements OnInit {

  public activeSprite: string = 'male';
  public activeMod: string = 'happy';
  public isModDisabled: boolean = false;
  public imageToShow: any;

  constructor(private pixelAvatarService: PixelAvatarService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.requestAvatar();
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
