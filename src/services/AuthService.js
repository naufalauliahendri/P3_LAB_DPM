export const authenticateUser = (username, password) => {
    // Simulasi otentikasi (di real-world gunakan API atau database)
    const dummyUser = { username: 'admin', password: '1234' };
    return username === dummyUser.username && password === dummyUser.password;
  };
  