import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuSideComponent } from './menu/menu-side/menu-side.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo:'home', pathMatch:'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'calendar', component: CalendarComponent, data:{breadcrumb: "Calendar"}},
	{ path: 'map', component: MapComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbComponent,
		ContentComponent,
		FooterComponent,
		LoginBoxComponent,
		MenuTopComponent,
		MenuSideComponent,
		CalendarComponent,
		MapComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		BrowserAnimationsModule,
		NgZorroAntdModule.forRoot(),
		RouterModule.forRoot(routes),
		NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js'})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
