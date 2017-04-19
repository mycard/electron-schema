# electron-schema

electron `<webview>` tag support for Angular 2 or later

## Usage

app.module.ts
```TypeScript
import { ELECTRON_SCHEMA } from 'electron-schema';
@NgModule({
  // ...
  schemas: [ELECTRON_SCHEMA]
})
export class AppModule {
}
```