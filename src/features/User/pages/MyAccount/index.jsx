import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PersonIcon from '@material-ui/icons/Person';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import InformationAccount from 'features/User/components/InformationAccount';
import HistoryBooking from 'features/User/components/HistoryBooking';
import { useDispatch, useSelector } from 'react-redux';
import { postInformationAccountAsync } from 'features/User/userSlice';

function MyAccount(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const account = useSelector((state) => state.user.informationAccount);
  const informationUser = useSelector((state) => state.login.informationUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const postInformationAccount = async () => {
      dispatch(
        await postInformationAccountAsync({
          taiKhoan: informationUser.taiKhoan,
        })
      );
    };

    postInformationAccount();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header></Header>
      <div className="my-account">
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              icon={<ChromeReaderModeIcon fontSize="medium"></ChromeReaderModeIcon>}
              label="Giao dịch của tôi"
              {...a11yProps(0)}
            />
            <Tab
              icon={<PersonIcon fontSize="medium"></PersonIcon>}
              label="Thông tin tài khoản"
              className={classes.tab}
              {...a11yProps(1)}
            />
          </Tabs>
          <TabPanel value={value} index={0} className="tab-panel">
            <HistoryBooking></HistoryBooking>
          </TabPanel>
          <TabPanel value={value} index={1} className="tab-panel">
            <InformationAccount account={account}></InformationAccount>
          </TabPanel>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

MyAccount.propTypes = {};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#efefef',
    display: 'flex',
    height: 800,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {},
}));

export default MyAccount;
