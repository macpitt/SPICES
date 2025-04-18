// src/test/setupTests.ts
import { server } from '@/mocks/node';
import { afterAll, afterEach, beforeAll } from 'vitest';


//beforeEach(() => server.resetHandlers());

// Start MSW before all tests
beforeAll(() => server.listen());

// Reset any request handlers that are declared as overrides
afterEach(() => server.resetHandlers());

// Stop server after tests are done
afterAll(() => server.close());
