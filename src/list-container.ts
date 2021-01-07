import { connect } from 'react-redux';
import { State } from './reducer';

import Component from './components/list';

const mapState = (state: State) => ({
  items: state,
});

export default connect(mapState)(Component);
