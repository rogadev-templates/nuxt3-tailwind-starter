<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";
import { registerWithEmail } from "~/composables/useAuth";

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const username = ref("");
const name = ref("");
const errors = ref(new Map());
const processing = ref(false);
const response = ref<FormValidation>({ hasErrors: false });

const passwordsMatch = computed(() => password.value === passwordConfirm.value);
const disableSubmit = computed(
  () => !passwordsMatch.value || processing.value || anyFieldEmpty.value
);
const anyFieldEmpty = computed(
  () =>
    !email.value ||
    !password.value ||
    !passwordConfirm.value ||
    !username.value ||
    !name.value
);

const postFormRegistration = async () => {
  if (!passwordsMatch.value) {
    errors.value.set("passwordConfirm", "Passwords do not match");
    return;
  }
  processing.value = true;
  // TODO - add validation
  await registerWithEmail(
    username.value,
    name.value,
    email.value,
    password.value
  );
  // console.log(email.value, password.value, username.value, name.value);
  processing.value = false;
};
</script>

<template>
  <div class="dark:bg-slate-800 h-screen">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div class="lg:flex mt-10">
          <img
            class="mx-auto h-24 w-auto"
            src="/img/RogaLogo.svg"
            alt="Vancouver Island Gravel Trails"
          />
          <h1
            class="
              py-9
              text-center text-5xl
              font-extrabold
              text-gray-900
              dark:text-gray-200
            "
          >
            Vancouver Island Gravel Trails
          </h1>
        </div>
        <div>
          <h2
            class="
              text-center text-3xl
              font-extrabold
              mt-5
              text-gray-900
              dark:text-white
            "
          >
            Sign Up
          </h2>
        </div>
        <div
          v-if="response.hasErrors && errors"
          class="
            bg-red-100
            border border-red-400
            text-red-700
            px-4
            py-3
            rounded
            relative
            mt-3
          "
          role="alert"
        >
          <strong class="font-bold">Oops, try again! </strong>

          <ul class="block sm:inline">
            <li v-for="[key, value] in errors">
              {{ value.check.errorMessage }}
            </li>
          </ul>
        </div>
        <form
          v-on:submit.prevent
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input
                :disabled="processing"
                @focus="errors.delete('name')"
                v-model="name"
                id="name"
                name="name"
                required
                class="
                  disabled:opacity-50
                  appearance-none
                  dark:bg-slate-500 dark:text-white dark:placeholder-white
                  rounded
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                :class="errors.has('name') ? ' border-red-500' : ''"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">Username</label>
              <input
                :disabled="processing"
                @focus="errors.delete('username')"
                type="email"
                v-model="username"
                id="username"
                name="username"
                required
                class="
                  disabled:opacity-50
                  dark:bg-slate-500 dark:text-white dark:placeholder-white
                  appearance-none
                  rounded
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                :class="errors.has('username') ? ' border-red-500' : ''"
                placeholder="Username"
              />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                :disabled="processing"
                @focus="errors.delete('email')"
                v-model="email"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="
                  disabled:opacity-50
                  dark:bg-slate-500 dark:text-white dark:placeholder-white
                  appearance-none
                  rounded
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                :class="errors.has('email') ? ' border-red-500' : ''"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              :disabled="processing"
              @focus="errors.delete('password')"
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                disabled:opacity-50
                dark:bg-slate-500 dark:text-white dark:placeholder-white
                appearance-none
                rounded
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              :class="errors.has('password') ? ' border-red-500' : ''"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="passwordConfirm" class="sr-only"
              >Confirm Password</label
            >
            <input
              :disabled="processing"
              @focus="errors.delete('passwordConfirm')"
              v-model="passwordConfirm"
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              required
              class="
                disabled:opacity-50
                rounded
                dark:bg-slate-500 dark:text-white dark:placeholder-white
                appearance-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              :class="
                !passwordsMatch && password !== '' && passwordConfirm !== ''
                  ? ' border-red-500'
                  : ''
              "
              placeholder="Confirm Password"
            />
          </div>
        </form>

        <!-- Submit Button -->
        <button
          :disabled="disableSubmit"
          type="button"
          @click.prevent="postFormRegistration"
          :tooltip="disableSubmit ? 'Please fill out all fields' : ''"
          class="
            tooltip
            mt-5
            group
            relative
            w-full
            flex
            justify-center
            py-2
            px-4
            border border-transparent
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Register
          <span v-if="disableSubmit && !processing" class="tooltip-text"
            >Please fill all fields.</span
          >
        </button>
        <p class="text-center pt-6 italic" v-if="processing">Submitting...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  display: inline-block;
  position: relative;
}

.tooltip .tooltip-text {
  position: absolute;
  z-index: 1;
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 8px;
  border-radius: 6px;
  width: 160px;
  top: 150%;
  left: 50%;
  margin-left: -80px;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
