import UserComponent from './TheUserComponent.js';

export default {
    name: "TheAllUsersComponent",

	template: `

    <div class="users_content_wrapper">
        <div class="users_content_align">

               
                <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>

                <div class="user_plus_sign_wrapper"><img class="users_plus_sign" src="./images/0_Plus.svg"></div>

                
        </div>
    </div>
	`,

	created: function() {
        // get all users fron DB
        fetch(`/ums/admin/getusers`)
            .then(res => res.json())
            .then(data => this.userList = data)
        .catch(err => console.error(err));
	},

	data() {
	  return (
          {	message: `Who's Using Roku?`, userList: [] }
      )
	},

	components: {
		user: UserComponent
	}
}