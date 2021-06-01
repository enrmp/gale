from silence.decorators import endpoint

@endpoint(
    route="/trending/categorias",
    method="GET",
    sql="SELECT COUNT(*) AS num, C.* FROM photoscategoria PC natural join categoria C where PC.categoriaId=C.categoriaId GROUP BY C.categoriaId ORDER BY num DESC LIMIT 5"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/trending/photosValor",
    method="GET",
    sql="SELECT P.*, round(AVG(V.valor),1) AS media, U.username  FROM (photos P JOIN valoracion V ON (P.photoId=V.photoId)) JOIN Users U ON (P.userId = U.userId) WHERE DATEDIFF(CURRENT_TIMESTAMP,P.date)<=7 AND P.visibility='Public' GROUP BY P.photoId ORDER BY media DESC LIMIT 5"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/trending/comentarios",
    method="GET",
    sql="SELECT P.*, COUNT(C.comentarioId)AS num, U.username FROM photos P JOIN comentario C ON (P.photoId=C.photoId) JOIN Users U ON (P.userId = U.userId) WHERE DATEDIFF(CURRENT_TIMESTAMP,P.date)<=7 GROUP BY P.photoId ORDER BY num DESC LIMIT 5"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/trending/seguidos",
    method="GET",
    sql="SELECT U.*, COUNT(S.seguidorId) AS num FROM seguidores S JOIN users U ON (S.seguidosId=U.userId) GROUP BY S.seguidosId ORDER BY num DESC LIMIT 5"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/trending/usersValor",
    method="GET",
    sql="SELECT U.*,round(AVG(V.valor),1) AS media FROM users U JOIN photos P ON(U.userId=P.userId) JOIN valoracion V ON (P.photoId=V.photoId) WHERE P.visibility='public' GROUP BY P.userId ORDER BY media DESC LIMIT 5"
)
def get_all():
    pass

###############################################################################