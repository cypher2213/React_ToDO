import css from '../Header/Header.module.css'

const Header = () => {
  return (
   <div className={css.header_section}>
   <h1 className={css.header_title}>TODO Task</h1>
   </div>
  )
}

export default Header