// 引入countUI组件
import CountUI from './count'
// 引入连接redux
import { connect } from 'react-redux'
import { add } from './store'
const mapStateToProps = (state) => {
    return { count: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAdd: (number) => {
            dispatch(add({value:number}))
        }
    }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer
