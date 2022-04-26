import { compareSync, genSaltSync, hashSync} from "bcryptjs";

export class HashManager{
 generateHash = (s: string):string => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt =  genSaltSync(rounds);
    const result = hashSync(s, salt);
    return result;
  }

 compare = (s: string, hash: string): boolean => {
    return compareSync(s, hash);
  }
}