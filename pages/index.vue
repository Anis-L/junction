<script>

export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                },
                {
                    label: 'About US',
                    icon: 'pi pi-fw pi-info-circle',
                },
                {
                    label: 'Featured',
                    icon: 'pi pi-fw pi-cog',
                },
                {
                    label: 'Contact US',
                    icon: 'pi pi-fw pi-comments',
                },
            ]
        }
    }
};

</script>

<template>
    <div>
        <header>
            <Menubar :model="items">
                <template #start>
                    <img alt="logo" src="/img/logo.png" class="logo" />
                </template>
                <template #end>
                    <NuxtLink to="login"><Button>Login</Button></NuxtLink>
                </template>
            </Menubar>
            <div class="slogan">
                <h1>Learn <b>Robotics</b><br>Through Fun<br>And Play</h1>
            </div>
        </header>
        <section class="about" id="about">
            <div class="image">
                <img src="/img/about.png" alt="">
            </div>
            <div class="text">
                <h3>About US</h3>
                <p>
                    MoBot est une série de kit de robotique gradué par niveau de complexité dédie aux petits comme aux grands développé et produits en Algérie. Ils ont comme objectif de faire voyager leurs chanceux détenteurs dans le vaste domaine de la robotique tout en leurs apprenant les différentes notions nécessaires pour chaque kit a travers des playlists de vidéos.
                </p>
            </div>
        </section>
        <section class="contact" id="contact">
            <h3>Contact US</h3>
            <form action="">
                <div class="inputs">
                    <div class="input">
                        <label for="name">Name:</label>
                        <InputText class="m-input" placeholder="Enter Name" required />
                    </div>
                    <div class="input">
                        <label for="email">Email:</label>
                        <InputText class="m-input" placeholder="Enter Email" required />
                    </div>
                    <div class="input">
                        <label for="msg">Message:</label>
                        <Textarea autoResize rows="5" cols="30" placeholder="Enter Message" />
                    </div>
                </div>
                <button class="submit">Send</button>
            </form>
        </section>
    </div>
</template>

<style>
.p-menubar {
    padding: 1rem 4rem;
    border-radius: 0;
    background: transparent;
    border: 0 none;
    color: #000000;
}

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #ffffff;
    font-size: 1.25rem;
}

.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #ffffff;
    background: transparent !important;
}

.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #ffffff;
}

.p-button, .p-button:enabled:hover {
    background: #E83C35;
    border-radius: 0.5rem;
    font-weight: 700;
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
}
</style>

<style>
.p-tabview-panels {
    padding: 0 !important;
    color: #000000 !important;
}

.p-tabview-nav {
    justify-content: center;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    color: #3EB073;
    border-color: #3EB073;
}

.p-inputtext {
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid #d7e1eb;
    font-size: 0.9rem;
    width: 100%;
}

.p-inputtext:enabled:hover {
    border-color: #3EB073;
}

.p-inputtext:enabled:focus {
    border-color: #3EB073;
    box-shadow: 0 0 0 0.2rem rgba(62, 176, 115, 0.25);
}
</style>

<style scoped>
    header {
        height: 100vh;
        width: 100%;
        background: url('/img/header.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    a {
        text-decoration: none;
    }

    .logo {
        width: 8rem;
        margin-right: 8rem;
    }

    .slogan {
        height: 100%;
        padding-left: 18rem;
        padding-top: 8rem;
    }

    .slogan h1 {
        margin: 0;
        font-size: 5rem;
        color: #ffffff;
    }

    .about {
        padding: 4rem 8rem;
        display: flex;
        gap: 4rem;
    }

    .about .image {
        width: 50%;
        border-radius: 1rem;
        overflow: hidden;
    }

    .about .image img {
        width: 100%;
        height: 100%;
    }

    .about .text {
        width: 50%;
    }

    .about .text h3 {
        font-size: 4rem;
        margin: 0;
    }

    .about .text p {
        font-size: 2rem;
    }

    .contact {
        padding: 4rem 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .contact h3 {
        font-size: 4rem;
        margin: 0;
    }

    form {
        width: 32rem;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 1.5rem;
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

</style>