import mongoose, { mongo } from "mongoose";

const ConnectionRequestSchema = mongoose.Schema({
    userId: {
        type :mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    connectionId:{
        type :mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status:{
        type: Boolean,
        default: null
    }
});

const ConnectionRequest = mongoose.model("ConnectionRequests",ConnectionRequestSchema);
export default ConnectionRequest;