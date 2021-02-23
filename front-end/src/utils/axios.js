import axios from 'axios'

class HttpManager {
  static _instance
  constructor() {
    console.log('axios初始化');
    this._axios = axios.create({
      baseURL: 'http://localhost:3000/v1',
      timeout: 30000,
    })
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  static getInstance(){
    this._instance || (this._instance = new HttpManager())
    return this._instance
  }

  get(url, params ={}, config = {}) {
    return this._axios.get(url, {
      ...config,
      params
    })
  }

  post(url, data ={}, config = {}) {
    return this._axios.post(url, data, config)
  }

  interceptorsRequest(){}

  interceptorsResponse(){}
}

export default HttpManager.getInstance()
