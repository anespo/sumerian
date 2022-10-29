// TODO: Update the value below to match a Cognito Identity Pool created in your
// AWS account. The unauthenticated IAM role for the pool (usually ending in the
// suffix "Unauth_Role") must have the following managed permissions policies
// assigned to it:
//   - AmazonPollyReadOnlyAccess
//   - AmazonLexRunBotsOnly
const cognitoIdentityPoolId = 'us-east-1:279de7ec-d39b-4ca1-bd6c-41475856aa52';
module.exports = cognitoIdentityPoolId;
