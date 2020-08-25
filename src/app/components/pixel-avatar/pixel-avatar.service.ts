import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from './../../shared/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class PixelAvatarService {

  constructor(private _requestService: RequestService) { }

  public requestAvatar(activeSprite: string, activeMod: string): Observable<any> {
    const randomSeed: number = Math.floor(Math.random() * 10000);
    const modParam: string = !!activeMod ? `?mood[]=${activeMod}` : '';
    const url: string = `https://avatars.dicebear.com/api/${activeSprite}/${randomSeed}.svg${modParam}`;

    return this._requestService.get(url);
  }

}
