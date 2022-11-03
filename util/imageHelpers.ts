import { IApp } from '../types/app';

export function getAppImagePath(app: IApp): string {
  return `/images/${app.logo}`;
}
