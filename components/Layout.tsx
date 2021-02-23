import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SearchIcon from '../components/icons/SearchIcon';
import MoreIcon from '../components/icons/MoreIcon';

export default function Layout({children}) {
  return(
    <div>
      <Head>
        <title>Flathub - An app store and build service for Linux</title>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <header className="bg-base h-16 flex justify-between px-8">
        <Link href="/">
            <Image src="/flathub-logo-toolbar.svg" alt="flathub-logo" width={115} height={30} className="cursor-pointer"/>
        </Link>
        <div className="p-3 relative hidden lg:block">
          <span className="absolute top-5 left-5"><SearchIcon height="20"/></span>
          <input type="text" placeholder="Search apps" className="h-9 w-96 bg-black bg-opacity-20 rounded px-10 text-white"/>
        </div>
        <nav className="justify-between items-center text-white font-semibold uppercase text-sm hidden lg:flex" style={{width: '350px'}}>
          <Link href="/apps">Applications</Link>
          <a href="https://github.com/flathub/flathub/wiki/App-Submission">Publish</a>
          <a href="https://discourse.flathub.org/">Forum</a>
          <Link href="/about">About</Link>
        </nav>
        <nav className="flex items-center justify-between align-right text-white lg:hidden">
          <span className="w-8">
            <SearchIcon height="20"/>
          </span>
          <span className="w-8">
            <MoreIcon height="20" />
          </span>
        </nav>
      </header>
      {children}
      <footer className="bg-black">
        <div className="small-container text-white grid grid-cols-8 gap-10 max-w-screen-md mx-auto">
          <div className="col-span-2 flex flex-col">
            <h4>Applications</h4>
            <Link href="/apps/collection/popular">Popular</Link>
            <Link href="/apps/collection/recently-updated">New & Updated</Link>
            <Link href="/apps/collection/editors-choice-apps">Editor's Choice</Link>
            <Link href="/apps/collection/editors-choice-games">Editor's Choice Games</Link>
            <Link href="/apps">Browse Apps</Link>
            <Link href="/feeds">RSS Feeds</Link>
          </div>
          <div className="col-span-2 flex flex-col">
            <h4>Community</h4>
            <a href="https://flatpak.org/about/">Get Involved</a>
            <a href="https://discourse.flathub.org/">Forum</a>
            <a href="https://twitter.com/FlatpakApps">Follow us</a>
          </div>
          <div className="col-span-2 flex flex-col">
            <h4>Developers</h4>
            <a href="https://github.com/flathub/flathub/wiki/App-Submission">Publish your app</a>
            <a href="http://docs.flatpak.org/">Documentation</a>
            <a href="https://github.com/flathub/">Example build files</a>
            <Link href="/badges">Badges</Link>
          </div>
          <div className="col-span-2 flex flex-col">
            <h4>Flathub</h4>
            <Link href="/about">About Flathub</Link>
            <a href="https://status.flathub.org/">Flathub Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}