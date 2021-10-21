const modals = document.querySelectorAll(".modal");

const PORT = 5000;

let activeModal = 0;
let characterLimit = 20;
let passwordVisiblity = false;
let darkTheme = false;

function toggleModal(number) {
    modals[activeModal].classList.remove("active-modal");
    modals[number].classList.add("active-modal");

    activeModal = number;
}

function checkInputValue() {
    const username = document.getElementById("signup-username");
    const limitp = document.getElementById("username-characters");

    if (
        username.value.length > characterLimit ||
        username.value.includes(" ")
    ) {
        username.value = username.value.substring(0, username.value.length - 1);
    }

    limitp.innerHTML = characterLimit - username.value.length;
    limitp.style.color = "gray";

    if (username.value.length >= characterLimit) {
        limitp.style.color = "crimson";
    }
}

function togglePassword() {
    if (passwordVisiblity) {
        document.getElementById("signup-password").type = "password";
        document.getElementById("visibility-eye").src = "./icons/eye_off.svg";
    } else {
        document.getElementById("signup-password").type = "text";
        document.getElementById("visibility-eye").src = "./icons/eye_on.svg";
    }
    passwordVisiblity = !passwordVisiblity;
}

function initialize() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        toggleTheme();
    }

    document.getElementById("username-characters").innerHTML =
        characterLimit -
        document.getElementById("signup-username").value.length;
}

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function toggleTheme() {
    darkTheme = !darkTheme;
    if (darkTheme) {
        document
            .querySelector(":root")
            .style.setProperty("--text-color", "white");
        document
            .querySelector(":root")
            .style.setProperty("--background-1", "#1b2028");
        document
            .querySelector(":root")
            .style.setProperty("--border-color", "#171a1f");
        document
            .querySelector(":root")
            .style.setProperty("--icon-brightness", 1);
        document.getElementById("theme-toggler").src = "./icons/darkactive.svg";
    } else {
        document
            .querySelector(":root")
            .style.setProperty("--text-color", "black");
        document
            .querySelector(":root")
            .style.setProperty("--background-1", "#ffffff");
        document
            .querySelector(":root")
            .style.setProperty("--border-color", "#cccccc");
        document
            .querySelector(":root")
            .style.setProperty("--icon-brightness", 0);
        document.getElementById("theme-toggler").src =
            "./icons/darkinactive.svg";
    }
}

document.getElementById("signup-email").onblur = function () {
    if (validateEmail(document.getElementById("signup-email").value)) {
        document.getElementById("email-confirm-div").style.background =
            "#2ECC71";
    } else {
        document.getElementById("email-confirm-div").style.background =
            "crimson";
    }
};

async function SignUp() {
    if (validateEmail(document.getElementById("signup-email").value)) {
        const data = await (
            await fetch(`http://localhost:${PORT}/user/create`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: document.getElementById("signup-username").value,
                    password: document.getElementById("signup-password").value,
                }),
            })
        ).json();

        if (data.error !== undefined) {
            console.log(data);
        } else {
            console.log("Error ", data.error);
        }
    }
}

initialize();
