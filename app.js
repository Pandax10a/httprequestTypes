
// listening on click on the submit button.  On click, grab_data function is run
document.getElementById(`listen_submit`).addEventListener(`click`, grab_data);

/* 2 variable is set inside the funtion to stored the information typed by the 
the user.  the .value is for accessing that stored information*/
function grab_data(details) {
    let user_entered_id = document.querySelector(`#user_id`).value;
    let user_entered_title = document.querySelector(`#user_input_title`).value;
    let user_entered_comment = document.querySelector(`#user_input_comment`).value;

    axios.request ({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: `${user_entered_title}`,
            body:   `${user_entered_comment}`,
            userId: `${user_entered_id}`
        }
    }).then(success11).catch(fail11);
    


}

function success11 (response22) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> Post successfully submited</h1>`);
}

function fail11(error22) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>Post failed to send</h1>`);
}


