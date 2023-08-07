//状态集中管理
//数据实现响应式
//使用场景: 权限管理 路径 对用户进行权限限制
 
import { reactive } from "vue"
 
//ref-->字符串,数字 reactive-->对象中存储
const loadingStore={
  //定义状态
  state:reactive({
	LoadingModel: false,
  })
};
//在App组件通过provide提供
export default loadingStore