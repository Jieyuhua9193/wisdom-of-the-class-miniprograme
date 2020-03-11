import {post} from '@/common/utils/request'

export default {
  login: post('/mini/login'),
  getClassInfo: post('class/get')
}
