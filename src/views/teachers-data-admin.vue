<template>
  <div class="container _cont">
    <h2 class="subtitle">بيانات المدرسين</h2>

    <app-table
      title=""
      :items="apps"
      :cols="['siteName', 'name', 'phone', 'career', 'link']"
      :colsNames="['أسم المنصة', 'أسم المدرس', 'الموبايل', 'المادة', 'لينك المنصة']"
      :loading="loading"
      color="#222f22"
      :btns="[
        {
          icon: 'pencil',
          method: (teacher) => $router.push('findTeacher/' + teacher._id),
        },
        { icon: 'trash', method: deleteApp },
      ]"
    />

    <br />
    <hr />
    <!------------------------------------------------>

    <br />
    <hr />

    <div v-if="loading" class="center">
      <loading />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("/getAdminData").then((res) => {
      this.apps = res.data.apps;
    });
  },
  data() {
    return {
      apps: [],
    };
  },
  methods: {
    deleteApp(item, items) {},
  },
};
</script>

<style lang="scss" scoped>
._cont {
  background: rgba(255, 255, 255, 0.846);
  padding: 13px;
  border: 3px solid rgba(8, 27, 74, 0.631);
}
.button {
  background: rgb(104, 103, 102);
  color: #fff;
  @media (max-width: 600px) {
    width: 100%;
  }
}
.pick-images {
}
.img-fluid {
  height: 300px;
}

.check {
  direction: ltr;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: fit-content;
  label {
    margin: 0 12px;
    font-size: 1rem;
    width: 90;
  }
  input {
    width: 20px;
    height: 20px;
  }
}
</style>
