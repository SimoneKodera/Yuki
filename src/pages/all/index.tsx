import { Table, TableColumnProps, message } from "antd";
import { useEffect, useState } from "react";
import axios from "../../http/index";
import hotkeys from 'hotkeys-js';
import { cloneDeep, uniq } from "lodash-es";
import './index.scss';
import { setTwoToneColor } from "@ant-design/icons/lib/components/twoTonePrimaryColor";
import { setTimeout } from "timers/promises";


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

export const AllPage = () => { 
  const [data, setData] = useState<any>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

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
    axios.get('/all').then(res => {
      setData(res);
    })
  }, []);

  useEffect(() => {
    hotkeys('ctrl+backspace', deleteWords)
    return () => {
      hotkeys.unbind('ctrl+backspace');
    }
  }, [selectedRowKeys])

  const deleteWords = () => {
    if (!selectedRowKeys.length) {
      message.info({ content: 'No words to delete' });
      return;
    }
    console.log('deleted:', selectedRowKeys);
    axios.delete('/all', {
      params: {
        list: selectedRowKeys
      }
    }).then(res => {
      setSelectedRowKeys([]);
      setData(res);
      message.success({ content: 'Delete Succeed'});
    })
  }

  const handleRowClick = (record: TableData) => {
    if (!selectedRowKeys.includes(record.id)) {
      setSelectedRowKeys(cloneDeep(uniq([...selectedRowKeys, record.id])));
    } else {
      setSelectedRowKeys(cloneDeep(selectedRowKeys.filter(id => id !== record.id)));
    }
  };

  const rowClassName = (record: TableData) => {
    return selectedRowKeys.includes(record.id) ? 'selected-row' : '';
  };

  return (
    <div className="all-page">
      <br />
      <section className="table-wrapper">
        <Table
          columns={columns}
          dataSource={data}
          rowKey='id'
          onRow={(record) => ({
            onClick: () => {
              handleRowClick(record)
            }
          })}
          rowClassName={rowClassName}
          pagination={{
          showSizeChanger: false
        }}></Table>
      </section>
    </div>
  )
}