import { TableProps, Tooltip } from 'antd';
import { DataType } from '../domain/interfaces/TableDataInterface';

export const patientColumns: TableProps<DataType>['columns'] = [
  {
    title: 'Date & Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    align: "center",
    render: (text) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: 'Patient Name',
    dataIndex: 'patientName',
    key: 'patientName',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    ellipsis: true,
    align: "center",
    render: (text) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    render: (age) => {
      const ageText = `${age} yrs`;
      return (
        <Tooltip title={ageText}>
          <span>{ageText}</span>
        </Tooltip>
      );
    },
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    ellipsis: true,
    align: "center",
  },
  {
    title: 'Mobile Number',
    dataIndex: 'number',
    key: 'number',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    ellipsis: true,
    align: "center",
    render: (text) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: 'Reason of Visit',
    dataIndex: 'reason',
    key: 'reason',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    ellipsis: true,
    align: "center",
    render: (text) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
];
