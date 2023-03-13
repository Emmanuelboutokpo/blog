const connection = require("../db/db");

exports.getAll = (req,res) =>{
     /* const q = req.query.cat (permet de recuperer la categorie dans l'URL)
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });  if le user clique sur une categorie on recupere
   juste la categorie et on recuperer les post par categories
   sinon  on recupere tout les posts
  */

    const p = "SELECT * FROM post";
    connection.query(p, (err,data) =>{
        if (err) return res.status(500).send(err);
        if (data.length ==0) return res.status(404).json('Post not found!')
        return res.status(200).json(data);
    });

}

exports.getSingle = (req,res) =>{
     const q =
    "SELECT idpost, `username`, `title`, `content`, p.img, u.img AS userImg ,`createdAt` FROM users AS u JOIN post AS p ON idusers = idpost  WHERE idpost = ? ";
  connection.query(q, [parseInt(req.params.id)], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length ==0) return res.status(404).json('Post not found!')
    return res.status(200).json(data[0]);
  });
}

exports.postArticle = (req,res) =>{
     
}

exports.updatePost = (req,res) =>{
     
}

exports.deletePost = (req,res) =>{
    const token = req.cookies.token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const q = "DELETE FROM post WHERE `idpost` = ? AND `idusers` = ?";
  
      connection.query(q, [postId, userInfo.idusers], (err, data) => {
        if (err) return res.status(403).json("You can delete only your post!");
  
        return res.json("Post has been deleted!");
      });
    });
}