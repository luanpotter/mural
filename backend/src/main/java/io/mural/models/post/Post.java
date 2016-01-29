package io.mural.models.post;

import io.mural.models.mural.Mural;
import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;
import io.yawp.repository.annotations.Text;

@Endpoint(path = "/posts")
public class Post {

    @Id
    IdRef<Post> id;

    IdRef<Mural> muralId;

    String nome;

    Tipo tipo;

    @Text
    String conteudo;
    
}
