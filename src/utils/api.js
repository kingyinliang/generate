import router from '@/router.js'
import Work from 'core/models/work.js'
import Http from './axios'

export function createWork() {
  Http.post('works', new Work()).then(({data}) => {
    const routeData = router.resolve({name: 'editor', params: {workId: data.id}})
    window.open(routeData.href, '_blank')
  })
}

export function getWork() {
  return Http.get('works', {
    is_template: false
  })
}

export function getWorks(id) {
  return Http.get('works', id)
}
