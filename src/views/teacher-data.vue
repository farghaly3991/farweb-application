<template>
  <div class="container _cont">
    <h2 class="subtitle">بيانات المنصة</h2>

    <div class="_form">
      <div class="row justify-content-center align-items-end" dir="rtl">
        <div class="col-md-6">
          <div class="form-group">
            <label>site name</label>
            <input
              type="text"
              class="form-control"
              placeholder="أسم الموقع"
              v-model="siteData.siteName"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>Domain name (اسم رابط المنصة)</label>
            <input
              type="text"
              class="form-control"
              placeholder="اختار رابط للمنصة الخاصة بك"
              v-model="siteData.domain"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>teacher name</label>
            <input
              type="text"
              class="form-control"
              placeholder="أسم المدرس"
              v-model="siteData.name"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>phone number</label>
            <input
              type="text"
              class="form-control"
              placeholder="الموبايل"
              v-model="siteData.phone"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>Adress</label>
            <input
              type="text"
              class="form-control"
              placeholder="المكان"
              v-model="siteData.address"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>career</label>
            <input
              type="text"
              class="form-control"
              placeholder="تخصص المدرس"
              v-model="siteData.career"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>facebook</label>
            <input
              type="text"
              class="form-control"
              placeholder="صفحة الفيسبوك"
              v-model="siteData.facebook"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>email</label>
            <input
              type="text"
              class="form-control"
              placeholder="الأيميل"
              v-model="siteData.email"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>whatsapp</label>
            <input
              type="text"
              class="form-control"
              placeholder="رقم الواتساب"
              v-model="siteData.whatsapp"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>telegram</label>
            <input
              type="text"
              class="form-control"
              placeholder="لينك التليجرام"
              v-model="siteData.telegram"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>طريقة الدفع</label>
            <input
              type="text"
              class="form-control"
              placeholder="طريقة الدفع"
              v-model="siteData.payMethod"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-6">
          <div class="form-group">
            <label>رقم خدمة الدفع</label>
            <input
              type="text"
              class="form-control"
              placeholder="رقم خدمة الدفع"
              v-model="siteData.cashNumber"
            />
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <!-- <div class="col-md-6">
          <div class="form-group">
            <label>اختر لون مدرج من اللينك اسفله واطبع الكود في هذه الخانة</label>
            <a
              target="__blank"
              href="https://css-gradient.com"
              class="btn-block btn-outline text-right"
              >اختر اللون من هنا</a
            >
            <input
              @change="(e) => pickColor(e)"
              v-model="siteData.color"
              id="color"
              class="form-control"
              type="text"
              placeholder="ضع كود اللون هنا"
            />
          </div>
        </div> -->
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-9">
          <div class="form-group">
            <label>اختر صورة للموقع</label>
            <input
              @change="pickImages"
              ref="files"
              type="file"
              class="form-control"
              multiple
            />
          </div>

          <div v-if="images_displays" class="display">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <img
                  width="100%"
                  sizes="(min-width: 30em) 30em, 100vw"
                  :src="images_displays"
                  :alt="'img'"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <!------------------------------------------------>
    <section>
      <h3 class="subtitle">الأعدادات</h3>
      <div class="row">
        <div class="col-md-12" dir="rtl">
          <div class="check">
            <input type="checkbox" :value="true" v-model="siteData.showStudentsCount" />
            <label>أظهار عدد الطلبة في الصفحة الرئيسية</label>
          </div>
        </div>
        <!---------------------------------------------------------->
        <!---------------------------------------------------------->
        <div class="col-md-12" dir="rtl">
          <div class="check">
            <input type="checkbox" :value="true" v-model="siteData.watermark" />
            <label>تفعيل العلامة المائية المتحركة على الفيديوهات</label>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------>

    <br />
    <hr />

    <div v-if="loading" class="center">
      <loading />
    </div>
    <!-------------------------------------------->
    <div class="row justify-content-center">
      <div class="col-md-6">
        <button :disabled="!isValid()" class="btn btn-success" @click="submit">
          submit
        </button>
      </div>
      <div class="col-md-12">
        <div v-if="success" class="center">
          <h3 style="color: green">{{ success }}</h3>
        </div>
        <div v-if="error" class="center">
          <h3 style="color: red">{{ error }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    if (this.$route.params.id) {
      axios.get("/getTeacherDataById/" + this.$route.params.id).then((res) => {
        if (res.data.err) return alert(res.data.err);
        this.siteData = res.data.teacherData;
      });
    }
  },
  data() {
    return {
      siteData: {
        siteName: "",
        name: "",
        phone: "",
        address: "",
        career: "",
        facebook: "",
        email: "",
        whatsapp: "",
        telegram: "",
        payMethod: "",
        cashNumber: "",
        // color: "",
        image1: "",
        domain: "",
        showStudentsCount: true,
        watermark: true,
      },
      image: null,
      images_displays: null,
      loading: false,
      success: null,
      error: null,
    };
  },
  computed: {},
  methods: {
    submit() {
      // if (!this.isValid()) return alert("اكمل البيانات");
      const formData = new FormData();
      for (let data in this.siteData) {
        if (data == "image1" && this.image) continue;
        if (!this.siteData[data] || this.siteData[data] == "") continue;
        formData.append(data, this.siteData[data]);
      }
      formData.append("image", this.image);
      this.error = null;
      this.success = null;
      this.loading = true;
      axios.patch("/updateadminData", formData).then((res) => {
        this.loading = false;
        if (res.data.err) return (this.error = res.data.err);
        this.siteData.image1 = res.data.image;
        this.siteData.siteName == "";
        this.success = "تم وضع المعلومات بنجاح";
        this.downloadData();
      });
    },
    downloadData() {
      const siteData = {};
      for (let data in this.siteData) {
        if (
          !this.siteData[data] ||
          this.siteData[data] == "" ||
          this.siteData[data] == "null"
        )
          continue;
        siteData[data] = this.siteData[data];
      }

      ////////////////////////////////////////////////
      const a = document.createElement("a");
      a.href = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(siteData)
      )}`;
      a.download = `${this.siteData.siteName.replace(" ", "-")}.json`;
      a.click();
    },
    pickImages() {
      this.image = null;
      this.images_displays = null;
      const files = this.$refs.files.files;
      const file = files[0];
      // files.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert("حجم الصورة أكبر من المسموح به");
        return;
      }
      if (!["jpg", "jpeg", "png"].includes(file.type.split("/")[1])) {
        alert("مسموح فقط بالصور");
        return;
      }
      this.image = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.images_displays = reader.result;
      };
      // });
    },
    pickColor(e) {
      const value = e.target.value;

      const color =
        "linear-gradient(" + value.split("background: linear-gradient(")[1].split(";")[0];
      const parts = color.split(",");
      if (parts.length == 0) return (this.siteData.color = value);
      const main = parts[0];
      const color1 = parts[1] + "b3";
      const color2 = parts[2].replace(")", "") + "d1)";
      this.siteData.color = [main, color1, color2].join(",");
    },

    isValid() {
      let isValid = true;
      if (
        this.siteData.siteName == "" ||
        this.siteData.name == "" ||
        this.siteData.phone == "" ||
        this.siteData.career == ""
      )
        isValid = false;
      // for (let key in this.siteData) {
      //   console.log(this.siteData[key]);
      //   if (
      //     this.siteData[key] == "" &&
      //     (key != "image" || key != "showStudentsCount" || key != "watermark")
      //   ) {
      //     isValid = false;
      //     break;
      //   }
      // }
      return isValid;
    },
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
