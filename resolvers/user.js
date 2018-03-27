import formatErrors from '../formatErrors';
import { tryLogin } from '../auth';
import bcrypt from 'bcrypt';


export default {
    Query: {
      getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
      allUsers: (parent, args, { models }) => models.User.findAll(),
    },
    Mutation: {
      createUser: (parent, args, { models }) => models.User.create(args),
      
      login: (parent, { email, password }, { models, SECRET, SECRET2 }) => {
        return(
          tryLogin(email, password, models, SECRET)
        )
      },
      
      register: async (parent, { password, ...otherArgs }, { models }) => {
        try {

          if (password.length < 5 || password.length > 100) {
            return {
              ok: false,
              errors: [
                {
                  path: 'password',
                  message: 'The password needs to be between 5 and 100 characters long',
                },
              ],
            };
          }
          
          const hashedPassword = await bcrypt.hash(password, 12);
          await models.User.create({ ...otherArgs, password: hashedPassword });
          return {
            ok: true
          };
        } catch (err) {
          return {
            ok: false,
            errors: formatErrors(err, models)
          };
        }
      }
    },
  };