import React from 'react';

import styled from 'react-emotion';
import space from 'app/styles/space';
import Link from 'app/components/links/link';
import InlineSvg from 'app/components/inlineSvg';

type Props = {
  title?: string;
  queryDetail?: string;
  to?: string | object;
  onEventClick?: () => void;
};

class QueryCard extends React.PureComponent<Props> {
  render() {
    const {title, queryDetail, onEventClick, to} = this.props;

    return (
      <StyledQueryCard onClick={onEventClick} to={to}>
        <QueryCardHeader>
          <StyledTitle>{title}</StyledTitle>
          <StyledQueryDetail>{queryDetail}</StyledQueryDetail>
        </QueryCardHeader>
        <QueryCardBody />
        <QueryCardFooter>
          <StyledCreator>
            <small>Pre-Built Query</small>
          </StyledCreator>
          <InlineSvg src="icon-ellipsis-filled" />
        </QueryCardFooter>
      </StyledQueryCard>
    );
  }
}

const StyledQueryCard = styled(Link)`
  background: ${p => p.theme.white};
  border: 1px solid ${p => p.theme.borderLight};
  border-radius: ${p => p.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 0px 6px rgba(209, 202, 216, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0px 0px 0px 6px rgba(209, 202, 216, 0.5);
  }
`;

const QueryCardHeader = styled('div')`
  padding: ${space(1.5)} ${space(2)};
  height: 80px;
  overflow: hidden;
`;

const StyledTitle = styled('div')`
  font-size: ${p => p.theme.fontSizeExtraLarge};
  color: ${p => p.theme.gray5};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const StyledQueryDetail = styled('div')`
  font-family: ${p => p.theme.text.familyMono};
  font-size: ${p => p.theme.fontSizeMedium};
  color: ${p => p.theme.gray2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const QueryCardBody = styled('div')`
  background: ${p => p.theme.offWhiteLight};
  max-height: 100px;
  height: 100%;
  overflow: hidden;
`;

const QueryCardFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space(1.5)} ${space(2)};
  color: ${p => p.theme.gray5};
`;

const StyledCreator = styled('div')`
  display: flex;
  align-items: center;
`;

export default QueryCard;
