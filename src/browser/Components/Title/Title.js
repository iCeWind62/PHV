import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router'

export default class Title extends React.Component {
  constructor(){
    super()
    this.state = {
      title:"TestApp"
    }
  }
  changeTitle(e){
    const title = e.target.value;
    this.setState({title})
  }
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Link to="testPath">Sidemenu</Link>
        {this.props.children}
        <AppBar
          title={this.state.title}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
      <IconMenu
        iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    }
        />
        <input onChange={this.changeTitle.bind(this)}/>
      </div>
  </MuiThemeProvider>)
  }
}
