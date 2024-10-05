type Submenu = {
  href: string
  label: string
  active?: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  submenus?: Submenu[]
}

export function getMenuList(pathname: string): Menu[] {
  return [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
      submenus: []
    },
    {
      href: '',
      label: 'Posts',
      active: pathname.includes('/posts'),
      submenus: [
        {
          href: '/posts',
          label: 'All Posts'
        },
        {
          href: '/posts/new',
          label: 'New Post'
        }
      ]
    },
    {
      href: '/categories',
      label: 'Categories',
      active: pathname.includes('/categories')
    },
    {
      href: '/tags',
      label: 'Tags',
      active: pathname.includes('/tags')
    }
  ]
}
