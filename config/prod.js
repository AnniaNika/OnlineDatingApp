module.exports = {

    MongoDB: process.env.MONGO_DB,
    //FacebookAppId: '165619915432340',
    FacebookAppId: process.env.FB_APP_ID,
    //FacebookAppSecret: 'cb8635bb329549b6791ba096f6a59d3c',
    FacebookAppSecret: process.env.FB_APP_SECRET,
    //GoogleClientID: '168669449814-ldmdotgllsuo6bugb2tpm4l0sgi71elf.apps.googleusercontent.com',
    GoogleClientID: process.env.GOOGLE_CLIENT_ID,
    //GoogleClientSecret: 'HMFvx_Ry-U4j_By9LGsw4bDa' 
    GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
    AWSAccessKeyID: process.env.AWS_ACCESS_KEY,
    AWSAccessKeySecret: process.env.AWS_ACCESS_SECRET,
    StripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    StripeSecretKey: process.env.STRIPE_SECRET_KEY
};