import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

/* istanbul ignore next */
SvgIcon.install = function(Vue) {
  Vue.component('svg-icon', SvgIcon)
};

export default SvgIcon;

