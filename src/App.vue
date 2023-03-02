<template>
  <div>
    <router-view name="header" />
    <transition name="slide" mode="out-in">
      <div class="page">
        <router-view></router-view>
      </div>
    </transition>
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";
import AppFooter from "./components/footer.vue";

export default {
  async created() {},
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    $route(to) {},
  },
  name: "app",
  components: {
    AppFooter,
  },
  methods: {},
};
</script>

<style scope lang="scss">
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
* {
  font-family: "Cairo";
}
.page {
  padding: 70px 2px;
}

///////////////////CHAT-END////////////////////////
.slide-leave-active {
  transition: opacity 0.2s ease;
  opacity: 0;
  animation: slide-out 0.2s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
