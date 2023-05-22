import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveLocation } from 'store';
import ga from 'ga';

const History = ({ history, redux_saveLocation }) => {
  const currentPath = history.location.pathname + history.location.search;

  const isMount = useRef(true);
  useEffect(() => {
    if (isMount.current) {
      ga.init();
      isMount.current = false;
    } else {
      ga.sendPageview(currentPath);
    }
  }, [currentPath]);

  useEffect(() => {
    redux_saveLocation(currentPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);
  return null;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redux_saveLocation: (data) => dispatch(saveLocation(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(History));
