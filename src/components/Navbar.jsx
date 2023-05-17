import Link from "next/link"
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  const menuItems = [
      {
          text: 'Home',
          href: '/'
      },
      {
          text: 'About',
          href: '/about'
      },
      {
          text: 'Pricing',
          href: '/pricing'
      },
  ];
  return (
    <nav className={ styles['menu-container'] }>
      {
        menuItems.map((item) => <ActiveLink key={item.text} text={item.text} path={item.href}/>)
      }
    </nav>
  )
}
