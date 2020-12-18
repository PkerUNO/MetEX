import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FontAwesomeModule,
		GraphQLModule,
		HttpClientModule,
		MarkdownModule.forRoot(),
		NgbCollapseModule,
		ScullyLibModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		SharedModule
	],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
