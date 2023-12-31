const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt =require('bcrypt')


const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    accountType:{
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.statics.signup = async function(email, password, username, name, contact, accountType) {
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    if(!email || !password){
        throw Error('Email is not valid')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    // const exists = await this.findOne({email})
    // if(exists){
    //     throw Error('Email already in use')
    // }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, username, name, contact, accountType})
    return user
}

//static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('Email is not valid')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user

}

module.exports = mongoose.model("User", userSchema)