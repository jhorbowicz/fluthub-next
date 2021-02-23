/// <reference types="next" />
/// <reference types="next/types/global" />

interface App {
  id: string,
  name: string,
  summary: string,
  icon: string
}

type AppsListProps = {
  appsSection: string,
  sectionUrl: string,
  apps: ReadonlyArray<App>
}

type IconProps = {
  width?: string,
  height?: string
}

type ButtonLinkProps = {
  to: string,
  text: string,
  additionalStyle?: string
}