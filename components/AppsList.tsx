import ButtonLink from '../components/ButtonLink';

export default function AppsList({appsSection, sectionUrl, apps}: AppsListProps) {
  return (
    <section className="mt-10 relative">
      <h2 className="text-3xl font-light max-w-3xs sm:max-w-none">{appsSection}</h2>
      <ButtonLink to={sectionUrl} text="See more" additionalStyle="absolute top-0 right-0"/>
      <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-4 mt-4">
        {apps.map((app: App) => (
          <div key={app.id} className="cols-span-1 md:col-span-2 shadow relative h-60">
            <div className="w-full h-48 flex justify-around items-center">
              <img className="flex" src={app.icon ? app.icon : "/flathub-logo.png"} alt={app.name} width={128} height={128}/>
            </div>
            <div className="bg-gray text-white absolute bottom-0 left-0 h-14 w-full flex items-center px-3 overflow-hidden">
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold truncate">{app.name}</span>
                <p className="text-xs font-normal truncate">{app.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}