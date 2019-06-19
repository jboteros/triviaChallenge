import { connect } from 'react-redux';
import Content from './Content';
import { setUserStats } from '../../Flux/UserStats/Actions';
import { logOut, updateProfile, setAccount } from '../../Flux/User/Actions';


const mapStateToProps = ({ userStats, user }) => {
  return {
    userStats: userStats.data,
    user: user.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserStats: () => dispatch(setUserStats()),
    logout: () => dispatch(logOut()),
    updateProfile: (data) => dispatch(updateProfile(data)),
    setAccount: () => dispatch(setAccount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
