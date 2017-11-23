/**
 * Created by zwwill on 2017/8/28.
 */
import APP from './APP.vue'
import router from './router'
import mixins from './mixins/publicMixin'

// // register global mixins.
Vue.mixin(mixins);

new Vue(Vue.util.extend({ el: '#root', router }, APP));

router.push('/');
