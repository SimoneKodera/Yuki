import { MainRoutePage, SideMenu, useMenuHamburger } from '../../routes';
import './index.scss';

export const MainPage = () => { 
  const { isOpen, render: hamburgerRender, setOpen } = useMenuHamburger();

  return (
    <div className="main-page">
      <aside style={{ width: isOpen ? '180px' : '0'}}> 
        <SideMenu close={() => setOpen(false) } />
      </aside>
      <main>
        {hamburgerRender}
        <MainRoutePage/>
      </main>
    </div>
  )
}