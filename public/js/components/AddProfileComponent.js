export default {
    name: "AddProfileComponent",

	template: `

    <section class="options_wrapper">
        <div class="options_title">
            <h1>Add Profile</h1>
            <hr>
            <p>Add a profile for another person to watch Roku Flashback</p>
        </div>

        <img src="" alt="">
        
        <div class="options_form">
            <div class="otions_form_row">
                <div class="options_form_item">
                    <input class="login_input" type="text" placeholder="Name">
                </div>
                <div class="options_form_item">
                    <div class="options_form_kids">
                        <h3>KID?</h3>
                        <img src="" alt="Kids status">
                    </div>
                </div>
            </div>
            <div class="otions_form_row">
                <div class="options_form_item">
                    <a><input type="submit" class="login_button"  value="Continue"></a>
                </div>
                <div class="options_form_item">
                    <a><input type="submit" class="login_button"  value="Cancel"></a>
                </div>
            </div>
        </div>
    <section>
        `
	
}