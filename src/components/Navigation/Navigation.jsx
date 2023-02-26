import { Item } from './navigation.styled';
import { List } from './navigation.styled';

function Navigation() {
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
}
export default Navigation;
