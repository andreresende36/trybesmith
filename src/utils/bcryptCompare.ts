import bcrypt from 'bcryptjs';

const comparePassword = async (loginPassword: string, storedPasswords: string[])
:Promise<boolean> => {
  const validation = await Promise.all(storedPasswords.map(async (password) => {
    const result = await bcrypt.compare(loginPassword, password);
    return result;
  }));
  return validation.includes(true);
};

export default comparePassword;