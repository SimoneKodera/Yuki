import { StudioHeader, StudioMain } from './components';
import './index.scss';

export const StudioPage = () => { 
  return (
    <div className='studio-page page-container'>
      <header><StudioHeader /></header>
      <main><StudioMain /></main>
      <footer></footer>
    </div>
  )
}