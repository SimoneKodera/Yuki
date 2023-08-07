import { Tree } from "antd";
import { treeData } from "./data";

export const BetterTreePage = () => {

  return (
    <div className="page-container">
      <Tree
        checkable
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        treeData={treeData}
      />
    </div>
  )
}