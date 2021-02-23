document.querySelector('#edit-profile').addEventListener('click', ()=>{
    document.getElementById('profile-photo').click();
});

var openFile = (e) => {
    if(e.files[0]){
        const reader = new FileReader();
        reader.onload = (e) => {
            document.querySelector('#profile-picture').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(e.files[0]);
    }
  };

document.querySelector('#profile-picture').addEventListener('click', ()=>{
    document.getElementById('showimg').src = document.getElementById('profile-picture').src;
    document.getElementById('launchImg').click();
});