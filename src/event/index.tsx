import React from 'react';
import { render } from 'react-dom';
import Sum from '../presentation/ui/Sum';
(() => {
  kintone.events.on("app.record.index.show", async (e: any) => {
    const element = kintone.app.getHeaderSpaceElement();
    render(<Sum />, element);
    return e;
  });
})();
