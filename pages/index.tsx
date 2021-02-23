import ButtonLink from '../components/ButtonLink';
import AppsList from '../components/AppsList';

import {getPopular, getNewAndRecentlyUpdated, getEditorsChoiceApps, getEditorsChoiceGames} from '../mocks';

export default function Home({popular, newAndUpdated, editorsChoiceApps, editorsChoiceGames}) {
  return (
    <main className="max-w-screen-2xl mx-auto py-20 px-10 md:px-20">
      <h1>
        Apps for Linux, right here
      </h1>
      <p className="text-xl font-light max-w-paragraph">Welcome to Flathub, the home of hundreds of apps which can be easily installed on any Linux distribution. Browse the apps online, from your app center or the command line.</p>
      <div className="my-10">
        <a href="https://flatpak.org/setup/" className="button-link mr-4 mb-4 sm:mb-0">Quick setup</a>
        <ButtonLink to="/apps" text="Browse the apps" additionalStyle="mb-4 sm:mb-0"/>
      </div>
      
      <AppsList appsSection="Popular Apps" sectionUrl="/apps/collection/popular" apps={popular} />
      <AppsList appsSection="New & Updated" sectionUrl="/apps/collection/recently-updated" apps={newAndUpdated} />
      <AppsList appsSection="Editor's Choice Apps" sectionUrl="/apps/collection/editors-choice-apps" apps={editorsChoiceApps} />
      <AppsList appsSection="Editor's Choice Games" sectionUrl="/apps/collection/editors-choice-games" apps={editorsChoiceGames} />
    </main>
  )
}

export async function getStaticProps() {
  const popular: ReadonlyArray<App> = getPopular();
  const newAndUpdated: ReadonlyArray<App> = getNewAndRecentlyUpdated();
  const editorsChoiceApps: ReadonlyArray<App> = getEditorsChoiceApps();
  const editorsChoiceGames: ReadonlyArray<App> = getEditorsChoiceGames();

  return {
    props: {
      popular,
      newAndUpdated,
      editorsChoiceApps,
      editorsChoiceGames
    },
  }
}