import {describe, it, expect} from 'vitest';
import {getVirtualRoutesV3} from './get-virtual-routes.js';

describe('virtual routes', () => {
  it('gets virtual routes V3', async () => {
    await expect(getVirtualRoutesV3()).resolves.toMatchObject({
      layout: {
        file: expect.stringContaining('layout.jsx'),
      },
      routes: expect.arrayContaining([
        {
          id: expect.any(String),
          file: expect.stringContaining('graphiql.jsx'),
          index: false,
          path: 'graphiql',
        },
        {
          id: expect.any(String),
          file: expect.stringContaining('subrequest-profiler.jsx'),
          index: false,
          path: 'subrequest-profiler',
        },
        {
          id: expect.any(String),
          file: expect.stringContaining('index.jsx'),
          index: true,
          path: '',
        },
      ]),
    });
  });
});
