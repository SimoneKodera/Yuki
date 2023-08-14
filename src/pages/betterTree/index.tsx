import React from 'react';
import { Tree } from "antd";
import { treeData } from "./data";
import { Empty } from '@bixi-design/core';
import { BixiProvider, enUS } from "@bixi-design/provider";

export const BetterTreePage = () => {

  return (
    <div className="page-container">
      <BixiProvider locale={enUS}>
        <Tree
          checkable
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          treeData={treeData}
        />
        <Empty></Empty>
      </BixiProvider>
    </div>
  )
}