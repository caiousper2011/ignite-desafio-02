import { useState } from 'react';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { SideBarHeader } from './components/SideBarHeader';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps,
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />

      <div className="container">
        <SideBarHeader selectedGenre={selectedGenre} />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}
