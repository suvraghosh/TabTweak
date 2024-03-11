const change_bg_btn = document.getElementById("change-bg-btn");
const bg_input = document.getElementById("upload-bg-input");


change_bg_btn.addEventListener('click', () =>{
    bg_input.click();
});

bg_input.addEventListener('change', (file) =>{
    menu.style.display = "none";
    const reader = new FileReader();

    reader.onload = () => {
        update_bg(reader.result)
    }
    reader.readAsDataURL(file.target.files[0]);
})