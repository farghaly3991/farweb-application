<template>
  <div class="page-footer">
    <a target="__blank" href="https://www.facebook.com/FarWeb-108175751517418">
      <strong>Devoloped by </strong> <span>FarWeb</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.page-footer {
  z-index: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-top: 170px;
  background-color: #cccecec6;
  width: 100%;
  padding: 10px;
  text-align: center;
  @media (max-height: 500px) {
    display: none;
  }
  a {
    text-align: center;
    font-weight: bolder;
    color: rgb(0, 0, 0);
  }
}
</style>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
