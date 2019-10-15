import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {css} from 'emotion';

import SentryTypes from 'app/sentryTypes';
import Avatar from 'app/components/avatar';
import Tooltip from 'app/components/tooltip';

export default class AvatarList extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(SentryTypes.User).isRequired,
    avatarSize: PropTypes.number,
    maxVisibleAvatars: PropTypes.number,
    renderTooltip: PropTypes.func,
    tooltipOptions: PropTypes.object,
    typeMembers: PropTypes.string,
  };

  static defaultProps = {
    avatarSize: 28,
    maxVisibleAvatars: 5,
    typeMembers: 'users',
    tooltipOptions: {},
  };

  render() {
    const {
      className,
      users,
      avatarSize,
      maxVisibleAvatars,
      tooltipOptions,
      renderTooltip,
      typeMembers,
    } = this.props;

    const visibleUsers = users.slice(0, maxVisibleAvatars);
    const numCollapsedUsers = users.length - visibleUsers.length;

    if (!tooltipOptions.position) {
      tooltipOptions.position = 'top';
    }

    return (
      <AvatarListWrapper className={className}>
        {!!numCollapsedUsers && (
          <Tooltip title={`${numCollapsedUsers} other ${typeMembers}`}>
            <CollapsedUsers size={avatarSize}>
              {numCollapsedUsers < 99 && <Plus>+</Plus>}
              {numCollapsedUsers}
            </CollapsedUsers>
          </Tooltip>
        )}
        {visibleUsers.map(user => {
          return (
            <StyledAvatar
              key={`${user.id}-${user.email}`}
              user={user}
              size={avatarSize}
              renderTooltip={renderTooltip}
              tooltipOptions={tooltipOptions}
              hasTooltip
            />
          );
        })}
      </AvatarListWrapper>
    );
  }
}

const AvatarListWrapper = styled('div')`
  display: flex;
  flex-direction: row-reverse;
`;

const Circle = css`
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -8px;
  cursor: default;

  &:hover {
    z-index: 1;
  }
`;

const StyledAvatar = styled(Avatar)`
  overflow: hidden;
  ${Circle};
`;

const CollapsedUsers = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-weight: 600;
  background-color: ${p => p.theme.borderLight};
  color: ${p => p.theme.gray2};
  font-size: ${p => Math.floor(p.size / 2.3)}px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  ${Circle};
`;

const Plus = styled('span')`
  font-size: 10px;
  margin-left: 1px;
  margin-right: -1px;
`;
