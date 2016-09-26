import { NgModule }       from '@angular/core';
import { CommonModule  } from '@angular/common';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {RouterModule} from '@angular/router';
import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { METEOR_PROVIDERS } from 'angular2-meteor';

import { routing } from './routes';
import { LoginComponent } from './login.web.component';
import { SignupComponent } from './signup.component';
import { RecoverComponent } from './recover.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        RecoverComponent
    ],
    imports: [
        CommonModule,
        // Router
        routing,
        // Forms
        FormsModule,
        ReactiveFormsModule,
        // Material Design
        MdCoreModule,
        MdButtonModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdCheckboxModule
    ],
    providers: [
        METEOR_PROVIDERS
    ],
    exports: [
        LoginComponent,
        SignupComponent,
        RecoverComponent
    ]
})

export class AuthModule {}
