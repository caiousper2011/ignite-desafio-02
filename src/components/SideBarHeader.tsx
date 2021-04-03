export interface SideBarHeaderProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
}

export const SideBarHeader: React.FC<SideBarHeaderProps> = ({
  selectedGenre,
}) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};
