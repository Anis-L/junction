<script>

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            if (this.email == 'admin@test.com' && this.password == 'admin') {
                navigateTo('dashboard')
            }
        }    
    },
}

</script>

<template>
    <div class="login">
        <div class="signin">
            <NuxtLink to="/"><img src="/img/logo.png" alt="LOGO" class="logo"></NuxtLink>
            <div class='form'>
                <h3>Welcome Back!</h3>
                <p>Don't have an account? <NuxtLink to="signup">Sign Up</NuxtLink></p>
                <form @submit.prevent="login()">
                    <div class="inputs">
                        <div class="input">
                            <label for="email">Email:</label>
                            <InputText class="m-input" v-model="email" id="username" aria-describedby="username-help" placeholder="Enter Email" required />
                        </div>
                        <div class="input">
                            <label for="password">Password:</label>
                            <Password class="m-input" v-model="password" toggleMask :feedback="false" placeholder="Enter Password" />
                        </div>
                    </div>
                    <div class="forgot">
                        <a href="forgot-password">Forgot Password?</a>
                    </div>
                    <button class="submit">Login</button>
                </form>
                <div class="or">
                    Or Login With
                </div>
                <div class="socials">
                    <div class="google">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google">
                        <span>Google</span>
                    </div>
                    <div class="facebook">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="Facebook">
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="https://cdn.discordapp.com/attachments/953413775149633536/1083825091252584570/Raymond_Gulapa_native_city_is_partially_submerged_in_a_water_la_c3718468-b14c-4cdf-883e-58e73522377c.png" alt="">
        </div>
    </div>
</template>

<style scoped>
    .login {
        height: 100vh;
        min-width: 100vw;
        display: flex;
    }

    .signin {
        width: 50%;
        padding: 2rem 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image {
        width: 50%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 10rem;
    }

    .form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
    }

    h3 {
        margin: 0;
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.5);
    }

    form {
        margin-top: 2rem;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .input {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    label {
        font-size: 1rem;
        font-weight: 500;
    }

    a {
        color: #3EB073;
    }

    .forgot {
        width: 100%;
        font-size: 0.8rem;
        text-align: end;
    }

    .submit {
        margin-top: 1rem;
        width: 100%;
        padding: 1rem 1.25rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        background: #3EB073;
        color: #ffffff;
        cursor: pointer;
    }

    .or {
        margin: 1rem auto;
        font-size: 0.95rem;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.35);
    }

    .socials {
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .socials div {
        width: 50%;
        padding: 1rem 1.25rem;
        border-radius: 0.5rem;
        border: 1px solid #d7e1eb;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .socials div img {
        height: 1.25rem;
        width: 1.25rem;
    }
    .socials div span {
        font-size: 1rem;
    }
</style>