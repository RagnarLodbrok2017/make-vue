<template>
    <div class="row">
        <div class="col-xs-3 col-md-3 col-lg-3">
            <input type="text" placeholder="name" class="form-control" v-model="name">
        </div>
        <div class="col-xs-3 col-md-3 col-lg-3">
            <input type="number" placeholder="Age" class="form-control" v-model="age">
        </div>
        <div class="col-xs-3 col-md-3 col-lg-3">
            <input type="text" placeholder="job" class="form-control" v-model="job">
        </div>
        <div class="col-xs-3 col-md-3 col-lg-3">
            <select name="" id="" v-model="gender" class="form-control">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </div>
        <div class="col-md-12 text-center" style="margin-top: 20px;">
            <button type="button" class="btn btn-outline-primary" @click="addUser()" v-bind:disabled="dis">Add
                user
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              name:'',
              age:'',
              job:'',
              gender:'male',
          }
        },
        computed:{
            dis: function () {
                if (this.name == '' || this.age == '' || this.job == ''){
                    return true;
                }else {
                    return false;
                }
            }
        },
        methods:{
            addUser: function () {
                var newPerson = {
                    name : this.name,
                    age : this.age,
                    job : this.job,
                    gender: this.gender,
                    time:new Date().getTime(),
                };
                this.$parent.users.push(newPerson);
                this.name= "";
                this.age= "";
                this.job= "";
                this.gender = "male";
            },
        },
    }
</script>