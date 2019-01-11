import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MonolithApplicationSharedLibsModule, MonolithApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MonolithApplicationSharedLibsModule, MonolithApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [MonolithApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonolithApplicationSharedModule {
    static forRoot() {
        return {
            ngModule: MonolithApplicationSharedModule
        };
    }
}
