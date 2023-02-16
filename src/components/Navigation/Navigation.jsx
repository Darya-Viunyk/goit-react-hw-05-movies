import { Item } from './navigation.styled';
import { List } from './navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <Item to="/">Home</Item>
        </li>
        <li>
          <Item to="movies">Movies</Item>
        </li>
      </List>
    </nav>
  );
};
