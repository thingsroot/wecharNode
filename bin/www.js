const express = require('express');
const http = require('../common/http');
const app = express();

//获取网关列表
app.get('/get_gateway_list', function(req, respones){
  http.get('gateways_list', {}).then(res=>{
    console.log(res, 'res')
    if (res.data.ok) {
      const arr = []
      res.data.data.length > 0 && res.data.data.map(item=>{
        if (item.device_status === 'ONLINE') {
          arr.push(item)
        }
      })
      console.log(arr, 'arr')
      respones.send({
        ok: true,
        data: arr
      })
    }
  })
})
// 获取点表数据
app.get('/gateway_devf_data', function(req, respones) {
  http.get('gateway_devf_data', req).then(res=>{
    console.log(res)
    if (res.data.ok){
      respones.send(res.data.data)
    }
  })
})
// 发送指令
app.post('/gateways_dev_commands', function(req, respones) {
  http.post('gateways.devices.command', req).then(res=>{
    console.log(res)
    if (res.data.ok){
      respones.send(res.data.data)
    }
  })
})
// 接收服务器信息提示
app.get('/accept_signal', function(req, res){
  // 去向服务器请求数据
  axios.post('www.ioe.thingsroot.com/getinfo').then(res=>{
    if (res.ok) {
      // 发送数据到小程序
    }
  })
})
// 获取详细信息
app.post('detail_message', function(req, res){
  // 向服务器请求详细信息
  axios.post('www.ioe.thingsroot.com/detail_message').then(res=>{
    if (res.ok) {
      // 返回给小程序详细数据
      res.send(res.data)
    }
  })
})
app.listen(7777, function(){
    console.log('this port is 7777 ...')
})