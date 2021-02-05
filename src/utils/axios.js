import axios from 'axios'

class HttpManager {
  static _instance
  constructor() {
    console.log('axios初始化');
    this._axios = axios.create({
      baseURL: 'http://localhost:1337',
      timeout: 30000,
    })
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  static getInstance(){
    this._instance || (this._instance = new HttpManager())
    return this._instance
  }

  get(url, parmas ={}, config = {}) {
    return this._axios.get(url, parmas, config)
  }

  post(url, data ={}, config = {}) {
    return this._axios.post(url, data, config)
  }

  interceptorsRequest(){}

  interceptorsResponse(){}
}

export default HttpManager.getInstance()
