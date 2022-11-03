import { IApp } from '../types/app';

export function getAppRoute(app: IApp) {
  return `/apps/${app.slug}`;
}
