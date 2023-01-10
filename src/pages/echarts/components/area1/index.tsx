import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

/* TODO:
 * 改为响应式图表
 * 设置最小宽度为600
 * 改变标题样式
 * 改变画布背景色
 * 改变图表颜色
 */

export const Area1 = () => {
    const chart = useRef<any>();
    const option = {
        // color 这一行没有起作用
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: 'Gradient Stacked Area Chart'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
              label: {
                // 标签的背景色, 不支持rgba
              backgroundColor: 'lightblue'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        // 一共有五条线 在这里修改颜色
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              // 改变了最下方的图表颜色
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    // 好像只能是0
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 290]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 200]
          }
        ]
    };
    
  useEffect(() => {
    chart.current = echarts.init(document.getElementById('area') as HTMLElement);
    chart.current.setOption(option);
    return () => {
    }
  }, []);

  const resize = () => {
    chart.current.resize();
  }
    
  useEffect(() => {
      window.addEventListener('resize', () => {
        resize();
      })
  }) 
   
  return (
      <div className='area1-component'>
        <div id='area' style={{ width: '100%', height: '600px'}}>
            {/* 宽度可以设置为100%, 这代表画布在初始化时的宽度为容器宽度; 但不可以通过100%让图表变为自适应宽度的 */}
            </div>
      </div>
    )
}