import { describe, it, expect } from "vitest";

import { RouterList } from "./router.list";

describe('Routing pathes:', () => {
  it('error path defined', () => {
    expect(RouterList.ERROR).toBeDefined();
  });

  it('sign in path defined', () => {
    expect(RouterList.SIGNIN).toBeDefined();
  });

  it('sign up path defined', () => {
    expect(RouterList.SIGNUP).toBeDefined();
  });

  it('restore password path defined', () => {
    expect(RouterList.RESTORE_PASSWORD).toBeDefined();
  });

  it('reset password path defined', () => {
    expect(RouterList.RESET_PASSWORD).toBeDefined();
  });

  it('lobby path defined', () => {
    expect(RouterList.LOBBY).toBeDefined();
  });

  it('settings path defined', () => {
    expect(RouterList.SETTINGS).toBeDefined();
  });
});