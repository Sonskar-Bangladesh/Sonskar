<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: "http://localhost:3000/admin",
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <div>
    <button class="p-3" @click="signInWithOtp">Sign In with E-Mail</button>
    <input v-model="email" type="email" />
  </div>
</template>
