import { getAllApps, getAppBySlug } from '../../util/loadApps';

import AppDetails from '../../components/apps/AppDetails';
import AppWrapper from '../../components/apps/AppWrapper';
import ErrorPage from 'next/error';
import { IApp } from '../../types/app';
import PageLayout from '../../components/layout/PageLayout';
import { useRouter } from 'next/router';

type Props = {
  app: IApp;
};

export default function AppPage({ app }: Props) {
  const router = useRouter();

  if (!router.isFallback && !app?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PageLayout title={app.name + ' - Sense List'}>
      <AppWrapper colors={app.colors}>
        <AppDetails app={app} />
      </AppWrapper>
    </PageLayout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const app = getAppBySlug(params.slug);

  return {
    props: {
      app,
    },
  };
}

export async function getStaticPaths() {
  const apps = getAllApps();

  return {
    paths: apps.map(app => ({
      params: {
        slug: app.slug,
      },
    })),
    fallback: false,
  };
}
