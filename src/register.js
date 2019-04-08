import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(email, password) {
  const userPool = getUserPool()

  const attributeList = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: email
    })
  ]

  attributeList.push(new CognitoUserAttribute({
    Name: 'name',
    Value: Math.random().toString()
  }));

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
