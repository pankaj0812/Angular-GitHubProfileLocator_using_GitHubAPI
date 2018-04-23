import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { AppModule } from './app/app.module';
// import {AppComponent} from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule);
// ,[
//   disableDeprecatedForms(),
//   provideForms()
// ]).catch((err:any)=> console.log(err));
// bootstrap(AppComponent,[
//   disableDeprecatedForms(),
//   provideForms()
// ]).catch((err:any)=> console.log(err));
