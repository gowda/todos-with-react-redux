import { connect } from 'react-redux';

import Component from '../components/counter';
import { State } from '../reducer';

const mapState = (state: State) => ({
  count: state.filter(({ completed }) => !completed).length,
});

export default connect(mapState)(Component);
