<template>
  <div class="container-fluid">
    <h3 class="text-center">{{ title }}</h3>
    <hr />
    <!--------------------------->
    <div style="width: 100%; color: #555; padding: 5px">
      <div v-if="loading" class="center">
        <loading />
      </div>
      <div v-if="items.length == 0 && !loading" class="center not-found">
        <h5 style="color: #c65151d4">لا توجد نتائج</h5>
      </div>
    </div>
    <!------------------------->

    <div class="table-cont">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th v-for="name in colsNames" :key="name" scope="col">
              {{ name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td v-for="title in cols" :key="title">{{ item[title] | stage }}</td>
            <td>
              <div class="row justify-content-center p-0 m-0">
                <div v-for="(btn, b) in btns" :key="b" class="col py-0">
                  <i @click="btn.method(item, items)" :class="'fa fa-' + btn.icon"></i>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "items", "loading", "cols", "colsNames", "btns", "color"],

  methods: {},
};
</script>

<style lang="scss" scoped>
.table-cont {
  width: 100%;
  overflow: auto;
  max-height: 500px;
}
.table {
  position: relative;
  min-width: 700px !important;
  td {
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
}
</style>
