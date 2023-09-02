import { Ref, computed } from 'vue'
import type { Heading } from '@islands/headings'
import type { SideBarItem, SideBarGroup } from '~/logic/config'
import { getPosts } from "~/logic/posts";
import { normalize } from '~/logic/utils'
import _ from 'lodash'

export function useSideBarLinks () {
  const { route, site } = usePage()

  const currentPath = $computed(() => normalize(route.path))
  const links = $computed(() => site.sidebar.flatMap(group => group.children || group))
  const index = $computed(() => links.findIndex(item => normalize(item.link) === currentPath))

  return {
    next: computed(() => index > -1 && links[index + 1]),
    prev: computed(() => index > -1 && links[index - 1]),
  }
}

export function useSideBar(){
  const posts = $(getPosts())
  return computed(() => {
    return _.sampleSize(posts, 10)
  })
}

export function useActive (itemRef: Ref<SideBarItem>) {
  const { route } = usePage()

  return computed(() => {
    const { link, ...item } = itemRef.value

    if (link === undefined)
      return false

    const routePath = normalize(route.path)
    const pagePath = normalize(link)

    return routePath === pagePath
      || ('children' in item && routePath.startsWith(pagePath))
  })
}

function linksFromHeadings (heading: undefined | Heading[], topLevel: number, depth: number): SideBarItem[] {
  if (heading === undefined) return []

  const ret: SideBarItem[] = []
  let lastTopHeading: SideBarItem | undefined
  heading.forEach(({ level, title, slug }) => {
    if (level - 1 > depth)
      return

    const item: SideBarItem = {
      text: title,
      link: `#${slug}`,
    }

    if (level === topLevel) {
      lastTopHeading = item
      ret.push(item)
    }
    else if (lastTopHeading) {
      ((lastTopHeading as any).children || ((lastTopHeading as any).children = [])).push(item)
    }
  })

  return ret
}