import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';

import { RemoteEntryComponent } from './app/remote-entry/entry.component';

const mount = async () => {
  const app = await bootstrapApplication(RemoteEntryComponent);
  return app.components[0].instance;
};

export { mount };
