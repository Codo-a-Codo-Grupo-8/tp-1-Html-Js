document.addEventListener('DOMContentLoaded', () => {
    const userLogin = document.getElementById('user');
    const passLogin = document.getElementById('pass');
    const btnLogin = document.getElementById('btnLogin');
    const formLogin = document.getElementById('formLogin');
    const cerrarDialog = document.getElementById('cerrarDialog');
    const dialogAlerta = document.getElementById('alertaDialog');
    const alertaMsg = document.getElementById('alertaMsg');
    let errorMsg = false;
    // btnLogin.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log('btn');
    // })
    // userLogin.addEventListener('blur', () => {
    //     console.log("user");
    //     verifyInput(userLogin, 'Complete Usuario');
    // });

    // passLogin.addEventListener('blur', () => {
    //     verifyInput(passLogin, "Debe ingresar Password");
    // });
    // cerrarDialog.addEventListener('click', () => {
    //     dialogAlerta.close();
    // });

    btnLogin.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (passLogin.value == "" || userLogin.value == "") {
            if (userLogin.value == "") {
                alert("El usuario no tiene datos.");
                return false;
            }
            if (passLogin.value == "") {
                alert("El password no tiene datos.");
                return false;

            }
        } else {
            alert("SE ENVIO FORMULARIO.");
            window.location.href = '/';
            return true;
        }
    });
    const verifyInput = (element, msg = null) => {
        if (element.value.trim() === "") {
            element.classList.add('input-error');
            if (msg) {
                alertaMsg.innerHTML = `<h1> ${msg}</h1>`;
            }
            dialogAlerta.showModal();
        } else {
            element.classList.remove('input-error');
        }
    }

});


