import { Table, TableColumnProps } from "antd";
import { useEffect, useState } from "react";
import axios from "../../http/index";


interface TableData {
  example_sentence?: string;
  id: number;
  lesson_number: string;
  meaning: string;
  nirakana: string;
  tone: string;
  type: string;
  word: string;
}
interface ColumnType extends TableColumnProps<TableData> {
  align?: 'center';
}

export const DeletedPage = () => { 
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
    }
  ]

  useEffect(() => {
    axios.get('/deleted').then(res => {
      setData(res);
    })
  }, []);

  return (
    <div className="deleted-page">
      <br />
      <section className="table-wrapper" style={{padding: '0 100px'}}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey='id'
          pagination={{
          showSizeChanger: false
        }}></Table>
      </section>
    </div>
  )
}