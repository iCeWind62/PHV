import './App.scss';
import Component from 'react-pure-render/component';
import Footer from './Footer.react';
import Header from './Header.react';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import start from '../../common/app/start';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidemenu from '../Components/Sidemenu/Sidemenu';
import Title from '../Components/Title/Title';
import Slider from 'material-ui/Slider';

// v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template
const bootstrap4Metas = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
  {
    'http-equiv': 'x-ua-compatible',
    content: 'ie=edge'
  }
];


class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    currentLocale: PropTypes.string.isRequired,
    location: locationShape
  };
  render() {
    const { children, currentLocale, location } = this.props;

    return (
      <div className="container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Title />
            <Sidemenu />
          </div>
        </MuiThemeProvider>
        <Helmet
          htmlAttributes={{ lang: currentLocale }}
          titleTemplate="%s - Este.js"
          meta={[
            ...bootstrap4Metas,
            {
              name: 'description',
              content: 'Dev stack and starter kit for functional and universal React apps'
            }
          ]}
          link={[
            { rel: 'shortcut icon', href: require('./favicon.ico') }
          ]}
        />
        {/* Pass location to ensure header active links are updated. */}
      </div>
    );
  }

}

App = start(App);

export default connect(state => ({
  currentLocale: state.intl.currentLocale
}))(App);
