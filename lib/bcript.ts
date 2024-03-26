const bcrypt = require("bcrypt");

export async function hashPassword(unhashedPassword: FormDataEntryValue) {
  return bcrypt.hash(unhashedPassword, 10).then(function (hash: string) {
    return hash;
  });
}

export async function isSamePassword(
  unhashedPassword: string,
  hashedPassword: string
) {
 
  return bcrypt
    .compare(unhashedPassword, hashedPassword)
    .then(function (result: boolean) {
      return result;
    });
}
