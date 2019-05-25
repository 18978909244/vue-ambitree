<template>
  <div id="block-reassurance">
    <ul>
      <li>
        <div class="block-reassurance-item"><img
            src="https://www.ambitree.in/modules/blockreassurance/img/ic_verified_user_black_36dp_1x.png"
          ><span class="h6">{{$t('common.zhengpin')}}</span></div>
      </li>
      <li>
        <div class="block-reassurance-item"><img
            src="https://www.ambitree.in/modules/blockreassurance/img/ic_local_shipping_black_36dp_1x.png"
          ><span class="h6">{{$t('common.shipFree')}}</span></div>
      </li>
      <li>
        <div class="block-reassurance-item"><img
            src="https://www.ambitree.in/modules/blockreassurance/img/ic_swap_horiz_black_36dp_1x.png"
          ><span class="h6">{{$t('common.tax')}}</span></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "message"
};
</script>


<style scoped lang="less">
</style>