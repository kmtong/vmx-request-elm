import { Loading } from 'element-ui'
import { MessageBox } from 'element-ui'

var loadInstance = null

export default {
    name: 'request-elm-ui',
    dependsOn: ['request'],
    extensions: {
        'request.ui': {
            loading(open: Boolean) {
                if (loadInstance == null && open) {
                    loadInstance = Loading.service({
                        lock: true,
                        fullscreen: true
                    })
                } else {
                    if (loadInstance && !open) {
                        loadInstance.close()
                        loadInstance = null
                    }
                }
            },
            error(err: any) {
                MessageBox.alert(`${err}`)
            }
        }
    }
}
