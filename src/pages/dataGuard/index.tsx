import { useEffect } from "react"

export const DataGuardPage = () => {
  // 页面关闭提示, 路由跳转提示, 组件key改变提示, 组件卸载提示

  const alert = () => {
    return ''
  }

  useEffect(() => {
    window.onbeforeunload = alert;
  }, []);

  return (
    <div className="page-container">
      <div>当离开当前路由时, 弹出确认框</div>
    </div>
  )
}
