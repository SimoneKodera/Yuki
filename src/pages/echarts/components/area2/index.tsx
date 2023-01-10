import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

/* TODO:
 * 改为响应式图表
 * 设置最小宽度为600
 * 改变标题样式
 * 改变画布背景色
 * 改变图表颜色
 */

export const Area2 = () => {
    const chart = useRef<any>();
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    
    useEffect(() => {
        chart.current = echarts.init(document.getElementById('area2') as HTMLElement);
        chart.current.setOption(option);
    }, [])
    
    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         console.log('resized');
    //         chart.current.resize();
    //     })
    // })
   
    return (
        <div className="area2-component">
            <div id='area2' style={{ width: '400px', height: '400px' }}>

            </div>
        </div>
    )
}