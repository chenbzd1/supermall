  <template>
  <div class="tabcontrol">
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :key="index"
      @click="btncurrent(index)"
    >
      <!-- 不是调转,当前页面局部刷新 -->
      <span :class="{ current: index === currentindex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 给个默认值0就是默认第一个红了,搞清为什么红
      currentindex: 0,
    };
  },
  methods: {
    // 子传父理所当然的东西
    btncurrent(index) {
      this.currentindex = index;
      this.$emit("btnclickx", index);
      // console.log(index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  background-color: rgb(209, 191, 164);
  line-height: 38px;
  text-align: center;
  /* position: sticky; */
  /* top: 48px; */
  z-index: 99;
  /* margin-top: -3px; */
}
.tab-item {
  flex: 1;
}
.tab-item span {
  /* display: inline-block; */
  padding: 6px 8px;
}
.current {
  color: red;
  border-bottom: 2px solid red;
}
</style>