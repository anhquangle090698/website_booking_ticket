import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { logicNumberChairTicket } from 'utils/common';
import { forwardRef } from 'react';
import moment from 'moment';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useSelector } from 'react-redux';

const tableIcons = {
  Add: forwardRef((props, ref) => {
    console.log('props', props);
    return <AddBox {...props} ref={ref} />;
  }),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const cellStyle = {
  fontSize: '13px',
};
function HistoryBooking(props) {
  const account = useSelector((state) => state.user.informationAccount);
  const [selectedRow, setSelectedRow] = useState(null);

  const data = account?.thongTinDatVe?.map((ttdv, index) => {
    const dsGhe = ttdv.danhSachGhe?.map((dsg) => logicNumberChairTicket(dsg.tenGhe)).toString();

    const tenRap = ttdv.danhSachGhe?.map((dsg) => {
      return dsg.tenHeThongRap;
    });

    return {
      id: ttdv.maVe,
      name: ttdv.tenPhim,
      cinema: tenRap[0],
      datetime: moment(ttdv.ngayDat).format('DD/MM/YYYY LT'),
      listChair: dsGhe,
    };
  });
  return (
    <div className="history-booking">
      <MaterialTable
        icons={tableIcons}
        columns={[
          {
            title: 'Mã vé',
            field: 'id',
            cellStyle: cellStyle,
          },
          {
            title: 'Tên phim',
            field: 'name',
            cellStyle: cellStyle,
          },
          {
            title: 'Tên rạp',
            field: 'cinema',
            cellStyle: cellStyle,
          },
          {
            title: 'Ngày đặt',
            field: 'datetime',
            cellStyle: cellStyle,
          },
          {
            title: 'Danh sách ghế',
            field: 'listChair',
            cellStyle: cellStyle,
          },
        ]}
        data={data}
        title="Giao dịch của tôi"
        onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow.tableData.id)}
        options={{
          headerStyle: {
            color: '#000',
            fontSize: '14px',
          },
          rowStyle: (rowData) => ({
            backgroundColor: selectedRow === rowData.tableData.id ? '#EEE' : '#FFF',
          }),
        }}
      />
    </div>
  );
}

HistoryBooking.propTypes = {};

export default HistoryBooking;
