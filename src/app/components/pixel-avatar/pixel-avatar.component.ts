import { RequestService } from './../../shared/services/request.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pixel-avatar',
  templateUrl: './pixel-avatar.component.html',
  styleUrls: ['./pixel-avatar.component.scss']
})
export class PixelAvatarComponent implements OnInit {

  public lastSpriteSelected: string = 'male';
  public lastModSelected: string = 'happy';

  name: string;
  html: any;

  public imageToShow: any;

  constructor(private _requestService: RequestService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  public onBtnClick(element: string, isMod: boolean = false): void {

    if (isMod) {
      this.lastModSelected = element;
    } else {
      this.lastSpriteSelected = element;
    }

    const randomSeed = Math.floor(Math.random() * 10000);
    const url = `https://avatars.dicebear.com/api/${this.lastSpriteSelected}/${randomSeed}.svg?mood[]=${this.lastModSelected}`;

    this._requestService.get(url).subscribe((resp) => {

      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const result: any = reader.result;
        this.imageToShow = this._sanitizer.bypassSecurityTrustResourceUrl(result);
      }, false);

      if (resp) { reader.readAsDataURL(resp); }
    });
  }

}
