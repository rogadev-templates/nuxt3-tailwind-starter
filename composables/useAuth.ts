import { OurSession } from "~/types/OurSession"

export async function registerWithEmail(username: string, name: string, email: string, password: string) {

  try {
    const response = await $fetch<OurSession>('/api/auth/register', {
      method: 'POST',
      body: {
        username,
        name,
        email,
        password
      }
    })

    if (response.ok) {
      userState('user').value = response
      await useRouter().push('/dashboard')
    }

  } catch (error) {
    console.error(`Error registering user: ${error.toString()}`);
  }
}