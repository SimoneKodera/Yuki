import { Table, Space, TableColumnProps } from "antd";
import { useEffect, useState } from "react";
import axios from "../../http/index";
import './index.scss';
import {
  DeleteOutlined
} from '@ant-design/icons';

interface ColumnType extends TableColumnProps<any> {
  align?: 'center';
}

export const AllPage = () => { 
  const [data, setData] = useState<any>([]);

  const columns: ColumnType[] = [
    {
      title: 'Nirakana',
      key: 'nirakana',
      dataIndex: 'nirakana',
      align: 'center',
    },
    {
      title: 'Tone',
      key: 'tone',
      dataIndex: 'tone',
      align: 'center',
    },
    {
      title: 'Word',
      key: 'word',
      dataIndex: 'word',
      align: 'center',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: 'Meaning',
      key: 'meaning',
      dataIndex: 'meaning',
      align: 'center',
    },
    {
      title: 'Lesson Number',
      key: 'lesson_number',
      dataIndex: 'lesson_number',
      align: 'center',
    },
    {
      title: 'Example',
      key: 'example_sentence',
      dataIndex: 'example_sentence',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '',
      align: 'center',
      render: () => ( 
        // <Space>
          <DeleteOutlined />
        // </Space>
      )
    }
  ]

  useEffect(() => {
    axios.get('/all').then(res => {
      console.log(res);
      setData(res)
    })
  }, []);

  return (
    <div className="all-page">
      <br />
      <section className="table-wrapper">
        <Table columns={columns} dataSource={data} rowKey='id' pagination={{
          showSizeChanger: false
        }}></Table>
      </section>
    </div>
  )
}