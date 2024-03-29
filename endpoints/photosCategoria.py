from silence.decorators import endpoint

@endpoint(
    route="/photoscategoria",
    method="GET",
    sql="SELECT * FROM photosCategoria"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$photoscategoriaId",
    method="GET",
    sql="SELECT * FROM photosCategoria WHERE photosCategoriaId = $photoscategoriaId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/photo/$photoId",
    method="GET",
    sql="SELECT nombre, categoriaId FROM Photos NATURAL JOIN photosCategoria NATURAL JOIN Categoria WHERE photoId = $photoId"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/categoria/$catId",
    method="GET",
    sql="SELECT P.*,C.* FROM Photos P NATURAL JOIN photosCategoria NATURAL JOIN Categoria C WHERE categoriaId = $catId AND visibility='public' order by P.date DESC"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/categoria/nombre/$cat",
    method="GET",
    sql="SELECT C.categoriaId FROM Categoria C WHERE C.nombre = $cat"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria",
    method="POST",
    sql="INSERT into photosCategoria (photoId, categoriaId) VALUES ($photoId, $categoriaId)",
    description="Creates a new photoscategoria",
    auth_required=True,
)
def create(photoId,categoriaId):
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$categoriaId",
    method="PUT",
    sql="UPDATE categoria SET nombre = $nombre WHERE categoriaId = $categoriaId",
    description="Updates an existing categoria",
    auth_required=True,
)
def update(nombre):
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$categoriaId/$photoId",
    method="DELETE",
    sql="DELETE FROM photosCategoria WHERE categoriaId = $categoriaId and photoId=$photoId",
    description="Removes a categoria",
    auth_required=True,
)
def delete():
    pass
