import router from '@/router.js'
import Work from 'core/models/work.js'
import Http from './axios'

export function createWork() {
  Http.post('/work/insert', new Work()).then(({data}) => {
    const routeData = router.resolve({name: 'editor', params: {workId: data.data.id}})
    window.open(routeData.href, '_blank')
  })
}

export function getWork(id) {
  return Http.get('/work/query', {
    id
  })
}

export function getWorks() {
  return Http.get('/work/query')
}

export function updateWorks(work) {
  return Http.post('/work/update', work)
}

