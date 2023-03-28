import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "../../http/index";
import './index.scss';

export const AllPage = () => { 
  const [data, setData] = useState<any>([]);

  const columns = [
    {
      title: 'Nirakana',
      key: 'nirakana',
      dataIndex: 'nirakana'
    },
    {
      title: 'Tone',
      key: 'tone',
      dataIndex: 'tone'
    },
    {
      title: 'Word',
      key: 'word',
      dataIndex: 'word'
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type'
    },
    {
      title: 'Meaning',
      key: 'meaning',
      dataIndex: 'meaning'
    },
    {
      title: 'Lesson Number',
      key: 'lesson_number',
      dataIndex: 'lesson_number'
    },
    {
      title: 'Example',
      key: 'example_sentence',
      dataIndex: 'example_sentence'
    },
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
        <Table columns={columns} dataSource={data} rowKey='id'></Table>
      </section>
    </div>
  )
}