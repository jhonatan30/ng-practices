import { IcndbApiService } from './icndb-api.service';
import { NgModule } from '@angular/core';
import { ReqresApiService } from './reqres-api.service';
import { RequestService } from './request.service';

@NgModule({
    providers: [
        IcndbApiService,
        ReqresApiService,
        RequestService
    ]
})
export class ServicesModule { }
