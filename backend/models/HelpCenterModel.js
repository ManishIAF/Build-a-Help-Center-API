import mongoose from "mongoose";

const helpCenterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    }
});

const HelpCenterModel = mongoose.model('HelpCenter', helpCenterSchema);

export default HelpCenterModel;