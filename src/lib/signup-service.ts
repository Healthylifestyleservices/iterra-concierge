// Simple signup service with mock implementation
export async function signUpUser(email: string, password: string) {
  // Mock implementation - replace with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve({
          status: 'success',
          message: 'Account created successfully!',
          user: { email, id: Date.now().toString() }
        });
      } else {
        resolve({
          status: 'error',
          message: 'Invalid email or password too short'
        });
      }
    }, 1000);
  });
}

// Original function as requested
export async function signUpUserExternal(email: string, password: string) {
  const response = await fetch("https://YOUR_NGROK_OR_COLAB_URL/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const result = await response.json();
  if (result.status === "success") {
    console.log("✅ Signup successful:", result);
  } else {
    console.error("❌ Signup error:", result.message);
  }
  return result;
}