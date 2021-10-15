import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import PersonIcon from '@material-ui/icons/Person';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';
import HistoryBooking from 'features/User/components/HistoryBooking';
import InformationAccount from 'features/User/components/InformationAccount';
import { postInformationAccountAsync } from 'features/User/userSlice';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//TabPanel Material UI
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

MyAccount.propTypes = {
  value: PropTypes.number,
  loading: PropTypes.bool,
  account: PropTypes.object,
  informationUser: PropTypes.object,
  postInformationAccount: PropTypes.func,
  handleChange: PropTypes.func,
};

function MyAccount(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  //Custom hook show loading
  const loading = useShowLoading(1500);

  const dispatch = useDispatch();

  const account = useSelector((state) => state.user.informationAccount);
  const informationUser = useSelector((state) => state.login.informationUser);

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
      {loading && <Loading></Loading>}

      {!loading && (
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
                  icon={<ChromeReaderModeIcon fontSize="default"></ChromeReaderModeIcon>}
                  label="Giao dịch của tôi"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<PersonIcon fontSize="default"></PersonIcon>}
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
      )}
    </>
  );
}

export default MyAccount;
