<template>
  <b-modal
    title-tag="h2"
    :title="fullName"
    :visible="isOpen"
    @hide="close"
    hide-footer
  >
    <div class="row">
      <div class="col-12">
        <div class="row form-group p-1">
          <div class="col-4">
            <label for="date">Date:</label>
          </div>
          <div class="col-8">
            <span id="date">{{ _dateFormat(registeredDate) }}</span>
          </div>
        </div>
        <div class="row form-group p-1">
          <div class="col-4">
            <label for="gender">Gender:</label>
          </div>
          <div class="col-8">
            <span id="gender">{{
              gender.charAt(0).toUpperCase() + gender.slice(1)
            }}</span>
          </div>
        </div>
        <div class="row form-group p-1">
          <div class="col-4">
            <label for="country">Country:</label>
          </div>
          <div class="col-8">
            <span id="country">{{ country }}</span>
          </div>
        </div>
        <div class="row form-group p-1">
          <div class="col-4">
            <label for="email">Email:</label>
          </div>
          <div class="col-8">
            <span id="email">{{ email }}</span>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      gender: "",
      email: "",
      registeredDate: "",
      country: "",
      fullName: "",
    };
  },
  methods: {
    async open(data) {
      this.isOpen = true;

      if (data) {
        this.registeredDate = data.registered.date;
        this.email = data.email;
        this.gender = data.gender;
        this.country = data.location.country;
        this.fullName = data.name.first + " " + data.name.last;
      }
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
