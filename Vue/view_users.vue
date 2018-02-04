<template>
    <h1>Users Page</h1>
    <div class="col-lg-12">
        <table class="table table-bordered">
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                <th>Time</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
            <tr v-for="(user, index) in users">
                <td>{{ index +1 }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age | checkAge }}</td>
                <td>{{ user.job }}</td>
                <td>{{ user.time | moment("from", "now", true) }}</td>
                <td>
                        <span v-if="user.gender == 'female'">
                            <span style="color: red; font-weight: bold;"> {{ user.gender }} </span>
                        </span>
                    <span v-if="user.gender == 'male'">
                            <span style="color: green; font-weight: bold;"> {{ user.gender }} </span>
                        </span>
                </td>
                <td>
                    <button class="btn btn-danger" @click="removeUser(index)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ["users"],
        data() {
            return {}
        },
        methods:{
            removeUser:function (index) {
                this.$parent.users.splice(index, 1);
            }
        },
        filters:{
            checkAge:function (age) {
                if(age < 18)
                    return age + " U Kid";
                else if(age > 18 && age < 50)
                    return age + " U Young Man";
                else
                    return age + " U Old Man";
            }
        }
    }
</script>
