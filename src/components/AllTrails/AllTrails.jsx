import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Trail from '../Trail/Trail';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

class AllTrails extends Component {

  // state = { expanded: false };

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_TRAILS'
        })
        
    }


  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <div className="trailList">
          {this.props.reduxStore.trailReducer.map(trail => {
            return (
              <Trail trail={trail} id={trail.id} key={trail.id} />
            )
          })}
              
        </div>
      </Router>
      
    )
  }
}

// AllTrails.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(AllTrails);