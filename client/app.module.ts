import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent as AppWebComponent } from './app.web.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { AgmCoreModule, MapsAPILoader  } from 'angular2-google-maps/core';
import { METEOR_PROVIDERS,  MeteorModule } from 'angular2-meteor';

import { routing } from './routes';
import { PartiesFormComponent } from './imports/parties/parties-form.component';
import { PartiesListComponent } from './imports/parties/parties-list.web.component';
import { PartyDetailsComponent } from './imports/parties/party-details.component';
import { PartiesUpload } from './imports/parties/parties-upload.component';
import { AuthModule} from './imports/auth';
import { DisplayNamePipe } from './imports/shared/display-name.pipe';
import { RsvpPipe } from './imports/shared/rsvp.pipe';
import { DisplayMainImagePipe } from './imports/shared/display-main-image.pipe';
import { FileDropDirective } from 'angular2-file-drop';
import { PaginationService, PaginationControlsCmp } from 'ng2-pagination';

@NgModule({
    declarations: [
        AppWebComponent,
        PartiesFormComponent,
        PartiesListComponent,
        PartyDetailsComponent,
        PartiesUpload,
        DisplayNamePipe,
        RsvpPipe,
        DisplayMainImagePipe,
        FileDropDirective,
        PaginationService,
        PaginationControlsCmp
    ],
    imports: [
        BrowserModule,
        MeteorModule,
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
        MdCheckboxModule,
        AgmCoreModule,
        AuthModule
    ],
    providers: [
        METEOR_PROVIDERS,
        //MapsAPILoader,
        { provide: 'CanActivateForLoggedIn', useValue: () => !! Meteor.userId() }
    ],
    bootstrap:    [AppWebComponent]
})

export class AppModule {}