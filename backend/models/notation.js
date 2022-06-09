const mongoose=require('mongoose');

const NoteSchema=new mongoose.Schema (
    {
        user: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true}],
        movie: [{type: mongoose.Schema.Types.ObjectId, ref: "MovieModel", required: true}],
        note: {type: Number, required: true}
    }
)

const NoteModel = mongoose.model("NoteModel", NoteSchema, "notes");

module.exports=NoteModel;