import mongoose from 'mongoose';

// An interface that describes the prop
// that are req to create a new user
interface userAttrs {
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model('User', userSchema);

const buildUser = (attrs: userAttrs) => {
	return new User(attrs);
};

export { User, buildUser };