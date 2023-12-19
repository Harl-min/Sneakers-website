const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator =  require('validator')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
// console.log('bcrypt:', bcrypt);
//static signup method
userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email})
    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10)
    console.log('salt:', salt);
    const hash = await bcrypt.hash(password, salt)
    console.log('hash:', hash);
    const user = await this.create({email, password: hash})

    return user 
}

//static login method

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})
    if (!user) {
        throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password');
    }
    return user

}

userSchema.statics.forgotpassword = async function (email) {
    if (!email) {
        throw Error('Field must be filled')
    }
}

module.exports = mongoose.model('User', userSchema)