import AppPreviewRow from '../components/home/AppPreviewRow';
import HomeTitleRow from '../components/home/HomeTitleRow';
import HomeWrapper from '../components/home/HomeWrapper';
import { IApp } from '../types/app';
import PageLayout from '../components/layout/PageLayout';
import { getAllApps } from '../util/loadApps';

type Props = {
  apps: IApp[];
};

export default function HomePage({ apps }: Props) {
  return (
    <PageLayout title="Sense List">
      <HomeWrapper>
        <HomeTitleRow />
        <AppPreviewRow apps={apps} />
      </HomeWrapper>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const apps = getAllApps();

  return {
    props: {
      apps,
    },
  };
}
