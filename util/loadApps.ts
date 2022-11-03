import { IApp } from '../types/app';
import { appRegistrationMap } from './appRegistration';
import fs from 'fs';
import { getAppImagePath } from './imageHelpers';
import { join } from 'path';

const appsDirectory = join(process.cwd(), 'apps');

export function getAppSlugs() {
  return fs.readdirSync(appsDirectory);
}

export function getAppBySlug(slug: string): IApp {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(appsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const app = JSON.parse(fileContents);

  return {
    ...app,
    slug: realSlug,
    logo: getAppImagePath(app),
  } as IApp;
}

export function getAllApps(): IApp[] {
  const slugs = getAppSlugs();

  const apps = slugs
    .map(slug => getAppBySlug(slug))
    .sort((app1, app2) =>
      appRegistrationMap.get(app1.slug)! < appRegistrationMap.get(app2.slug)!
        ? -1
        : 1,
    );

  return apps;
}
