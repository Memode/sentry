import styled from '@emotion/styled';
import {AutoCompleteRoot} from 'app/components/dropdownAutoCompleteMenu';
import {TimeRangeRoot} from 'app/components/organizations/timeRangeSelector/index';

const HeaderItemPosition = styled('div')`
  display: flex;
  flex: 1;
  max-width: 450px;
  height: 100%;
  min-width: 0;

  ${AutoCompleteRoot}, ${TimeRangeRoot} {
    flex: 1;
    min-width: 0;
  }
`;

export default HeaderItemPosition;
