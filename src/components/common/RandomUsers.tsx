/** @jsx jsx */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { User } from '../../reducers/github';

import pages from '../../pages';

export interface RandomUsersProps {
  users: User[];
  dispatchRemoveMember: (userLogin: string) => void;
}

const links = css`
  margin-top: 20px;
`;

const RandomUsers: FC<RandomUsersProps> = ({ users, dispatchRemoveMember }) => (
  <div>
    <Card.Group>
      {users.map(user => (
        <Card key={user.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={user.avatarUrl} />
            <Card.Header>{user.login}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign="right">
            <Button
              color="red"
              onClick={() => dispatchRemoveMember(user.login)}
            >
              <Icon name="trash" />
              削除
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <div css={links}>
      <Link to={pages.organizations.path}>
        <Button>会社検索からユーザーを追加</Button>
      </Link>
      {users.length > 1 && (
        <Link to={pages.random.path}>
          <Button color="twitter">{pages.random.title}</Button>
        </Link>
      )}
    </div>
  </div>
);

export default RandomUsers;
