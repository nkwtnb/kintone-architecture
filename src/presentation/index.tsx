import React from 'react';
import { render } from 'react-dom';
import App from '../ui/App';
(() => {
  kintone.events.on("app.record.index.show", async (e: any) => {
    const element = kintone.app.getHeaderSpaceElement();
    render(<App />, element);
    return e;
  });
})();
